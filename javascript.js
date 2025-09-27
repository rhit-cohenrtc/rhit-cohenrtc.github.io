
// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/ Found how to use JS to insert a header into an html file. Lets me type it once and use a tag to insert into HTML page
class PageHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
          <div id = "headerDiv">
            <p>Tristan Cohen-Rider</p>
            <nav>
                <a href="index.html">Home Page</a> 
                <a href="resume.html">Experience</a> 
                <a href="portfolio.html">Projects</a>
            </nav>
          </div>
        </header>
      `;
  }
}

class PageFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <nav>
        <a href="mailto:cohenrtc@rose-hulman.edu">Email</a> |
        <a href="https://www.linkedin.com/mynetwork/invite-connect/connections/">LinkedIn</a>
        </nav>
      </footer>
      `;
  }
}

customElements.define('page-header', PageHeader);
customElements.define('page-footer', PageFooter);


addEventListener("load", (e) => {
  let langItems = document.querySelectorAll("#langList li");
  let pic = document.querySelector("#langPhoto");
  let words = document.querySelector("#textLang");
  let langHead = document.querySelector("#headLang");

  for(let item of langItems){
  item.addEventListener("mouseover", (e) => {
    let lang = item.textContent;
    

    if(lang == "Python"){
      pic.src = "photos/site-logo.png";
      pic.alt = "kattis logo";

      langHead.textContent = "python";

      words.textContent = "A lot of my competitive programming experience is in pytthon. As well I work with python in setting up webservers and use it for machine learning, speccially in deep learning.";
    }
    else if(lang == "Java"){
      pic.src = "photos/editor_trees.png";
      pic.alt = "AVL tree for text editor";

      langHead.textContent = "Java";

      words.textContent = "Used java to implement a text editor using in order and rank conventions to search for substrings through the tree. Uses AVL rotations to keep the  binary tree structure balanced.";
    }
    else if(lang == "C++"){
      pic.src = "photos/sudoku.png";
      pic.alt = item.value + "sudoku puzzle";

      langHead.textContent = "C++";

      words.textContent = "Implemented a sudoku solver in C++ to parse through a grid, with bit masked backtracking and pruning for invalid solutions.";
    }
    else if(lang == "C"){
      pic.src = "photos/xv6.jpg";
      pic.alt = "MIT xv6 operating system";

      langHead.textContent = "C";

      words.textContent = "Added a mult-threading system to the xv6 operating system. Kept track of proccess ids, scheduling, ect. mix of c and RISC-V assembly.";
    }
    else if(lang == "Racket"){
      pic.src = "photos/racket.png";
      pic.alt = "racket programming language";

      langHead.textContent = "Racket";

      words.textContent = "Implemented a full racket interpreted in continuation passing style. The interpreted was able to run standard racket code, including being able to qucikly run itself on itself to up to five layers deep";
    }
    else if(lang == "HTML"){
      pic.src = "photos/HTML.png";
      pic.alt = "picture of the homepage";

      langHead.textContent = "HTML";

      words.textContent = "I made this thing? idk?";
    }
    else if(lang == "Javascript"){
      pic.src = "photos/js.png";
      pic.alt = "Picture of this list";

      langHead.textContent = "Javascript";

      words.textContent = "I made this list swap things out, thats some DOM";
    }
    else if(lang == "CSS"){
      pic.src = "photos/css.png";
      pic.alt = "photo of project page";

      langHead.textContent = "CSS";

      words.textContent = "Boy does that header exist. Boxes with borders am I right?";
    }
    else if(lang == "RISC-V Assembly"){
      pic.src = "photos/xv6.jpg";
      pic.alt = "MIT xv6 operating system";

      langHead.textContent = "RISC-V Assembly";

      words.textContent = "Added a mult-threading system to the xv6 operating system. Kept track of proccess ids, scheduling, ect. mix of c and RISC-V assembly.";
    }
    else if(lang == "LaTeX"){
      pic.src = "photos/latex.png";
      pic.alt = item.value + "latex rendered pdf";

      langHead.textContent = "LaTeX";

      words.textContent = "Fluent in LaTeX. Paper on bio math written in LaTeX, aside all my maths work.";
    }
  })
}
});