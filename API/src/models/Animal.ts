import mongoose, { Schema, Document } from 'mongoose';

// Schéma  pour l'animal
const AnimalSchema = new Schema({
  nom: { type: String, required: true },
  espece: { type: Schema.Types.ObjectId, ref: 'Espece', required: true },
  employes: [{ type: Schema.Types.ObjectId, ref: 'Employe' }] // un animal peut être attaché à zero ou plusieurs employés
});

// Modèle pour l'animal
export interface AnimalModel extends Document {
  nom: string;
  espece: string;
  employes: string[];
}

// Modèle pour l'animal
export interface AnimalModel extends Document {
    nom: string;
    espece: string;
    employes: string[];
}

export default mongoose.model<AnimalModel>('Animal', AnimalSchema);
