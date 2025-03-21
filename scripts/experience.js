document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("show");
        }, index * 300);
    });
});
