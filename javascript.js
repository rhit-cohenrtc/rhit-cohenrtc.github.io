
// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/ Found how to use JS to insert a header into an html file. Lets me type it once and use a tag to insert into HTML page
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
            <li><a href="resume.html">Experience</a></li>
            <li><a href="portfolio.html">Projects</a></li>
            </ul>
        </nav>
      `;
  }
}

customElements.define('page-header', PageHeader);