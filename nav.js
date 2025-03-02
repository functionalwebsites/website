// Load the navigation content
fetch('./nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        // Set up the event listener after the content is loaded
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        } else {
            console.error('Error: menuToggle or navMenu not found');
        }
    })
    .catch(error => console.error('Error loading navigation:', error));

// Ensure the DOMContentLoaded event doesn't try to set up the listener too early
document.addEventListener('DOMContentLoaded', () => {
    // The setup will happen after fetch completion
});

document.querySelectorAll(".nav-item > a").forEach(item => {
    item.addEventListener("click", function (event) {
        // Prevent link navigation
        event.preventDefault();

        // Toggle submenu visibility
        let submenu = this.nextElementSibling;
        if (submenu) {
            let isVisible = submenu.style.display === "block";
            document.querySelectorAll(".sub-menu").forEach(menu => menu.style.display = "none");
            submenu.style.display = isVisible ? "none" : "block";
        }
    });
});
