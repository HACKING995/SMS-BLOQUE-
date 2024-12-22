const blockButton = document.getElementById('blockButton');
const successMessage = document.getElementById('successMessage');


blockButton.addEventListener('click', () => {
  const phoneNumber = document.getElementById('phoneNumber').value;

  
  if (!phoneNumber) {
    alert("Veuillez entrer un numéro de téléphone valide !");
    return;
  }

  blockButton.innerHTML = "Traitement en cours..."; 
  blockButton.disabled = true;

  setTimeout(() => {
    successMessage.style.display = 'block'; 
    blockButton.innerHTML = "Bloquer maintenant"; 
    blockButton.disabled = false; 
  }, 2000);
});


  document.getElementById('blockButton').addEventListener('click', function () {
      
      const phoneNumber = document.getElementById('phoneNumber').value.trim();

      if (phoneNumber === '') {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
      }

      const message = `Bonjour, je souhaite bloquer ce numéro ou envoyer  des bugs : *${phoneNumber}* pour la fête votre  numéro pour le dépôt _soutient 1000xof_.`;
      const whatsappLink = `https://wa.me/2250705607226?text=${encodeURIComponent(message)}`;

      
      window.location.href = whatsappLink;

      
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
    });
