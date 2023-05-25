/**
 * Importation des modules
 */

const business = require("../Business/business");
const cors = require("cors");
const express = require("express");
const client = require("../Presentation/client");

// ----- Initialisation de l'application ---- //

let app = express();


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

const REQUESTS_CLIENT_URL = "/clients";
const REQUESTS_RESTAURANT_URL = "/restos";
const REQUESTS_NOTE_URL = "/notes";
const REQUESTS_FAVORIS_URL = "/favoris";
const REQUESTS_PRODUCT_URL = "/products";
const REQUESTS_INSPECTION_URL = "/inspections";
const REQUESTS_OBJECTIF_URL = "/objectifs";



// ------ API Backend ----- //

const api = {
    /**
     * Start Api on given port 
     * @param {number} port le port d'identification 
     */
    start: port => {
        // On applique les requete Json
        app.use(express.json());

        // Cors
        app.use(cors({
            origin: "*"
        }));

        //Client ---------------------
        // GET request - See users
        // Return a JSON containing the users
        app.get(REQUESTS_CLIENT_URL, async (req, res) => {
          res.json(await business.get_all_client());
        });
        // POST request - Add user
        // Takes the req body and send response
        // according to business
        app.post(REQUESTS_CLIENT_URL, async (req, res) => {
          let is_added = await business.add_client(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // PUT request - Edit user
        // Takes the req body and send response
        // according to business
        app.put(REQUESTS_CLIENT_URL, async (req, res) => {
          let is_edited = await business.edit_client(req.body);

          // Send adequate responses
          if (is_edited) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // DELETE request - Delete user
        // Takes the req body and send response
        // according to business
        app.delete(REQUESTS_CLIENT_URL, async (req, res) => {
          let is_deleted = await business.delete_client(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        //Resto -----------------------
        // GET request - See users
        // Return a JSON containing the users
        app.get(REQUESTS_RESTAURANT_URL, async (req, res) => {
          res.json(await business.get_all_resto());
        });
        app.post(REQUESTS_RESTAURANT_URL, async (req, res) => {
          let is_added = await business.add_resto(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.put(REQUESTS_RESTAURANT_URL, async (req, res) => {
          let is_edited = await business.edit_resto(req.body);

          // Send adequate responses
          if (is_edited) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.delete(REQUESTS_RESTAURANT_URL, async  (req, res) => {
          let is_deleted = await business.delete_resto(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // //Note ------------------------
        // // GET request - See users
        // // Return a JSON containing the users
        app.get(REQUESTS_NOTE_URL, async (req, res) => {
          res.json(await business.get_all_note());
        });
        app.post(REQUESTS_NOTE_URL, async (req, res) => {
          let is_added = await business.add_note(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.put(REQUESTS_NOTE_URL, async (req, res) => {
          let is_edited = await business.edit_note(req.body);

          // Send adequate responses
          if (is_edited) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.delete(REQUESTS_NOTE_URL, async (req, res) => {
          let is_deleted = await business.delete_note(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // //Favoris ---------------------
        app.get(REQUESTS_FAVORIS_URL, async (req, res) => {
          res.json(await business.get_all_favoris());
        });
        app.post(REQUESTS_FAVORIS_URL, async (req, res) => {
          let is_added = await business.add_favoris(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.delete(REQUESTS_FAVORIS_URL, async (req, res) => {
          let is_deleted = await business.delete_favoris(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // //Product ---------------------
        app.get(REQUESTS_PRODUCT_URL, async (req, res) => {
          res.json(await business.get_all_product());
        });
        app.post(REQUESTS_PRODUCT_URL, async (req, res) => {
          let is_added = await business.add_product(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.put(REQUESTS_PRODUCT_URL, async (req, res) => {
          let is_edited = await business.edit_product(req.body);

          // Send adequate responses
          if (is_edited) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.delete(REQUESTS_PRODUCT_URL, async (req, res) => {
          let is_deleted = await business.delete_product(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // //Inspection ------------------
        app.get(REQUESTS_INSPECTION_URL, async (req, res) => {
          res.json(await business.get_all_inspection());
        });
        app.post(REQUESTS_INSPECTION_URL, async (req, res) => {
          let is_added = await business.add_inspection(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.put(REQUESTS_INSPECTION_URL, async (req, res) => {
          let is_edited = await business.edit_inspection(req.body);

          // Send adequate responses
          if (is_edited) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.delete(REQUESTS_INSPECTION_URL, async (req, res) => {
          let is_deleted = await business.delete_inspection(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        // //Objectif --------------------
        app.get(REQUESTS_OBJECTIF_URL, async (req, res) => {
          res.json(await business.get_all_objectif());
        });
        app.post(REQUESTS_OBJECTIF_URL, async (req, res) => {
          let is_added = await business.add_objectif(req.body);

          // Send adequate responses
          if (is_added) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.put(REQUESTS_OBJECTIF_URL, async (req, res) => {
          let is_edited = await business.edit_objectif(req.body);

          // Send adequate responses
          if (is_edited) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });
        app.delete(REQUESTS_OBJECTIF_URL, async (req, res) => {
          let is_deleted = await business.delete_objectif(req.body);

          // Send adequate responses
          if (is_deleted) {
              res.sendStatus(200);
          } else {
              res.sendStatus(400);
          }
        });

        // On demmarre a écouter dans le port donné 
        app.listen(port,() =>{
            // On active la connection à la base de donnée
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


