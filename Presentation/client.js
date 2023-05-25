/**
 * Importation des modules
 */
const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://rest-o-propre:FE9Xb6Y0w27hxn0O@rest-o-propre.ufrwqtj.mongodb.net/";

// ----- Initialisation du serveur ---- //
const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

module.exports = client;