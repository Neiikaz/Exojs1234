// Tableau contenant les citations
const citations = [
    "La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets. - John Lennon",
    "Le succès, c’est tomber sept fois, se relever huit. - Proverbe japonais",
    "Tout ce que vous pouvez imaginer est réel. - Pablo Picasso",
    "Faites de votre vie un rêve, et d’un rêve, une réalité. - Antoine de Saint-Exupéry",
    "Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi. - Georges Clemenceau",
    "J'ai acheté un chateau ce n'est pas pour que les romanichelles s'installent sur le terrain"
];

// Récupération des éléments du DOM
let generer = document.getElementById('quote');
let button = document.getElementById('generateButton');
// Fonction pour générer une citation aléatoire
function random(){
    let aleatoire = Math.floor(Math.random() * citations.length); //Randomisation
    generer.innerText = citations[aleatoire];
    
}

// Ajout de l'événement au bouton
button.addEventListener('click', random);