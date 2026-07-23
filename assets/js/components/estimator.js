import { ESTIMATOR_CONFIG } from '../config/constants.js';

export function updateEstimator() {
  const typeEl = document.getElementById('est-type');
  const scaleEl = document.getElementById('est-scale');
  const out = document.getElementById('est-output');

  if (!typeEl || !scaleEl || !out) return;

  const type = typeEl.value;
  const scale = scaleEl.value;

  const config = ESTIMATOR_CONFIG[type] || ESTIMATOR_CONFIG.portfolio;
  const stack = config.stack;
  const validation = config.validation;
  const sla = config.getSla(scale);

  out.innerHTML = `
    <strong>Recommended Stack:</strong> ${stack}<br>
    <strong>Validation Standard:</strong> ${validation}<br>
    <strong>Estimated Delivery SLA:</strong> ${sla}
  `;
}
