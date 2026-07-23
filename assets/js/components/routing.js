import { VIEWS } from '../config/constants.js';

export function switchView(viewId) {
  let targetView = viewId;
  if (!VIEWS.includes(targetView)) targetView = 'home';

  VIEWS.forEach(v => {
    const sec = document.getElementById('view-' + v);
    const btn = document.getElementById('nav-' + v);
    if (sec) sec.classList.remove('active-view');
    if (btn) btn.classList.remove('active');
  });

  const activeSec = document.getElementById('view-' + targetView);
  const activeBtn = document.getElementById('nav-' + targetView);
  if (activeSec) activeSec.classList.add('active-view');
  if (activeBtn) activeBtn.classList.add('active');

  window.location.hash = '#' + targetView;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function initRouting() {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) switchView(hash);
  });

  const hash = window.location.hash.replace('#', '');
  if (hash) switchView(hash);
}
