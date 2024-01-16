// Création de la route Employe
import express from "express";    
import EmployeController from "../controllers/EmployeController"; // Import du contrôleur EmployeController
import { Schemas, ValidateJoi } from '../middleware/Joi'; // Import du middleware Joi pour valider les données de la requête HTTP

const router = express.Router();

// Définition des routes pour les employés en utilisant les fonctions du contrôleur
// Obtenir les employés avec un animal associé
router.get('/employesWithAnimal', EmployeController.getEmployesWithAnimal);
// Fonction pour retourner les employés avec des chiens
router.get('/employesWithDog', EmployeController.getEmployesWithDogs);
// Obtenir le nombre d'employes
router.get('/employesCount', EmployeController.countEmploye);
router.post('/', EmployeController.createEmploye);
router.get('/', EmployeController.readAllEmploye);
router.get('/:employeId', EmployeController.readEmploye);
router.put('/:employeId', EmployeController.updateEmploye);
router.patch('/:employeId', EmployeController.updateEmploye);
router.delete('/:employeId', EmployeController.deleteEmploye);

// Calculer l'âge d'un employé
router.get('/:employeId/age', EmployeController.calculerAge);

// Affecter un animal à un employé
router.post('/:employeId/addAnimal/:animalId', EmployeController.affecterAnimal);

// Retirer un animal à un employé
router.post('/:employeId/removeAnimal/:animalId', EmployeController.retirerAnimal);



export default router; // Export du routeur pour être utilisé dans l'application principale
