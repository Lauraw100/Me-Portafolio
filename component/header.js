import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('portfolio-header')
export class Header extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--color-violet);
      color: var(--color-white);
      padding: 2rem;
      text-align: center;
      animation: fadeIn 1s ease-in-out;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  render() {
    return html`
      <h1>Mi Portafolio</h1>
      <p>Desarrollador Web Creativo</p>
    `;
  }
}