<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Akshar:wght@600&display=swap">
  <link rel="stylesheet" href="styles/style.css">
  <link rel="icon" type="image/x-icon" href="/images/favicon.png">
  <title>Anthony Davis' Projects</title>
</head>

<body>
  <header>
    <h1>Anthony Davis' Projects</h1>
  </div>
    <div id="theme-switch-container" style="display:none">
      <p>Toggle Light</p>
      <label id="theme-slider" for="checkbox">
        <input type="checkbox" id="checkbox" onchange="toggleTheme(this)" />
        <div class="slider-background">
          <div class="slider-ball"></div>
        </div>
        <br />
      </label>
    </div>
  </header>
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
  </div>
  <div id="javascript-off-warning">
    <p>WARNING: You should be able to navigate just fine. But to enable full site functionality, please enable
      JavaScript.</p>
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
  <aside>
  <figure>
    <img src="images/portrait1.jpg"></img>
    <figcaption>Katie Saunders (left) with Anthony Davis (right), married since 2023</figcaption>
  </figure>
</aside>

  <main>
  <h2>Welcome</h2>
  <p>I'm Anthony Davis, a software engineer dedicated to delivering exceptional solutions while providing a personal and
    approachable experience. Explore my portfolio to gauge whether my services align with your needs and aspirations.
  </p>

  <p>I strive to create a welcoming environment where you can learn about my expertise and explore potential
    collaborations. With years of experience in software engineering, I bring a wealth of knowledge in programming
    languages, frameworks, and cutting-edge technologies.</p>

  <p>Whether you have questions, project ideas, or want to explore possibilities, I invite you to reach out. Let's
    discuss how we can collaborate to make your vision a reality.</p>
</main>

  <footer>
  <p>&copy; 2023 Anthony Davis. All rights reserved.</p>
</footer>
</body>
<script src="scripts/script.js"></script>
</html>

