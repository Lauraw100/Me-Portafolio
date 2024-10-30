import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('portfolio-about')
export class About extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--color-white);
      color: var(--color-black);
      padding: 2rem;
      margin-top: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }
    :host(:hover) {
      transform: translateY(-5px);
    }
    h2 {
      color: var(--color-violet);
    }
  `;

  render() {
    return html`
      <h2>Sobre Mí</h2>
      <p>Soy un desarrollador web apasionado por crear experiencias interactivas y atractivas. Me especializo en tecnologías front-end y disfruto trabajando en proyectos creativos.</p>
    `;
  }
  
}

customElements.define('about',About)