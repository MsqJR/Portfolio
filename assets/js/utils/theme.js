import { THEME_KEY } from '../config/constants.js';

export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

export function setThemeText(theme) {
  const themeText = document.getElementById('theme-text');
  if (themeText) {
    themeText.textContent = theme.toUpperCase();
  }
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  setThemeText(next);
}
