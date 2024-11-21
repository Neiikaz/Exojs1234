// Récupération des éléments du DOM
let message = document.getElementById('taskInput');
let button = document.getElementById('addTaskButton');
let liste = document.getElementById('taskList');
// Fonction pour ajouter une tâche
function addTache (){
    let ajouter = message.value;
    ajouter = document.createElement('li');
    ajouter.innerText = message.value;
    liste.appendChild(ajouter);
    message.value = '';
    console.log(ajouter);
}
// Ajout de l'événement au bouton "Ajouter"
button.addEventListener('click', addTache);
// Ajout de la tâche en appuyant sur "Entrée"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Votre code ici
        addTache();
    }
});
