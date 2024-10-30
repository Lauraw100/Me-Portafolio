import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header.js';
import './components/About.js';
import './components/Projects.js';
import './components/Contact.js';

@customElement('portfolio-app')
export class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      --color-pink: #FF69B4;
      --color-violet: #8A2BE2;
      --color-white: #FFFFFF;
      --color-black: #000000;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
  `;

  render() {
    return html`
      <div class="container">
        <portfolio-header></portfolio-header>
        <portfolio-about></portfolio-about>
        <portfolio-projects></portfolio-projects>
        <portfolio-contact></portfolio-contact>
      </div>
    `;
  }
}

const app = document.querySelector('#app');
app.innerHTML = '<portfolio-app></portfolio-app>';