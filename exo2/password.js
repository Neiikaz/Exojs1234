// Mot de passe correct
let mdp = 'Centaurus'
// Récupération des éléments du DOM
let password = document.getElementById('passwordInput');
let button = document.getElementById('checkButton');
let message = document.getElementById('message');
// Fonction pour vérifier le mot de passe
function checkMdp (){
    let mdpcorrect = password.value;
    if (mdpcorrect == mdp){
        message.textContent="C'est le bon mot de passe";
    }
    else{
        message.textContent="Veuillez réessayer"
    }
}
// Ajout de l'événement au bouton
button.addEventListener('click', checkMdp);