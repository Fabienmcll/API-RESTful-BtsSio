
//Client/app.js
// Code de l'application cliente de l'API REST
// Ce code est exécuté dans le navigateur de l'utilisateur
//il s'agit d'un CRUD (Create, Read, Update, Delete) qui permet de gérer les employés avec leur animal de compagnie 

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const API_BASE_URL = 'http://localhost:3000'; // Remplacez par l'URL de votre API

    const employeForm = document.getElementById('employeForm');
    const employeList = document.getElementById('employeList');
    const animalDropdown = document.getElementById('animal');

    // Récupère la liste des employés
    // Récupère la liste des employés
    fetch(API_BASE_URL + '/employes')
        .then(response => response.json())
        .then(employes => {
            const employesList = employes.employes || [];
            employesList.forEach(employe => {
                const employeElement = document.createElement('li');
                employeElement.innerHTML = `${employe.prenom} ${employe.nom}`;
                employeList.appendChild(employeElement);
            });
        });

    // Récupère la liste des animaux
    fetch(API_BASE_URL + '/animaux')
        .then(response => response.json())
        .then(animaux => {
            animaux.forEach(animal => {
                const animalElement = document.createElement('option');
                animalElement.value = animal.id;
                animalElement.innerHTML = animal.nom;
                animalDropdown.appendChild(animalElement);
            });
        });

    // Ajoute un employé
    employeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const employe = {
            prenom: employeForm.elements.prenom.value,
            nom: employeForm.elements.nom.value,
            animalId: employeForm.elements.animal.value
        };

        fetch(API_BASE_URL + '/employes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employe)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(employe) {
                const employeElement = document.createElement('li');
                employeElement.innerHTML = employe.prenom + ' ' + employe.nom;
                employeList.appendChild(employeElement);
            });
    });

    // Supprime un employé
    employeList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const employeId = event.target.dataset.id;

            fetch(API_BASE_URL + '/employes/' + employeId, {
                method: 'DELETE'
            }).then(function() {
                event.target.remove();
            });
        }
    });

    // Met à jour un employé
    employeList.addEventListener('focusout', function(event) {
        if (event.target.tagName === 'LI') {
            const employeId = event.target.dataset.id;

            fetch(API_BASE_URL + '/employes/' + employeId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom: event.target.textContent.split(' ')[0],
                    nom: event.target.textContent.split(' ')[1]
                })
            });
        }
    }
    );
}
);




