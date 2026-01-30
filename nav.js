// load nav
fetch('./nav.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // hamburger menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // submenu logic
    document.querySelectorAll(".nav-item > a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            let submenu = this.nextElementSibling;
            if (!submenu) return;

            let isVisible = submenu.style.display === "block";
            document.querySelectorAll(".sub-menu").forEach(menu => menu.style.display = "none");
            submenu.style.display = isVisible ? "none" : "block";
        });
    });
});
