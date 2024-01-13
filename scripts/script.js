var root = document.documentElement;

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header>Anthony Davis' Portfolio</header>
      `;
    }
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div id="navbar-container">
                <a href="index.html">Home</a>
                <a href="#">Arcade</a>
                <div class="dropdown">
                    <a href="#">Employment</a>
                    <div class="dropdown-content">
                        <a href="#">Test Automation Engineer</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Academics</a>
                    <div class="dropdown-content">
                        <a href="academic-history.html">History</a>
                        <a href="#">Student Projects</a>
                        <a href="https://antdaviscsumb.weebly.com/" target="_blank">Student Portfolio (Obsolete)</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Projects</a>
                    <div class="dropdown-content">
                        <a href="https://anthdavis26.github.io/mockup-store/" target="_blank">Mockup Store</a>
                        <a href="#">Academic Projects</a>
                        <a href="https://github.com/AnthDavis26?tab=repositories" target="_blank">GitHub Repositories</a>
                    </div>
                </div>
                <a href="resume.pdf" target="_blank">Resume</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
        `;
    }
}

class Aside extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <aside>
        <figure>
          <img src="images/portrait1.png"></img>
          <figcaption>Anthony Davis</figcaption>
        </figure>
      </aside>
      `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; 2023 Anthony Davis. All rights reserved.</p>
        </footer>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    customElements.define('header-component', Header);
    customElements.define('navbar-component', Navbar);
    customElements.define('aside-component', Aside);
    customElements.define('footer-component', Footer);
    document.getElementsByTagName('main')[0].style.display = '';

    // Dynamically change title based on first h2 element
    document.title = "Anthony Davis | " + document.getElementsByTagName("h2")[0].innerText;
});
