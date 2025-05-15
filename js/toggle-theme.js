// Fonction pour récupérer le theme depuis le localStorage

const currentTheme = localStorage.getItem('theme') || 'light';

// Appliquer le thème stocké

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggle-theme').innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.body.classList.remove('dark-mode');
    document.getElementById('toggle-theme').innerHTML = '<i class="fas fa-moon"></i>';
}

// On va ajouter l'évenement pour changer le thème

document.getElementById('toggle-theme').addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // On va sauvegarder le thème dans le localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // On va changer l'icône du bouton
    this.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}
);