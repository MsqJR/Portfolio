export function toggleShortcutsModal() {
  const modal = document.getElementById('shortcuts-modal');
  if (modal) modal.classList.toggle('open');
}

export function toggleCliModal() {
  const modal = document.getElementById('cli-modal');
  if (modal) {
    modal.classList.toggle('open');
    if (modal.classList.contains('open')) {
      const cliInput = document.getElementById('cli-input');
      if (cliInput) cliInput.focus();
    }
  }
}
