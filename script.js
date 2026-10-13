
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "CodingBro" && password === "100100") {
        message.textContent = "Du är inloggad";
        message.style.color = "green";
    } else {
        message.textContent = "Fel användarnamn eller lösenord!";
        message.style.color = "red";
    }
});