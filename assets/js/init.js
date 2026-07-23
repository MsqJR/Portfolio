// Initialize theme and language immediately to prevent layout flashing
(function() {
  const theme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  
  const lang = localStorage.getItem('portfolio-lang') || 'en';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  if (lang === 'ar') {
    document.getElementById('bootstrapStyle').href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css';
  }
})();
