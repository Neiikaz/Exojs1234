// Initialisation du compteur
let initialisationC = 0;
// Récupération des éléments du DOM
let compteur = document.getElementById('compteur'); // Je fait appelle a une variable que j'appel "recup"
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
    // console.log(compteur);
    // console.log(increment);
    // console.log(decrement);
// Fonction pour mettre à jour l'affichage du compteur
function updateAffi(){
    compteur.innerText = initialisationC;
}
// Fonction pour augmenter le compteur
function addCompteur (){
    initialisationC ++;
    updateAffi();
}
// Fonction pour diminuer le compteur
function downCompteur (){
    initialisationC --;
    updateAffi();
}
// Ajout des événements aux boutons
increment.addEventListener('click', addCompteur);
decrement.addEventListener('click', downCompteur);
// Initialisation de l'affichage
updateAffi();

