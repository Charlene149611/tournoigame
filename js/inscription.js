document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const select = document.getElementById("tournament-select");
    fetch("../data/tournaments.json")
    
    .then(res => res.json())
    .then(data => {
        data.tournaments.forEach(t => {
        const option = document.createElement("option");
        option.value = t.id;
        option.textContent = `${t.name} (${t.currentParticipants}/${t.maxParticipants})`;
        select.appendChild(option);
        });
        });

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tournamentId = parseInt(select.value);


    const registered = JSON.parse(localStorage.getItem("registration"));
    if (registered && registered.email === email) {
    localStorage.setItem("confirmationMessage", "Vous êtes déjà inscrit à un tournoi.");
    window.location.href = "confirmation.html";
    return;
    }


    fetch("../data/tournaments.json")
    .then(res => res.json())
    .then(data => {
    const tournoi = data.tournaments.find(t => t.id === tournamentId);
    if (!tournoi) return;

    if (tournoi.currentParticipants >= tournoi.maxParticipants) {
    localStorage.setItem("confirmationMessage", "Ce tournoi est complet.");
    } else {


    const registration = {
    name,
    email,
    tournamentId,
    tournamentName: tournoi.name
    };
    localStorage.setItem("registration", JSON.stringify(registration));
    localStorage.setItem("confirmationMessage", `Inscription réussie au tournoi ${tournoi.name}.`);
    }
    window.location.href = "confirmation.html";
    });
    });