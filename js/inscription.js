async function loadData() {
    try {
      const respTournois = await fetch('../data/tournaments.json');
      tournois = await respTournois.json();

    } catch (error) {
      console.error(error);
    }
}

(async () => {
    await loadData();
    console.log("Tournois quantité : ", tournois.length);
    console.log(tournois);



const tournoiSelect = document.getElementById("tournoiSelect");
console.log(tournoiSelect);

const tournamentSelect = document.getElementById("tournament-select");

tournois.forEach((e) => {
    tournamentSelect.innerHTML += 
    `<option value=${e.id} >${e.name} - ${e.date}</option>`
    
});

})();

tournoiSelect.addEventListener("click", () => {
    const nombreInscrit = parseInt(nombreInput.value);
    console.log(nombreInscrit);


    if (isNaN(nombreInscrit)){
        message.textContent = "Inscription confirmée";
        message.style.color = "orange";
    } else if (nombreInscrit <= 50) {
        message.textContent = "Tournoi complet";
        message.style.color = "red";
    } else {
        message.textContent = "Bienvenue sur le tournoi😊";
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "pages/confirmation.html";
        }, 1000);
    }
});
﻿
