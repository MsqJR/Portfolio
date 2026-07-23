import { switchView, initRouting } from './components/routing.js';
import { toggleTheme, getTheme, setThemeText } from './utils/theme.js';
import { updateEstimator } from './components/estimator.js';
import { handleAuditSubmit } from './services/auditService.js';
import { toggleShortcutsModal, toggleCliModal } from './components/modal.js';
import { handleCliInput } from './components/cli.js';
import { initKeyboardShortcuts } from './utils/keyboard.js';

// Bind functions to window so inline HTML handlers (e.g. onclick, onchange) work properly
window.switchView = switchView;
window.toggleTheme = toggleTheme;
window.updateEstimator = updateEstimator;
window.handleAuditSubmit = handleAuditSubmit;
window.toggleShortcutsModal = toggleShortcutsModal;
window.toggleCliModal = toggleCliModal;
window.handleCliInput = handleCliInput;

document.addEventListener('DOMContentLoaded', () => {
  initRouting();
  setThemeText(getTheme());
  initKeyboardShortcuts();
});
