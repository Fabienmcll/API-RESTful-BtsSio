# Mon Projet Animauxcompagnie

```markdown
# Application Client pour Interagir avec l'API

Il s'agit d'une application client simple pour interagir avec une API RESTful. Elle est conçue pour gérer les données des employés, et vous pouvez l'étendre pour gérer des animaux de compagnie et des espèces, selon vos besoins.

## Premiers pas

### Prérequis

Avant d'utiliser cette application client, assurez-vous de disposer des éléments suivants :

- Un serveur API RESTful en cours d'exécution. Remplacez `API_BASE_URL` dans le code JavaScript par l'URL de votre serveur API.

### Utilisation

1. Ouvrez le fichier `index.html` dans votre navigateur web.

2. Vous verrez une page web de base avec deux boutons :
   - "Obtenir la liste des employés" : Ce bouton envoie une requête GET pour récupérer la liste des employés depuis l'API.

   - "Créer un employé" : Ce bouton envoie une requête POST pour créer un nouvel employé. Vous pouvez personnaliser les informations de l'employé en modifiant l'objet `newEmployee` dans le code JavaScript.

3. Ouvrez la console de développement de votre navigateur (généralement accessible en appuyant sur F12 ou en cliquant avec le bouton droit et en sélectionnant "Inspecter") pour afficher les réponses et les éventuelles erreurs de l'API.

### Personnalisation

Vous pouvez personnaliser cette application client en fonction de vos besoins spécifiques. Pour gérer des animaux de compagnie et des espèces, vous pouvez créer des fonctions et des boutons similaires à ceux fournis pour les employés.

```javascript
// Fonction exemple pour récupérer une liste d'animaux de compagnie
function getAnimauxDeCompagnie() {
    // Implémentez la logique pour récupérer les animaux de compagnie
}

// Fonction exemple pour créer un animal de compagnie
function créerAnimalDeCompagnie() {
    // Implémentez la logique pour créer un animal de compagnie
}

// Fonction exemple pour récupérer une liste d'espèces
function getEspèces() {
    // Implémentez la logique pour récupérer les espèces
}

// Fonction exemple pour créer une espèce
function créerEspèce() {
    // Implémentez la logique pour créer une espèce
}


```

