import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('portfolio-projects')
export class Projects extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--color-pink);
      color: var(--color-white);
      padding: 2rem;
      margin-top: 2rem;
      border-radius: 8px;
    }
    h2 {
      margin-bottom: 1rem;
    }
    .project {
      background-color: var(--color-white);
      color: var(--color-black);
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 4px;
      transition: transform 0.3s ease;
    }
    .project:hover {
      transform: scale(1.05);
    }
  `;

  render() {
    return html`
      <h2>Mis Proyectos</h2>
      <div class="project">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1</p>
      </div>
      <div class="project">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2</p>
      </div>
    `;
  }
}