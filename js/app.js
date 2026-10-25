"use strict";
const $=s=>document.querySelector(s);
const safe=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slug=v=>v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
let catalog;
const publishedCategories=()=>catalog.categories.filter(c=>catalog.workshops.some(w=>w.category===c.id));
function route(type,id){return type==="workshop"?"?workshop="+encodeURIComponent(id):type==="category"?"?categorie="+encodeURIComponent(id):"index.html"}
function nav(){
 $("#navigation").innerHTML='<a href="index.html">Alle categorieën</a>'+publishedCategories().map(c=>'<div class="nav-category">'+safe(c.title)+'</div><a href="'+route("category",c.id)+'">Categorie bekijken</a>'+catalog.workshops.filter(w=>w.category===c.id).map(w=>'<a href="'+route("workshop",w.id)+'">'+safe(w.title)+'</a>').join("")).join("");
}
function home(category){
 const c=publishedCategories().find(x=>x.id===category);
 $("#home").hidden=false;$("#content").hidden=true;$("#print").hidden=true;$("#tocPanel").hidden=true;
 if(c){
  $("#home").innerHTML='<div class="hero"><a href="index.html">← Alle categorieën</a><h1>'+safe(c.title)+'</h1><p>'+safe(c.description)+'</p></div><h2>Workshops</h2><div class="workshop-list">'+(catalog.workshops.filter(w=>w.category===c.id).map(w=>'<a class="workshop-card" href="'+route("workshop",w.id)+'"><h3>'+safe(w.title)+'</h3><p>'+safe(w.description)+'</p><div class="meta">'+safe(w.duration||"")+'</div></a>').join("")||'<p>Voor dit onderwerp worden nog workshops ontwikkeld.</p>')+'</div>';
  $("#crumb").textContent=c.title;document.title=c.title+" · Workshop Studio";
 }else{
  $("#home").innerHTML='<div class="hero"><p class="eyebrow">YPKURT · WORKSHOP STUDIO</p><h1>Praktische workshops, helder uitgelegd.</h1><p>Ontdek handleidingen die je direct kunt gebruiken. Nieuwe thema’s verschijnen vanzelf zodra er workshops beschikbaar zijn.</p><a class="hero-back" href="https://ypkurt.nl/">← Terug naar YPKurt</a></div><h2>Beschikbare onderwerpen</h2><div id="categories" class="category-grid"></div>';
  $("#categories").innerHTML=publishedCategories().map(c=>'<a class="category-card" href="'+route("category",c.id)+'"><span class="category-icon" aria-hidden="true">'+safe(c.icon||"📚")+'</span><h3>'+safe(c.title)+'</h3><p>'+safe(c.description)+'</p><div class="meta">'+catalog.workshops.filter(w=>w.category===c.id).length+' workshop(s)</div></a>').join("");
  $("#crumb").textContent="";document.title="Workshop Studio · Workshops en handleidingen";
 }
}
function enhance(){
 const used=new Map;
 $("#content").querySelectorAll("h2,h3").forEach(h=>{const key=slug(h.textContent)||"onderdeel";const n=used.get(key)||0;used.set(key,n+1);h.id=n?key+"-"+(n+1):key;});
 $("#toc").innerHTML=[...$("#content").querySelectorAll("h2")].map(h=>'<a href="#'+h.id+'">'+safe(h.textContent)+'</a>').join("");
 $("#content").querySelectorAll("blockquote").forEach(b=>{const p=b.querySelector("p");if(!p)return;const m=p.textContent.match(/^\[!(TIP|WARNING|NOTE)\]\s*/i);if(!m)return;b.classList.add(m[1].toLowerCase());p.textContent=p.textContent.replace(m[0],"");const label=document.createElement("strong");label.textContent={TIP:"💡 Tip: ",WARNING:"⚠️ Let op: ",NOTE:"📖 Opmerking: "}[m[1].toUpperCase()];p.prepend(label);});
 $("#content").querySelectorAll("pre").forEach(p=>{const b=document.createElement("button");b.className="copy";b.type="button";b.textContent="Kopieer";b.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(p.querySelector("code")?.textContent||"");b.textContent="Gekopieerd!"}catch{b.textContent="Kopiëren niet gelukt"}});p.append(b)});
}
async function workshop(id){
 const w=catalog.workshops.find(x=>x.id===id);if(!w){home();$("#crumb").textContent="Workshop niet gevonden";return}
 $("#home").hidden=true;$("#content").hidden=false;$("#tocPanel").hidden=false;$("#print").hidden=false;$("#content").innerHTML="<h1>Workshop wordt geladen…</h1>";
 $("#crumb").textContent=(catalog.categories.find(c=>c.id===w.category)?.title||"Workshops")+" / "+w.title;
 try{
  const res=await fetch(w.path,{cache:"no-cache"});if(!res.ok)throw Error("HTTP "+res.status);
  if(!window.marked||!window.DOMPurify)throw Error("Markdown-bibliotheken ontbreken");
  $("#content").innerHTML=DOMPurify.sanitize(marked.parse(await res.text()));enhance();
  $("#footerText").textContent=w.duration||"Workshop";document.title=w.title+" · Workshop Studio";
 }catch(e){$("#content").innerHTML="<h1>Workshop kan niet worden geladen</h1><p>"+safe(e.message)+"</p>";$("#toc").innerHTML=""}
}
async function start(){
 $("#theme-toggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("workshop-theme",document.body.classList.contains("dark")?"dark":"light")});
 if(localStorage.getItem("workshop-theme")==="dark")document.body.classList.add("dark");
 $("#print").addEventListener("click",()=>window.print());
 try{
  const res=await fetch("data/workshops.json",{cache:"no-cache"});if(!res.ok)throw Error("HTTP "+res.status);catalog=await res.json();nav();
  const q=new URLSearchParams(location.search);if(q.has("workshop"))await workshop(q.get("workshop"));else home(q.get("categorie"));
 }catch(e){$("#home").innerHTML="<h1>Workshops kunnen niet worden geladen</h1><p>"+safe(e.message)+"</p>"}
}
start();
