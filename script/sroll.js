        // Fonction pour mettre à jour la position du header lors du scroll
        window.onscroll = function() {
            var header = document.getElementById("main-header");
            var scrollPosition = window.scrollY;
            header.style.top = scrollPosition + "px";  // Le header suit la progression du scroll
        };