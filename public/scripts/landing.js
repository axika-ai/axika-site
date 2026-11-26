document.getElementById('menuBtn').addEventListener('click',function(e){e.preventDefault();this.closest('nav').classList.toggle('open')});
document.querySelectorAll('nav a.lk').forEach(function(a){a.addEventListener('click',function(){a.closest('nav').classList.remove('open')})});
/* Fit the dark-panel ring image so its top edge lands on the Name field and its
   bottom edge on the Press & speaking row, at any viewport width. The ring
   occupies y 0.102-0.884 of the source image. */
(function(){
  var slot=document.getElementById('contact-bg'),dark=document.querySelector('.dark');
  if(!slot||!dark)return;
  var TOP=0.102,BOT=0.884,AR=1536/1024;
  function fit(){
    if(innerWidth<=1000){slot.style.removeProperty('--ringTop');slot.style.removeProperty('--ringW');return}
    var name=document.querySelector('#contactForm input[name=name]');
    var press=[].slice.call(document.querySelectorAll('footer .flist span')).filter(function(s){return /press/i.test(s.textContent)})[0];
    if(!name||!press)return;
    var d=dark.getBoundingClientRect(),T=name.getBoundingClientRect().top-d.top,B=press.getBoundingClientRect().bottom-d.top;
    /* Cap the RING's width (it spans x 0.409-0.890 of the source), not the whole
       image box — the empty left backdrop may clip past the panel edge. */
    var h=(B-T)/(BOT-TOP),w=h*AR,max=d.width*0.72/0.481;
    if(w>max){w=max;h=w/AR}
    slot.style.setProperty('--ringW',w.toFixed(1)+'px');
    slot.style.setProperty('--ringTop',(T-TOP*h).toFixed(1)+'px');
  }
  fit();addEventListener('resize',fit);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
})();
/* Analytics events: section visibility (event name + section id) and form
   submission (event name only). Never attach form field contents or any
   other personal data to an event. */
(function(){
  window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};
  var seen={};
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){
    if(e.isIntersecting&&!seen[e.target.id]){seen[e.target.id]=1;plausible('Section View: '+e.target.id);obs.unobserve(e.target)}
  })},{threshold:0.2});
  ['build','contact'].forEach(function(id){var el=document.getElementById(id);if(el)obs.observe(el)});
  var f=document.getElementById('contactForm');
  if(f)f.addEventListener('submit',function(){plausible('Contact Form Submit')});
})();
