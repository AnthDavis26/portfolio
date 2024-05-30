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
                <div class="dropdown">
                    <a href="#">Game Dev</a>
                    <div class="dropdown-content">
                        <a href="https://github.com/AnthDavis26/PAG_Text" target="_blank">C++ Text Adventure: Post-Apocalyptic George</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Web Dev</a>
                    <div class="dropdown-content">
                        <a href="https://anthdavis26.github.io/mockup-store/" target="_blank">Mockup Store</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="#">Academics</a>
                    <div class="dropdown-content">
                    <a href="#">Academic Projects</a>
                        <a href="https://github.com/AnthDavis26?tab=repositories" target="_blank">GitHub Repositories</a>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1RGpVFwT6LoTDMKarko_c1zG9-M5BLgSy/view?usp=sharing" target="_blank">Resume</a>
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
                <figcaption><b>Anthony Davis</b></figcaption>
                <figcaption>Bachelor of Science Graduate in Computer Science</figcaption>
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
