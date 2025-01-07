function showPopup(message = "🎉 Surprise! Voici votre projet scolaire incroyable! 🎉") {
    // Créer un élément div pour le popup
    const popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.innerHTML = `
        <p>${message}</p>
        <button class="close-btn">OK</button>
    `;

    // Ajouter le popup au corps de la page
    document.body.appendChild(popup);

    // Ajouter un gestionnaire d'événements au bouton pour fermer le popup
    const button = popup.querySelector(".close-btn");
    button.addEventListener("click", () => popup.remove());
}
