import { switchView } from '../components/routing.js';
import { toggleTheme } from './theme.js';
import { toggleShortcutsModal, toggleCliModal } from '../components/modal.js';

let gKeyPressed = false;
let gKeyTimeout = null;

export function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Check if user is typing inside an interactive input field
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    const isInputActive = ['input', 'textarea', 'select'].includes(activeTag) || document.activeElement.isContentEditable;

    // Escape key always closes any active modals
    if (e.key === 'Escape') {
      const cliModal = document.getElementById('cli-modal');
      const shortcutsModal = document.getElementById('shortcuts-modal');
      if (cliModal) cliModal.classList.remove('open');
      if (shortcutsModal) shortcutsModal.classList.remove('open');
      return;
    }

    // Do not trigger global navigation hotkeys when typing in input forms
    if (isInputActive) return;

    // Press '?' or Shift+'/' to toggle YouTube-style Keyboard Shortcuts card
    if (e.key === '?' || (e.shiftKey && (e.key === '/' || e.code === 'Slash'))) {
      e.preventDefault();
      toggleShortcutsModal();
      return;
    }

    // Press '/' (without Shift) or Ctrl+K / Cmd+K to open Interactive CLI
    if ((!e.shiftKey && (e.key === '/' || e.code === 'Slash')) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      toggleCliModal();
      return;
    }

    // Press 't' to toggle Dark/Light Theme
    if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      toggleTheme();
      return;
    }

    // Numeric direct navigation keys (1: Home, 2: Experience, 3: Services, 4: Projects, 5: Audit)
    if (e.key === '1') { switchView('home'); return; }
    if (e.key === '2') { switchView('experience'); return; }
    if (e.key === '3') { switchView('services'); return; }
    if (e.key === '4') { switchView('projects'); return; }
    if (e.key === '5') { switchView('audit'); return; }

    // GitHub/Gmail style two-key sequence: 'g' followed by 'h', 'e', 's', 'p', or 'a'
    if (e.key.toLowerCase() === 'g') {
      gKeyPressed = true;
      clearTimeout(gKeyTimeout);
      gKeyTimeout = setTimeout(() => { gKeyPressed = false; }, 1000);
      return;
    }

    if (gKeyPressed) {
      const k = e.key.toLowerCase();
      gKeyPressed = false;
      clearTimeout(gKeyTimeout);

      if (k === 'h') { switchView('home'); }
      else if (k === 'e') { switchView('experience'); }
      else if (k === 's') { switchView('services'); }
      else if (k === 'p') { switchView('projects'); }
      else if (k === 'a') { switchView('audit'); }
    }
  });
}
