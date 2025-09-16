
(function(){
  // Consent banner (AGB & Datenschutz)
  var banner = document.getElementById('consent-banner');
  var btn = document.getElementById('consent-accept');
  var accepted = localStorage.getItem('skycarrent_consent_v1');
  if(!accepted && banner){ banner.classList.remove('hidden'); }
  if(btn){
    btn.addEventListener('click', function(){
      localStorage.setItem('skycarrent_consent_v1', '1');
      banner.classList.add('hidden');
    });
  }

  // Ensure brand name uppercase
  var brand = document.querySelector('.brand-name');
  if(brand) brand.textContent = (brand.textContent || '').toUpperCase();
})();
