document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectLink = document.getElementById("project-link");

    projectCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            projectTitle.textContent = this.getAttribute("data-title");
            projectDescription.textContent = this.getAttribute("data-description");
        });
        
        card.addEventListener("click", function () {
            window.open(this.getAttribute("data-link"), "_blank");
        });
    });
});
