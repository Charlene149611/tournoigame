document.addEventListener("DOMContentLoaded", () => {
    const confirmation = document.getElementById("confirmation-message");
    const message = localStorage.getItem("confirmationMessage");
    const registration = JSON.parse(localStorage.getItem("registration"));
    
    confirmation.innerHTML = `
        <p>${message}</p>
        ${registration ? `<p>Nom : ${registration.name}</p>
        <p>Email : ${registration.email}</p>
        <p>Tournoi : ${registration.tournamentName}</p>` : ""}
        `;
});