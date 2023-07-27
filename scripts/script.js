var root = document.documentElement;
var initialTheme = localStorage.getItem('themePreference');

// If initial theme is not set        
if (!initialTheme) {
    // If user prefers light mode, set as initial theme. Otherwise, leave dark.
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
        <h1>Anthony Davis' Projects</h1>
      </header>
      `;
    }
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<nav>
        <div class="navbar-container">
          <a href="index.html">Home</a>
          <div class="dropdown">
            <a href="#">Projects</a>
            <div class="dropdown-content">
              <a href="#">Academic Projects</a>
              <a href="project-game.php">My Super Amazing Game</a>
              <a href="#">Project 2</a>
              <a href="#">Project 3</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="#">Blogs</a>
            <div class="dropdown-content">
              <a href="#">Blog Post 1</a>
              <a href="#">Blog Post 2</a>
              <a href="#">Blog Post 3</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="#">Academics</a>
            <div class="dropdown-content">
              <a href="academic-history.php">History</a>
              <a href="#">Projects</a>
              <a href="https://antdaviscsumb.weebly.com/" target="_blank">Student Portfolio (Obsolete)</a>
            </div>
          </div>
          <a href="resume.pdf" target="_blank">Resume</a>
          <a href="about.php">About</a>
          <a href="contact.php">Contact</a>
          <div id="theme-switch-container" style="display:none">
            <label id="theme-slider" for="checkbox">
              <input type="checkbox" id="checkbox" onchange="toggleTheme(this)" />
              <div class="slider-background">
                <div class="slider-ball"></div>
              </div>
            </label>
          </div>
        </div>
        <div id="javascript-off-warning">
          <p>WARNING: You should be able to navigate just fine. But to enable full site functionality, please enable
            JavaScript.</p>
        </div>
      </nav>
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
          <img src="images/portrait1.jpg"></img>
          <figcaption>Katie Saunders (left) with Anthony Davis (right), married since 2023</figcaption>
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

    // JavaScript enabled; turn off the warning
    document.getElementById('javascript-off-warning').style.display = 'none';

    // Display light toggle if JS not disabled
    document.getElementById('theme-switch-container').style.display = '';
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

});
