document.addEventListener("DOMContentLoaded", function() {
    // Sélection des colonnes de langage et des boutons pour la première section
    const langages1 = document.querySelectorAll('.langage');
    const prevBtn1 = document.getElementById('prevBtn');
    const nextBtn1 = document.getElementById('nextBtn');
    const progressBar1 = document.getElementById('progress');

    let currentIndex1 = 0;
    const totalItems1 = langages1.length;

    function updateDisplay1() {
        langages1.forEach((langage, index) => {
            langage.style.display = (index === currentIndex1) ? 'block' : 'none';
        });
        prevBtn1.disabled = currentIndex1 === 0;
        nextBtn1.disabled = currentIndex1 === totalItems1 - 1;
        const progressPercentage = ((currentIndex1 + 1) / totalItems1) * 100;
        progressBar1.style.width = progressPercentage + '%';
    }

    nextBtn1.addEventListener('click', () => {
        if (currentIndex1 < totalItems1 - 1) {
            currentIndex1++;
            updateDisplay1();
        } else {
            // Si on est à la fin, revenir au début
            currentIndex1 = 0;
            updateDisplay1();
        }
    });

    prevBtn1.addEventListener('click', () => {
        if (currentIndex1 > 0) {
            currentIndex1--;
            updateDisplay1();
        }
    });

    // Initialisation de l'affichage pour la première section
    updateDisplay1();

    // Gestion des colonnes de la deuxième section
    const langages2 = document.querySelectorAll('#langage-container2 .langage');
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    const progressBar2 = document.getElementById('progress2');

    let currentIndex2 = 0;
    const totalItems2 = langages2.length;

    function updateDisplay2() {
        langages2.forEach((langage, index) => {
            langage.style.display = (index === currentIndex2) ? 'block' : 'none';
        });
        prevBtn2.disabled = currentIndex2 === 0;
        nextBtn2.disabled = currentIndex2 === totalItems2 - 1;
        const progressPercentage = ((currentIndex2 + 1) / totalItems2) * 100;
        progressBar2.style.width = progressPercentage + '%';
    }

    nextBtn2.addEventListener('click', () => {
        if (currentIndex2 < totalItems2 - 1) {
            currentIndex2++;
            updateDisplay2();
        } else {
            // Si on est à la fin de la deuxième section, revenir au début de la première
            currentIndex2 = 0;
            currentIndex1 = 0;
            updateDisplay1();
            updateDisplay2();
        }
    });

    prevBtn2.addEventListener('click', () => {
        if (currentIndex2 > 0) {
            currentIndex2--;
            updateDisplay2();
        }
    });

    // Initialisation de l'affichage pour la deuxième section
    updateDisplay2();
});
