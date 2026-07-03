/* =============================================================
   VISIONPATH — extras.js v3
   Loader · Partículas · Scroll · Cursor · Tema · Idioma · Lightbox · Comentarios · FAQ
============================================================= */
(function(){
'use strict';

/* ── TRADUCCIONES ── */
const T = {
  es:{
    'nav-inicio':'Inicio','nav-problema':'Problema','nav-sobre':'Proyecto',
    'nav-funciona':'Tecnología','nav-beneficios':'Beneficios','nav-galeria':'Galería',
    'nav-simulador':'Simulador','nav-contacto':'Contacto','nav-faq':'FAQ',
    'tag-hero':'Tecnología Inclusiva',
    'hero-h1':'VisionPath',
    'hero-h2':'Tecnología que amplía la percepción del entorno y mejora la autonomía.',
    'hero-desc':'VisionPath transforma cualquier bastón convencional en un sistema inteligente capaz de detectar obstáculos mediante sensores ultrasónicos y alertar al usuario con vibraciones discretas y efectivas.',
    'btn-conocer':'Conocer Proyecto','btn-simulador':'Ver Simulador',
    'stat1-label':'Personas con discapacidad visual','stat2-label':'Compatible con bastones tradicionales','stat3-label':'Asistencia permanente',
    'label-desafio':'El desafío','title-problema':'Un <span>problema</span> real',
    'label-proyecto':'El proyecto','title-sobre':'¿Qué es <span>VisionPath</span>?',
    'label-tech':'La tecnología','title-funciona':'¿Cómo <span>funciona</span>?',
    'label-ventajas':'Ventajas','title-beneficios':'Por qué <span>VisionPath</span>',
    'label-impacto':'Impacto global','title-impacto':'Números que <span>importan</span>',
    'label-galeria':'Galería','title-galeria':'El proyecto en <span>imágenes</span>',
    'label-resultados':'Resultados','title-resultados':'Resultados <span>obtenidos</span>',
    'label-roadmap':'Hoja de ruta','title-futuro':'Futuro del <span>proyecto</span>',
    'label-stack':'Stack tecnológico','title-tech':'Tecnologías <span>utilizadas</span>',
    'label-faq':'Preguntas frecuentes','title-faq':'Preguntas <span>Frecuentes</span>',
    'label-comentarios':'Comunidad','title-comentarios':'Comentarios del <span>proyecto</span>',
    'ph-nombre':'Tu nombre','ph-email':'correo@ejemplo.com','ph-comentario':'¿Qué te parece el proyecto VisionPath?',
    'btn-comentar':'Publicar comentario','label-rating':'Tu valoración',
    'faq-q1':'¿Cuánto cuesta el kit VisionPath?','faq-a1':'El kit usa componentes estándar: Arduino Uno (~$5 USD), sensor HC-SR04 (~$1 USD) y motor vibrador (~$1 USD). Costo total estimado inferior a $20 USD.',
    'faq-q2':'¿Es compatible con cualquier bastón?','faq-a2':'Sí. VisionPath es 100% modular y desmontable. Se instala en cualquier bastón convencional sin modificaciones permanentes.',
    'faq-q3':'¿Cuánto dura la batería?','faq-a3':'Según la batería Li-Po usada, el sistema funciona entre 6 y 12 horas continuas. Carga por USB.',
    'faq-q4':'¿Puede usarse de noche o bajo la lluvia?','faq-a4':'El sensor HC-SR04 funciona sin luz ambiental. Se recomienda protección básica contra lluvia para los componentes.',
    'faq-q5':'¿A qué distancia detecta los obstáculos?','faq-a5':'Entre 5 y 100 cm con precisión de ±3 mm. Suave a 60-100 cm, moderada a 30-59 cm, intensa a 5-29 cm.',
    'faq-q6':'¿Interfiere con audífonos?','faq-a6':'No. Las alertas son táctiles (vibración) sin interferir con la percepción auditiva del entorno.',
    'theme-dark':'🌙 Oscuro','theme-light':'☀️ Claro','lang-label':'🌐 EN',
    'ver-galeria':'Ver toda la Galería','ver-simulador':'Ver Simulador',
    'contactar':'Contactar equipo',
    // Contacto
    'tag-contacto':'Conectando Tecnología e Inclusión',
    'h1-contacto':'Contacto','h2-contacto':'Hablemos sobre VisionPath y cómo podemos colaborar juntos.',
    'label-mision':'Propósito','title-mision':'Nuestra <span>misión</span>',
    'label-equipo':'El equipo','title-equipo':'Integrantes del <span>proyecto</span>',
    'label-academico':'Datos del proyecto','title-academico':'Información <span>académica</span>',
    // Simulador
    'tag-sim':'Simulación Interactiva','h1-sim':'Simulador',
    'h2-sim':'Observa cómo reacciona el bastón inteligente ante un obstáculo en tiempo real.',
    'label-sim':'Simulación en tiempo real','title-sim':'Sensor <span>Ultrasónico</span>',
    'btn-demo':'▶ Demo automática','btn-reset':'↺ Reiniciar',
    // Galería page
    'tag-gallery':'Registro Visual','h1-gallery':'Galería','h2-gallery':'Todas las imágenes del proyecto VisionPath.',
    'label-gallery':'Imágenes del proyecto','title-gallery':'Galería <span>completa</span>',
    'filter-all':'Todos','filter-kit':'Kit','filter-componentes':'Componentes','filter-pruebas':'Pruebas',
  },
  en:{
    'nav-inicio':'Home','nav-problema':'Problem','nav-sobre':'Project',
    'nav-funciona':'Technology','nav-beneficios':'Benefits','nav-galeria':'Gallery',
    'nav-simulador':'Simulator','nav-contacto':'Contact','nav-faq':'FAQ',
    'tag-hero':'Inclusive Technology',
    'hero-h1':'VisionPath',
    'hero-h2':'Technology that expands environmental perception and improves autonomy.',
    'hero-desc':'VisionPath transforms any conventional cane into an intelligent system capable of detecting obstacles through ultrasonic sensors and alerting the user with discrete and effective vibrations.',
    'btn-conocer':'Learn About Project','btn-simulador':'See Simulator',
    'stat1-label':'People with visual impairment','stat2-label':'Compatible with traditional canes','stat3-label':'Permanent assistance',
    'label-desafio':'The challenge','title-problema':'A <span>real</span> problem',
    'label-proyecto':'The project','title-sobre':'What is <span>VisionPath</span>?',
    'label-tech':'The technology','title-funciona':'How does it <span>work</span>?',
    'label-ventajas':'Advantages','title-beneficios':'Why <span>VisionPath</span>',
    'label-impacto':'Global impact','title-impacto':'Numbers that <span>matter</span>',
    'label-galeria':'Gallery','title-galeria':'The project in <span>images</span>',
    'label-resultados':'Results','title-resultados':'Results <span>obtained</span>',
    'label-roadmap':'Roadmap','title-futuro':'Future of the <span>project</span>',
    'label-stack':'Tech stack','title-tech':'Technologies <span>used</span>',
    'label-faq':'Frequently asked questions','title-faq':'Frequently Asked <span>Questions</span>',
    'label-comentarios':'Community','title-comentarios':'Project <span>Comments</span>',
    'ph-nombre':'Your name','ph-email':'email@example.com','ph-comentario':'What do you think of the VisionPath project?',
    'btn-comentar':'Post comment','label-rating':'Your rating',
    'faq-q1':'How much does the VisionPath kit cost?','faq-a1':'The kit uses standard components: Arduino Uno (~$5 USD), HC-SR04 sensor (~$1 USD) and vibration motor (~$1 USD). Total estimated cost under $20 USD.',
    'faq-q2':'Is it compatible with any cane?','faq-a2':'Yes. VisionPath is 100% modular and detachable. It can be installed on any conventional cane without permanent modifications.',
    'faq-q3':'How long does the battery last?','faq-a3':'Depending on the Li-Po battery used, the system can run 6 to 12 continuous hours. Charges via USB.',
    'faq-q4':'Can it be used at night or in the rain?','faq-a4':'The HC-SR04 sensor works without ambient light. Basic rain protection for components is recommended.',
    'faq-q5':'At what distance does it detect obstacles?','faq-a5':'Between 5 and 100 cm with ±3mm accuracy. Soft at 60-100 cm, moderate at 30-59 cm, intense at 5-29 cm.',
    'faq-q6':'Does it interfere with hearing aids?','faq-a6':'No. Alerts are tactile (vibration) and do not interfere with the user\'s auditory perception.',
    'theme-dark':'🌙 Dark','theme-light':'☀️ Light','lang-label':'🌐 ES',
    'ver-galeria':'See full Gallery','ver-simulador':'See Simulator',
    'contactar':'Contact team',
    'tag-contacto':'Connecting Technology & Inclusion',
    'h1-contacto':'Contact','h2-contacto':'Let\'s talk about VisionPath and how we can collaborate.',
    'label-mision':'Purpose','title-mision':'Our <span>mission</span>',
    'label-equipo':'The team','title-equipo':'Project <span>members</span>',
    'label-academico':'Project data','title-academico':'Academic <span>information</span>',
    'tag-sim':'Interactive Simulation','h1-sim':'Simulator',
    'h2-sim':'See how the smart cane reacts to an obstacle in real time.',
    'label-sim':'Real-time simulation','title-sim':'Ultrasonic <span>Sensor</span>',
    'btn-demo':'▶ Auto demo','btn-reset':'↺ Reset',
    'tag-gallery':'Visual Record','h1-gallery':'Gallery','h2-gallery':'All images of the VisionPath project.',
    'label-gallery':'Project images','title-gallery':'Full <span>Gallery</span>',
    'filter-all':'All','filter-kit':'Kit','filter-componentes':'Components','filter-pruebas':'Tests',
  }
};

let currentLang = localStorage.getItem('vp-lang') || 'es';

function applyLang(lang){
  currentLang = lang;
  const t = T[lang];
  document.documentElement.lang = lang;
  localStorage.setItem('vp-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if(t[key]) el.placeholder = t[key];
  });

  // Update lang buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(b => {
    b.innerHTML = '<span>🌐</span>' + (lang==='es'?'EN':'ES');
  });
  // Update theme buttons text
  document.querySelectorAll('.theme-toggle-btn').forEach(b => {
    const isLight = document.body.classList.contains('light-mode');
    b.innerHTML = '<span>'+(isLight?'🌙':'☀️')+'</span>'+(isLight ? t['theme-dark'] : t['theme-light']);
    // strip emoji from text key if needed
    b.innerHTML = (isLight ? '🌙 ' : '☀️ ') + (isLight ? (lang==='es'?'Oscuro':'Dark') : (lang==='es'?'Claro':'Light'));
  });
}

/* ── LOADER ── */
function initLoader(){
  const loader = document.getElementById('page-loader');
  if(!loader) return;
  window.addEventListener('load', ()=> setTimeout(()=> loader.classList.add('hidden-loader'), 700));
  setTimeout(()=> loader && loader.classList.add('hidden-loader'), 3000);
}

/* ── SCROLL PROGRESS ── */
function initScrollProgress(){
  const bar = document.getElementById('scroll-progress');
  if(!bar) return;
  window.addEventListener('scroll', ()=>{
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total>0 ? (window.scrollY/total)*100 : 0)+'%';
  },{passive:true});
}

/* ── PARTÍCULAS ── */
function initParticles(){
  const canvas = document.getElementById('particles-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize', resize, {passive:true});
  const pts = Array.from({length:50}, ()=>({
    x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
    vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35,
    r:Math.random()*1.5+.4, a:Math.random()*.4+.15
  }));
  const D=130;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{ p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
    });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<D){ ctx.beginPath(); ctx.strokeStyle=`rgba(56,189,248,${.1*(1-d/D)})`; ctx.lineWidth=.6;
        ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
    }
    pts.forEach(p=>{ ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`rgba(56,189,248,${p.a})`; ctx.fill(); });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── CURSOR ── */
function initCursor(){
  const dot=document.getElementById('cursor-dot'), ring=document.getElementById('cursor-ring');
  if(!dot||!ring) return;
  if(window.matchMedia('(hover:hover)').matches) document.documentElement.style.cursor='none';
  let mx=-100,my=-100,rx=-100,ry=-100;
  document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  (function anim(){ rx+=(mx-rx)*.14; ry+=(my-ry)*.14; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(anim); })();
  const sel='a,button,.btn,.card,.gallery-item,.gallery-page-item,.faq-question';
  document.addEventListener('mouseover',e=>{ if(e.target.closest(sel)) document.body.classList.add('cursor-hover'); });
  document.addEventListener('mouseout', e=>{ if(e.target.closest(sel)) document.body.classList.remove('cursor-hover'); });
}

/* ── TEMA ── */
function initTheme(){
  const saved = localStorage.getItem('vp-theme');
  if(saved==='light') applyTheme('light');

  document.querySelectorAll('.theme-toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const isLight = document.body.classList.contains('light-mode');
      applyTheme(isLight ? 'dark' : 'light');
    });
  });
}

function applyTheme(t){
  const isLight = t==='light';
  document.body.classList.toggle('light-mode', isLight);
  localStorage.setItem('vp-theme', t);
  const lang = currentLang;
  document.querySelectorAll('.theme-toggle-btn').forEach(b=>{
    b.innerHTML = (isLight?'🌙 ':'☀️ ') + (isLight ? (lang==='es'?'Oscuro':'Dark') : (lang==='es'?'Claro':'Light'));
  });
}

/* ── IDIOMA ── */
function initLang(){
  document.querySelectorAll('.lang-toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      applyLang(currentLang==='es'?'en':'es');
    });
  });
  applyLang(currentLang);
}

/* ── LIGHTBOX ── */
function initLightbox(){
  const box     = document.getElementById('lightbox');
  const boxImg  = document.getElementById('lightbox-img');
  const boxCap  = document.getElementById('lightbox-caption');
  const closeBtn= document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  if(!box||!boxImg) return;

  let items = [], idx = 0;

  function collectItems(){
    items = Array.from(document.querySelectorAll('.gallery-item img, .gallery-page-item img'));
  }

  function open(i){
    collectItems();
    idx = i;
    const img = items[idx];
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    if(boxCap) boxCap.textContent = img.closest('.gallery-item, .gallery-page-item')?.querySelector('span')?.textContent || img.alt;
    box.classList.add('open');
    document.body.style.overflow='hidden';
  }

  function close(){
    box.classList.remove('open');
    document.body.style.overflow='';
    setTimeout(()=>{ boxImg.src=''; }, 350);
  }

  function prev(){ open((idx-1+items.length)%items.length); }
  function next(){ open((idx+1)%items.length); }

  // Delegación de eventos para imágenes de galería (incluye las que se añadan después)
  document.addEventListener('click', e=>{
    const gi = e.target.closest('.gallery-item, .gallery-page-item');
    if(!gi) return;
    collectItems();
    const img = gi.querySelector('img');
    const i = items.indexOf(img);
    if(i>=0) open(i);
  });

  if(closeBtn) closeBtn.addEventListener('click', close);
  if(prevBtn)  prevBtn.addEventListener('click', prev);
  if(nextBtn)  nextBtn.addEventListener('click', next);

  box.addEventListener('click', e=>{ if(e.target===box) close(); });

  document.addEventListener('keydown', e=>{
    if(!box.classList.contains('open')) return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') prev();
    if(e.key==='ArrowRight') next();
  });

  // Touch swipe
  let touchX=0;
  box.addEventListener('touchstart', e=>{ touchX=e.touches[0].clientX; },{passive:true});
  box.addEventListener('touchend',   e=>{
    const dx=e.changedTouches[0].clientX-touchX;
    if(Math.abs(dx)>50){ dx<0?next():prev(); }
  });
}

/* ── FAQ ── */
function initFAQ(){
  document.querySelectorAll('.faq-question').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item=btn.closest('.faq-item');
      const open=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
      if(!open) item.classList.add('open');
    });
  });
}

/* ── COMENTARIOS ── */
const STORAGE_KEY = 'vp-comments-v1';

function loadComments(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]; }
  catch(e){ return []; }
}

function saveComments(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderComments(){
  const list = document.getElementById('commentsList');
  const countEl = document.getElementById('commentsCount');
  if(!list) return;
  const comments = loadComments();

  if(countEl) countEl.textContent = comments.length + ' comentario' + (comments.length!==1?'s':'');

  if(comments.length===0){
    list.innerHTML = '<div class="comment-empty">Sé el primero en comentar el proyecto ✨</div>';
    return;
  }

  list.innerHTML = comments.map(c=>`
    <div class="comment-card">
      <div class="comment-header">
        <div class="comment-avatar">${c.name.charAt(0).toUpperCase()}</div>
        <div class="comment-meta">
          <strong>${escHtml(c.name)}</strong>
          <span>${c.date}</span>
        </div>
        <div class="comment-stars">${'★'.repeat(c.stars)}${'☆'.repeat(5-c.stars)}</div>
      </div>
      <div class="comment-text">${escHtml(c.text)}</div>
    </div>
  `).join('');
}

function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function initComments(){
  const form    = document.getElementById('commentForm');
  const nameI   = document.getElementById('commentName');
  const textI   = document.getElementById('commentText');
  const stars   = document.querySelectorAll('.star-select span');
  let selectedStars = 5;

  stars.forEach((s,i)=>{
    s.addEventListener('click',()=>{
      selectedStars=i+1;
      stars.forEach((st,j)=> st.classList.toggle('selected', j<selectedStars));
    });
    s.addEventListener('mouseenter',()=>{
      stars.forEach((st,j)=> st.style.color = j<=i ? '#f59e0b':'#475569');
    });
  });
  const starWrap = document.querySelector('.star-select');
  if(starWrap) starWrap.addEventListener('mouseleave',()=>{
    stars.forEach((st,j)=> st.style.color = j<selectedStars?'#f59e0b':'#475569');
  });

  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const name = nameI?.value.trim();
      const text = textI?.value.trim();
      if(!name||!text) return;

      const comments = loadComments();
      comments.unshift({
        name, text, stars: selectedStars,
        date: new Date().toLocaleDateString('es-CL',{day:'numeric',month:'long',year:'numeric'})
      });
      saveComments(comments);
      renderComments();
      form.reset();
      selectedStars=5;
      stars.forEach(s=>{ s.classList.remove('selected'); s.style.color=''; });
    });
  }

  renderComments();
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', ()=>{
  initLoader();
  initScrollProgress();
  initParticles();
  initCursor();
  initTheme();
  initLang();
  initLightbox();
  initFAQ();
  initComments();
});

})();
