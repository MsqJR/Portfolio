export function handleAuditSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('audit-form');
  const success = document.getElementById('audit-success');
  if (form) form.reset();
  if (success) success.style.display = 'block';
}
