import * as fs from 'fs';
import * as util from 'util';
import { MongoClient, Collection } from 'mongodb';
import { config } from './config/config';


const readFileAsync = util.promisify(fs.readFile);
const DATABASE_NAME = config.mongo.dbName; ; // Replace with your database name

// Interface pour définir la structure du fichier JSON
interface Collections {
    [collectionName: string]: any[]; // Ajoutez ici les types spécifiques pour chaque collection si nécessaire
}

async function importData() {
  
const client = new MongoClient(config.mongo.url, {
    auth: {
        username: config.mongo.username,
        password: config.mongo.password
    },
    
});


    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db(DATABASE_NAME);

        const fileName = './src/data_RESTful.json'; // Remplacez par le nom de votre fichier JSON unique
        const fileContent = await readFileAsync(fileName, 'utf8');
        const collections: Collections = JSON.parse(fileContent);

        for (const [collectionName, documents] of Object.entries(collections)) {
            const dbCollection: Collection = database.collection(collectionName);
            const result = await dbCollection.insertMany(documents);

            console.log(`Imported ${result.insertedCount} documents into ${collectionName}`);
        }
    } catch (error) {
        console.error('Error during data import:', error);
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

// Appel de la fonction d'importation
importData();
