<nav>
  <div class="navbar-container">
    <a href="index.php">Home</a>
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

<script>
  // Script here to prevent message from briefly appearing when JS is enabled
  document.getElementById("javascript-off-warning").style.display = "none";

  // Display light toggle if JS not disabled
  document.getElementById("theme-switch-container").style.display = "";
  const root = document.documentElement;

  function toggleTheme(element) {
    const theme = element.checked ? 'light' : 'dark';
    root.setAttribute('theme', theme);
    localStorage.setItem('themePreference', theme);
  }

  // Detect user preference for dark mode
  const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = localStorage.getItem('themePreference') || (userPrefersDarkMode ? 'dark' : 'light');
  const themeToggle = document.getElementById('checkbox');

  // If initial theme is not set
  if (!initialTheme) {
    themeToggle.checked = !userPrefersDarkMode;
    root.setAttribute('theme', userPrefersDarkMode ? 'dark' : 'light');
  }
  else {
    themeToggle.checked = initialTheme === 'light';
    root.setAttribute('theme', initialTheme);
  }
</script>
