// controllers/EmployeController.ts
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Employe from '../models/Employe';
import { config } from '../config/config'; // Import du module de configuration

// Fonction pour créer un nouvel employé
const createEmploye = (req: Request, res: Response, next: NextFunction) => {
    const { nom, prenom, dateNaissance } = req.body;

    // Création d'une nouvelle instance d'Employe avec les données fournies
    const employe = new Employe({
        _id: new mongoose.Types.ObjectId(config.mongo.dbName),
        nom,
        prenom,
        dateNaissance
    });

    return employe
        .save() // Sauvegarde de l'employé dans la base de données
        .then((employe) => res.status(201).json({ employe })) // Réponse avec le statut 201 (Créé) et les détails de l'employé créé
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour lire les détails d'un employé en fonction de son identifiant
const readEmploye = (req: Request, res: Response, next: NextFunction) => {
    const employeId = req.params.employeId; // Récupération de l'identifiant de l'employé depuis les paramètres de la requête

    return Employe.findById(employeId) // Recherche de l'employé correspondant dans la base de données
        .then((employe) => (employe ? res.status(200).json({ employe }) : res.status(404).json({ message: 'Employé non trouvé' }))) // Réponse avec les détails de l'employé ou un message d'erreur
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour récupérer la liste de tous les employés
const readAllEmploye = (req: Request, res: Response, next: NextFunction) => {
    return Employe.find() // Recherche de tous les employés dans la base de données
        .then((employes) => res.status(200).json({ employes })) // Réponse avec la liste des employés
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour mettre à jour les détails d'un employé
const updateEmploye = (req: Request, res: Response, next: NextFunction) => {
    const employeId = req.params.employeId; // Récupération de l'identifiant de l'employé depuis les paramètres de la requête

    return Employe.findById(employeId) // Recherche de l'employé correspondant dans la base de données
        .then((employe) => {
            if (employe) {
                employe.set(req.body); // Mise à jour des données de l'employé avec les données fournies dans la requête

                return employe
                    .save() // Sauvegarde de l'employé modifié dans la base de données
                    .then((employe) => res.status(201).json({ employe })) // Réponse avec les détails de l'employé mis à jour
                    .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
            } else {
                return res.status(404).json({ message: 'Employé non trouvé' }); // Employé non trouvé
            }
        })
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour supprimer un employé
const deleteEmploye = (req: Request, res: Response, next: NextFunction) => {
    const employeId = req.params.employeId; // Récupération de l'identifiant de l'employé depuis les paramètres de la requête

    return Employe.findByIdAndDelete(employeId) // Recherche de l'employé correspondant dans la base de données et suppression
        .then((employe) => (employe ? res.status(201).json({ employe, message: 'Employé supprimé' }) : res.status(404).json({ message: 'Employé non trouvé' }))) // Réponse avec un message indiquant la suppression ou une erreur
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};


// Fonction pour calculer l'âge d'un employé
const calculerAge = (req: Request, res: Response, next: NextFunction) => {
    const employeId = req.params.employeId; // Récupération de l'identifiant de l'employé depuis les paramètres de la requête
    return Employe.findById(employeId) // Recherche de l'employé correspondant dans la base de données
        .then((employe) => {
            if (employe) {
                const age = employe.calculerAge(); // Appel de la méthode pour calculer l'âge de l'employé
                return res.status(200).json({ age }); // Réponse avec l'âge de l'employé
            } else {
                return res.status(404).json({ message: 'Employé non trouvé' }); // Employé non trouvé
            }
        })
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
}



// Fonction pour retirer un animal d'un employé
const retirerAnimal = (req: Request, res: Response, next: NextFunction) => { 
    const employeId = req.params.employeId; // Récupération de l'identifiant de l'employé depuis les paramètres de la requête
   const animalId = req.params.animalId; // Récupération de l'identifiant de l'animal depuis les paramètres de la requête
const animalObjectId = new mongoose.Types.ObjectId(animalId); // Création d'un objet ObjectId à partir de l'identifiant de l'animal
    return Employe.findById(employeId) // Recherche de l'employé correspondant dans la base de données
        .then((employe) => {
            if (employe) {
                // Appel de la méthode pour retirer l'animal de l'employé
                employe.retirerAnimal(animalObjectId);

                return employe
                    .save() // Sauvegarde de l'employé modifié dans la base de données
                    .then((employe) => res.status(201).json({ employe })) // Réponse avec les détails de l'employé mis à jour
                    .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
            } else {
                return res.status(404).json({ message: 'Employé non trouvé' }); // Employé non trouvé
            }
        })
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour affecter un animal à un employé
const affecterAnimal = (req: Request, res: Response, next: NextFunction) => {
    const employeId = req.params.employeId; // Récupération de l'identifiant de l'employé depuis les paramètres de la requête
  const animalId = req.params.animalId; // Récupération de l'identifiant de l'animal depuis les paramètres de la requête
const animalObjectId = new mongoose.Types.ObjectId(animalId); // Création d'un objet ObjectId à partir de l'identifiant de l'animal
    return Employe.findById(employeId) // Recherche de l'employé correspondant dans la base de données
        .then((employe) => {
            if (employe) {
                // Appel de la méthode pour affecter l'animal à l'employé
                employe.affecterAnimal(animalObjectId);
                     return employe
                    .save() // Sauvegarde de l'employé modifié dans la base de données
                    .then((employe) => res.status(201).json({ employe })) // Réponse avec les détails de l'employé mis à jour
                    .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
            } else {
                return res.status(404).json({ message: 'Employé non trouvé' }); // Employé non trouvé
            }
        })
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour retourner les employés avec un animal      
const getEmployesWithAnimal = async (req: Request, res: Response, next: NextFunction) => {
    
    return Employe.find({ "LesAnimaux.0": { $exists: true } }).populate('LesAnimaux') // Recherche de l'employé correspondant dans la base de données
        .then((employe) => (employe ? res.status(200).json({ employe }) : res.status(404).json({ message: 'Employé non trouvé' }))) // Réponse avec les détails de l'employé ou un message d'erreur
        .catch((error) => res.status(500).json({ error })); // Gestion des erreurs
};

// Fonction pour retourner le nombre d'employés
const countEmploye = (req: Request, res: Response, next: NextFunction) => {
    return Employe.countDocuments() // Count the number of employees in the database
        .then((count) => res.status(200).json({ count })) // Respond with the count of employees
        .catch((error) => res.status(500).json({ error })); // Error handling
};

const getEmployesWithDogs = (req: Request, res: Response, next: NextFunction) => {
    Employe.aggregate([
        {
            $match: {
                'LesAnimaux.0': { $exists: true }  // Filtrez les employés ayant au moins un animal
            }
        },
        {
            $lookup: {
                from: 'animals',  // Nom de la collection à joindre
                localField: 'LesAnimaux',  // Champ local contenant les références à Animal
                foreignField: '_id',  // Champ dans la collection Animal
                as: 'animauxDetails'  // Nom du champ dans le résultat contenant les détails de l'animal
            }
        },
        {
            $match: {
                'animauxDetails.espece': '1'  // Filtrez les animaux avec espece égal à '1' (Chien)
            }
        },
        {
            $project: {
                nom: 1,
                prenom: 1,
                dateNaissance: 1,
                LesAnimaux: '$animauxDetails'
            }
        }
    ]).exec()
        .then((employes) => {
            if (employes.length > 0) {
                res.status(200).json({ employes });
            } else {
                res.status(404).json({ message: 'Aucun employé avec des chiens trouvé' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};




// Export des fonctions du contrôleur
export default { createEmploye, readEmploye, readAllEmploye, updateEmploye, deleteEmploye, affecterAnimal, retirerAnimal, calculerAge, getEmployesWithAnimal, countEmploye, getEmployesWithDogs};