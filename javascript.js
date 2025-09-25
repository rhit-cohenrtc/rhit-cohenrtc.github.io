
class PageHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            Tristan Cohen-Rider
        </header>
        <nav>
            <ul>
            <li><a href="index.html">Home Page</a></li>
            <li><a href="resume.html">Expirences</a></li>
            <li><a href="portfolio.html">Projects</a></li>
            </ul>
        </nav>
      `;
  }
}

customElements.define('page-header', PageHeader);