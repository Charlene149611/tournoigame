document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const select = document.getElementById("tournament-select");
    fetch("../data/tournaments.json")
    
