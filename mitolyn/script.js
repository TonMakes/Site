let userInteracted = false;

function markClick() {
    userInteracted = true;
}

function closePopup() {
    document.getElementById("exit-popup").style.display = "none";
}

document.addEventListener("mouseleave", (e) => {
    if (!userInteracted && e.clientY < 50) {
        document.getElementById("exit-popup").style.display = "flex";
    }
});
// filepath: c:\Users\evert\Site\mitolyn\script.js

function markClick() {
    userInteracted = true;
}

function closePopup() {
    document.getElementById("exit-popup").style.display = "none";
}

document.addEventListener("mouseleave", (e) => {
    if (!userInteracted && e.clientY < 50) {
        const popup = document.getElementById("exit-popup");
        popup.style.display = "flex";
        popup.classList.remove("shake"); // Reinicia animação se necessário
        void popup.offsetWidth; // Força reflow
        popup.classList.add("shake");
    }
});