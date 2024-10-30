import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('portfolio-contact')
export class Contact extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 2rem;
      margin-top: 2rem;
      border-radius: 8px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    input, textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: none;
    }
    button {
      background-color: var(--color-pink);
      color: var(--color-white);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: var(--color-violet);
    }
  `;

  render() {
    return html`
      <h2>Contáctame</h2>
      <form>
        <input type="text" placeholder="Nombre" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    `;
  }
}