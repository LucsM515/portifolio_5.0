document.addEventListener("DOMContentLoaded", function () {
    // animação de digitação...

    const title = `Olá, meu nome é Lucas Matias.`;
    const paragraph = `Sou um Desenvolvedor front-end com experiência em criar interfaces responsivas e otimizadas.\n
    Tenho conhecimento em diversas tecnologias front-end e back-end, incluindo React, PHP, NodeJS e .NET.\n
    Gosto de ter foco em melhoria de UI/UX design e responsividade.\n
    Mesmo sabendo diversas tecnologias, meu foco é o front-end.`;

    function typeEffect(element, text, speed, callback) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i).replace(/\n/g, "<br>");
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }
        typing();
    }

    const titleElement = document.getElementById("typewriter");
    const textElement = document.getElementById("typewriter-text");

    typeEffect(titleElement, title, 25, function () {
        typeEffect(textElement, paragraph, 15);
    });


    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
