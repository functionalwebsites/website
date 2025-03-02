document.addEventListener('DOMContentLoaded', function() {
  const textBoxes = document.getElementsByClassName('text-box');
  for (let i = 0; i < textBoxes.length; i++) {
      const textBox = textBoxes[i];
      const text = textBox.textContent;
      if (text) {
          let newHTML = '';
          let nonSpaceCharCount = 0; // Counter for non-space characters
          for (let j = 0; j < text.length; j++) {
              if (text[j] !== ' ') {
                  nonSpaceCharCount++;
              }
              if (nonSpaceCharCount % 40 === 0 && text[j] !== ' ') {
                  const rotation = (Math.random() * (4 - 2) + 2).toFixed(2); // Random rotation between 2 and 4
                  const sign = Math.random() < 0.5 ? -1 : 1; // Randomly choose between positive and negative
                  newHTML += `<span class="crooked" style="transform: rotate(${sign * rotation}deg);">${text[j]}</span>`;
              } else {
                  newHTML += text[j];
              }
          }
          textBox.innerHTML = newHTML;
      } else {
          console.error('No text content found in the .text-box element.');
      }
  }

// switch 
// da 
// meta theme switcher
// theme-color switcher

  function switchThemeColor(color) {
    document.getElementById('theme-color').setAttribute('content', color);
  }

  function checkDarkMode() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
      switchThemeColor("#222222");  // Dark mode color, match with CSS
    } else {
      switchThemeColor("#333333");  // Light mode color, match with CSS
    }
  }

  window.addEventListener('load', checkDarkMode);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', checkDarkMode);

  //animation 

  window.addEventListener('beforeunload', function (event) {
            const content = document.getElementById('main-content');
            const nav = document.getElementById('nav-placeholder');
            content.classList.add('down');
            nav.classList.add('up');
        });

        window.addEventListener('load', function (event) {
            const content = document.getElementById('main-content');
            const nav = document.getElementById('nav-placeholder');
            content.classList.remove('down');
            nav.classList.remove('up');
        });
});


//lightmode x darkmode
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const icon = document.getElementById('icon');

  // Determine the initial theme
  const userPreference = localStorage.getItem('theme');
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const initialTheme = userPreference || systemPreference;

  // Apply the initial theme
  if (initialTheme === 'dark') {
      applyDarkMode();
  } else {
      applyLightMode();
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
          applyLightMode();
          localStorage.setItem('theme', 'light');
      } else {
          applyDarkMode();
          localStorage.setItem('theme', 'dark');
      }
  });

  function applyDarkMode() {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--nav-bg-color', '#222222');
      document.documentElement.style.setProperty('--nav-text-color', '#ffffff');
      icon.textContent = '☽';
  }

  function applyLightMode() {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--nav-bg-color', '#ffffff');
      document.documentElement.style.setProperty('--nav-text-color', '#000000');
      icon.textContent = '☀';
  }
});

