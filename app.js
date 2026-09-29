const WA='91919171712129';
const wa=(message='Hello SR Garments, I am interested in your wholesale garment collection.')=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
function wireWhatsApp(){document.querySelectorAll('[data-wa]').forEach(el=>{el.href=wa(el.dataset.wa||undefined);el.target='_blank';el.rel='noopener'});}
function wireNav(){document.querySelectorAll('a[data-page]').forEach(a=>a.addEventListener('click',e=>{const href=a.getAttribute('href');if(!href||href.startsWith('#')||a.target==='_blank')return;e.preventDefault();document.body.style.opacity='.75';setTimeout(()=>location.href=href,180)}));}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
window.addEventListener('scroll',()=>document.querySelector('.nav')?.classList.toggle('scrolled',scrollY>30));
wireWhatsApp();wireNav();
