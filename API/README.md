
# Mon Projet Animauxcompagnie
# API RESTFUL AVEC CONTEXTE

Bienvenue dans le projet "API RESTFUL AVEC CONTEXTE". Cette application est une API web développée avec Node.js, Express.js, TypeScript et MongoDB, conçue pour gérer les données liées aux employés et à leur contexte.

## Structure du Projet

Le projet est organisé en plusieurs répertoires pour faciliter la gestion et le développement :

- **.vscode/** : Ce dossier contient des configurations spécifiques à Visual Studio Code.

- **build/** : Les fichiers JavaScript transpilés à partir de TypeScript sont stockés ici.

- **src/** : Le répertoire principal du code source de l'application, divisé en sous-répertoires pour différentes parties de l'application.

  - **config/** : Contient la configuration de l'application, y compris la connexion à la base de données et la configuration du serveur.

  - **controllers/** : Les contrôleurs gèrent la logique métier de l'application, comme `employeController.ts` pour la gestion des employés.

  - **library/** : Contient des fichiers de bibliothèque, comme `Logging.ts`, pour la gestion de la journalisation.

  - **middleware/** : Les middlewares, comme `Joi.ts`, sont utilisés pour la validation des données et d'autres opérations intermédiaires.

  - **models/** : Les modèles, tels que `employe.ts`, définissent la structure des données pour la base de données.

  - **routes/** : Les routes, comme `employeRoutes.ts`, définissent les points d'entrée de l'API et les actions associées.

  - **server.ts** : Le point d'entrée principal de l'application où Express, la base de données et les routes sont configurés.

- **.env** : Ce fichier contient les variables d'environnement pour la configuration de l'application, telles que les informations de connexion à la base de données.

- **.gitignore** : Ce fichier spécifie les fichiers et dossiers à exclure de la gestion de version avec Git.

- **.prettierrc** : Fichier de configuration pour l'outil de formatage de code Prettier.

- **package.json** et **package-lock.json** : Ces fichiers décrivent les dépendances et les scripts de gestion du projet.

- **tsconfig.json** : La configuration TypeScript pour le projet.

## Installation et Utilisation
## Comment exécuter l'application en mode développement
Pour démarrer le projet, suivez ces étapes depuis le répertoire API du projet :

1. récupérer le dépôt `.

2. Installez les dépendances du projet :
   ```
   cd api-restful-avec-contexte
   npm install
   ```

3. Assurez-vous que MongoDB est en cours d'exécution ou configurez l'URL de votre base de données MongoDB dans le fichier `config/config.ts`.
   
5. Vous devez charger le script data_RESTful.json  avec la commande suivante :
```
   node build/script_data.js
```
8. Pour démarrer le serveur backend en mode développement avec nodemon, utilisez la commande suivante  :
```
nodemon
```
Vous pouvez ensuite accéder à l'interface utilisateur dans votre navigateur à l'adresse `http://localhost:3000` (ou un autre port si spécifié).

8. Vous êtes maintenant prêt à tester et à développer votre ap

### Tester l'API

Pour vérifier que le serveur fonctionne correctement, vous pouvez effectuer une requête GET vers la route `/ping`. Cela devrait renvoyer un message de bienvenue.

http://localhost:3000/ping


## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
```

N'oubliez pas de personnaliser ce fichier README.md en fonction de votre projet spécifique, en ajoutant des détails sur son fonctionnement, ses fonctionnalités, et tout autre élément pertinent.
