//const { MongoClient, ServerApiVersion } = require("mongodb");

//// Replace the placeholder with your Atlas connection string
//const uri = "mongodb+srv://rest-o-propre:FE9Xb6Y0w27hxn0O@rest-o-propre.ufrwqtj.mongodb.net/";

//// Create a MongoClient with a MongoClientOptions object to set the Stable API version
//const client = new MongoClient(uri,  {
//        serverApi: {
//            version: ServerApiVersion.v1,
//            strict: true,
//            deprecationErrors: true,
//        }
//    }
//);

//async function run() {
//  //try {
//    // Connect the client to the server (optional starting in v4.7)
//    await client.connect();
//    // Send a ping to confirm a successful connection
//    await client.db("admin").command({ ping: 1 });
//    const db = client.db("rest-o-propre");
//    const collection = db.collection("User");
//    const Newdata = await collection.insertOne({a:3});
//    console.log("Pinged your deployment. You successfully connected to MongoDB!");
//    console.log(`inséré avec succès ${Newdata}`);
//  //} //finally {
//    // Ensures that the client will close when you finish/error
//    //await client.close();
//  //}
//}
//run().catch(console.dir);

require("../Presentation/api").start(5050);
