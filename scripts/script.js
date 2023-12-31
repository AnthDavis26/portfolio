var root = document.documentElement;
var initialTheme = localStorage.getItem('themePreference');    
if (!initialTheme) {
    const userPrefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    initialTheme = userPrefersLightMode ? "light" : "dark";
}
root.setAttribute('theme', initialTheme);
class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>Anthony Davis' Portfolio</h1>
        </header>
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
                <div id="theme-switch-container" style="display:none">
                    <label id="theme-slider" for="checkbox">
                    Light Switch
                        <input type="checkbox" id="checkbox" onchange="toggleTheme(this)" />
                        <div id="theme-slider-background">
                            <div id="theme-slider-ball"></div>
                        </div>
                    </label>
                </div>
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
    }java
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
    document.getElementById('theme-switch-container').style.display = '';
    document.getElementsByTagName('main')[0].style.display = '';
    const themeToggle = document.getElementById('checkbox');
    function toggleTheme(element) {
        const theme = element.checked ? 'light' : 'dark';
        root.setAttribute('theme', theme);
        localStorage.setItem('themePreference', theme);
    }
    // Bind the toggleTheme function to the 'change' event of the theme toggle
    themeToggle.addEventListener('change', function () {
        toggleTheme(this);
    });
    themeToggle.checked = initialTheme === 'light';
    // Dynamically change title based on first h2 element
    document.title = "Anthony Davis | " + document.getElementsByTagName("h2")[0].innerText;
});
