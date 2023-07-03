// Récupérer le bouton "Log In"
var logInBtn = document.getElementById("log-in-btn");

// Récupérer le div pour afficher les informations de connexion
var loginInfoDiv = document.getElementById("login-info");

// Récupérer les boutons de rubrique
var rubrique1Btn = document.createElement("button");
var rubrique2Btn = document.createElement("button");
var rubrique3Btn = document.createElement("button");
var etoilesBtn = document.createElement("button");
var periodeBtn = document.createElement("button");
var etoilesMenu = document.createElement("select");
var periodeMenu = document.createElement("select");
var motCleInput = document.createElement("input");
var motCleBtn = document.createElement("button");

rubrique1Btn.id = "rubrique1-btn";
rubrique1Btn.textContent = "Collecte des commentaires";

rubrique2Btn.id = "rubrique2-btn";
rubrique2Btn.textContent = "Résultats statistiques";

rubrique3Btn.id = "rubrique3-btn";
rubrique3Btn.textContent = "Rubrique 3";

etoilesBtn.id = "etoiles-btn";
etoilesBtn.textContent = "Étoiles";

etoilesMenu.id = "etoiles-menu";

for (var i = 1; i <= 5; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.textContent = i + " étoile(s)";
  etoilesMenu.appendChild(option);
}

periodeBtn.id = "periode-btn";
periodeBtn.textContent = "Période";

periodeMenu.id = "periode-menu";

for (var year = 2016; year <= 2023; year++) {
  var option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  periodeMenu.appendChild(option);
}

motCleInput.id = "mot-cle-input";
motCleInput.type = "text";
motCleInput.placeholder = "Entrez un mot-clé";

motCleBtn.id = "mot-cle-btn";
motCleBtn.textContent = "Rechercher";

// Ajouter un gestionnaire d'événement pour le clic sur le bouton "Log In"
logInBtn.addEventListener("click", function() {
  // Récupérer les valeurs de l'adresse e-mail et du mot de passe
  var email = prompt("Veuillez entrer votre adresse e-mail :");
  var password = prompt("Veuillez entrer votre mot de passe :");

  // Afficher les informations de connexion dans le div "login-info"
  loginInfoDiv.innerHTML = "Adresse e-mail : " + email + "<br>Mot de passe : " + password;

  // Afficher la fenêtre contextuelle de bienvenue
  alert("Welcome to Analyze Comment of your website!");

  // Ajouter les boutons de rubrique après la connexion
  var contentDiv = document.getElementById("content");
  contentDiv.appendChild(rubrique1Btn);
  contentDiv.appendChild(rubrique2Btn);
  contentDiv.appendChild(rubrique3Btn);
});

// Ajouter un gestionnaire d'événement pour le clic sur le bouton "Collecte des commentaires"
rubrique1Btn.addEventListener("click", function() {
  // Masquer les autres rubriques
  rubrique2Btn.style.display = "none";
  rubrique3Btn.style.display = "none";

  // Afficher le contenu de la rubrique "Étoiles" dans le div "rubrique-info"
  var rubriqueInfoDiv = document.getElementById("rubrique-info");
  rubriqueInfoDiv.innerHTML = "Contenu de la rubrique Étoiles";

  // Afficher le bouton "Étoiles"
  rubriqueInfoDiv.appendChild(etoilesBtn);

  // Masquer le bouton "Collecte des commentaires"
  rubrique1Btn.style.display = "none";
});

// Ajouter un gestionnaire d'événement pour le clic sur le bouton "Étoiles"
etoilesBtn.addEventListener("click", function() {
  // Afficher le menu déroulant des étoiles
  var rubriqueInfoDiv = document.getElementById("rubrique-info");
  rubriqueInfoDiv.appendChild(etoilesMenu);
  
  // Afficher le bouton "Période"
  rubriqueInfoDiv.appendChild(periodeBtn);
});

// Ajouter un gestionnaire d'événement pour le clic sur le bouton "Période"
periodeBtn.addEventListener("click", function() {
  // Afficher le menu déroulant de la période
  var rubriqueInfoDiv = document.getElementById("rubrique-info");
  rubriqueInfoDiv.appendChild(periodeMenu);

  // Afficher le champ de saisie du mot-clé
  rubriqueInfoDiv.appendChild(motCleInput);

  // Afficher le bouton de recherche
  rubriqueInfoDiv.appendChild(motCleBtn);
});

// Ajouter un gestionnaire d'événement pour le clic sur le bouton de recherche
motCleBtn.addEventListener("click", function() {
  var motCle = motCleInput.value;
  // Faire quelque chose avec le mot-clé (par exemple, l'envoyer au serveur)
  alert("Vous avez recherché le mot-clé : " + motCle);
});

// Ajouter des gestionnaires d'événements pour chaque bouton de rubrique
rubrique2Btn.addEventListener("click", function() {
  // Afficher le contenu de la rubrique 2 dans le div "rubrique-info"
  var rubriqueInfoDiv = document.getElementById("rubrique-info");
  rubriqueInfoDiv.innerHTML = "Contenu de la rubrique 2";
});

rubrique3Btn.addEventListener("click", function() {
  // Afficher le contenu de la rubrique 3 dans le div "rubrique-info"
  var rubriqueInfoDiv = document.getElementById("rubrique-info");
  rubriqueInfoDiv.innerHTML = "Contenu de la rubrique 3";
});

// Récupérer le bouton de retour à la page principale (maison)
var backBtn = document.getElementById("back-btn");

// Ajouter un gestionnaire d'événement pour le clic sur le bouton de retour
backBtn.addEventListener("click", function() {
  // Rediriger vers la page principale (remplacer "index.html" par le nom de votre fichier principal)
  window.location.href = "index.html";
});



// Ajouter un gestionnaire d'événement pour le clic sur le bouton de recherche
motCleBtn.addEventListener("click", function() {
  var motCle = motCleInput.value;
  var nbEtoiles = etoilesMenu.value;
  var periode = periodeMenu.value;

  // Appeler une fonction de recherche avec les paramètres saisis
  rechercheCommentaires(nbEtoiles, periode, motCle);
});

// Fonction de recherche de commentaires
function rechercheCommentaires(nbEtoiles, periode, motCle) {
  // Ici, vous devrez implémenter la logique de recherche réelle en utilisant les paramètres fournis
  
  // Exemple de console.log pour afficher les paramètres de recherche
  console.log("Recherche de commentaires :");
  console.log("Nombre d'étoiles : " + nbEtoiles);
  console.log("Période : " + periode);
  console.log("Mot-clé : " + motCle);
}


// Code JavaScript pour gérer l'envoi du commentaire
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupérer les valeurs des champs
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    // Créer un nouvel élément de commentaire
    var newComment = document.createElement("div");
    newComment.innerHTML = "<strong>" + name + "</strong>: " + comment;

    // Ajouter le commentaire à la section des commentaires
    var commentSection = document.getElementById("commentSection");
    commentSection.appendChild(newComment);

    // Réinitialiser les champs du formulaire
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});