import { switchView } from './routing.js';
import { toggleTheme } from '../utils/theme.js';
import { toggleCliModal } from './modal.js';
import { CLI_HELP_TEXT } from '../config/constants.js';

export function handleCliInput(e) {
  if (e.key === 'Enter') {
    const input = e.target.value.trim().toLowerCase();
    e.target.value = '';
    if (!input) return;

    const output = document.getElementById('cli-output');
    if (!output) return;

    const cmdLine = document.createElement('div');
    cmdLine.className = 'cli-line';
    cmdLine.innerHTML = `<span style="color: var(--accent-green);">guest@markmounir:~$</span> ${input}`;
    output.appendChild(cmdLine);

    let resText = "";
    switch(input) {
      case 'help':
        resText = CLI_HELP_TEXT;
        break;
      case 'overview':
      case 'home':
        switchView('home');
        resText = "Navigated to Overview view.";
        toggleCliModal();
        break;
      case 'services':
        switchView('services');
        resText = "Navigated to Services view.";
        toggleCliModal();
        break;
      case 'projects':
      case 'proof':
        switchView('projects');
        resText = "Navigated to Structural Projects view.";
        toggleCliModal();
        break;
      case 'audit':
      case 'contact':
        switchView('audit');
        resText = "Navigated to Free Audit view.";
        toggleCliModal();
        break;
      case 'theme':
        toggleTheme();
        resText = "Switched visual theme.";
        break;
      case 'experience':
      case 'exp':
        switchView('experience');
        resText = "Navigated to Engineering Experience view.\n" +
                  "• EVA Pharma — Backend Developer Intern (EVA AI Hackathon) [Jul. 2026 – Present]\n" +
                  "  .NET Core, Angular, EF Core, Domain-Driven Design (DDD), Swagger/Postman\n" +
                  "• GB Corp. — Backend Development Intern [Aug. 2025]\n" +
                  "  Django, RESTful APIs, Postman, Multi-tenant authentication";
        toggleCliModal();
        break;
      case 'clear':
        output.innerHTML = "";
        return;
      case 'exit':
        output.innerHTML = "";
        toggleCliModal();
        return;
      default:
        resText = `Command not recognized: '${input}'. Type 'help' for options.`;
    }

    const resLine = document.createElement('div');
    resLine.className = 'cli-line';
    resLine.style.color = 'var(--muted)';
    resLine.innerHTML = resText.replace(/\n/g, '<br>');
    output.appendChild(resLine);
    output.scrollTop = output.scrollHeight;
  }
}
