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
