document.addEventListener("DOMContentLoaded", () => {
    
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("show");
        }, index * 300);
    });

    
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});
