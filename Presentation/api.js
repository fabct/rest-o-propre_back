/**
 * Importation des modules
 */

const business = require("../Business/business");
const cors = require("cors");
const express = require("express");
const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://rest-o-propre:FE9Xb6Y0w27hxn0O@rest-o-propre.ufrwqtj.mongodb.net/";

// ----- Initialisation de l'application ---- //

let app = express();
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function launch() {
  //try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //} //finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  //}
}


// ------ API Backend ----- //

const api = {
    /**
     * Start Api on given port 
     * @param {number} port le port d'identification 
     */
    start: port => {
        // On active la base de donnée

        // On applique les requete Json
        app.use(express.json());

        // Cors
        app.use(cors({
            origin: "*"
        }));

        // On demmarre a écouter dans le port donné 
        app.listen(port,() =>{
            launch();
            console.log(`App listening to port ${port}`);
        });

        // ----------------- DEBUG ----------------- //
        app.use(express.static("../Test/public"));
        // ----------------- DEBUG ----------------- //
    } 
};

// ------ Exportation comme module  -----

module.exports = api;

