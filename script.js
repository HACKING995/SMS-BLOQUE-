// Sélectionner les éléments nécessaires
const blockButton = document.getElementById('blockButton');
const successMessage = document.getElementById('successMessage');

// Ajouter un événement sur le bouton
blockButton.addEventListener('click', () => {
  const phoneNumber = document.getElementById('phoneNumber').value;

  // Vérifier si un numéro a été saisi
  if (!phoneNumber) {
    alert("Veuillez entrer un numéro de téléphone valide !");
    return;
  }

  blockButton.innerHTML = "Traitement en cours..."; // Changer le texte du bouton
  blockButton.disabled = true; // Désactiver le bouton temporairement

  // Simuler un paiement fictif ou une action
  setTimeout(() => {
    successMessage.style.display = 'block'; // Afficher le message de succès
    blockButton.innerHTML = "Bloquer maintenant"; // Réinitialiser le texte du bouton
    blockButton.disabled = false; // Réactiver le bouton
  }, 2000); // Effectuer l'action après 2 secondes
});
