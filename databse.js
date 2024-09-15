const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://heyashu:heyashu@digiden.m6she.mongodb.net/?retryWrites=true&w=majority&appName=DigiDen";

const client = new MongoClient(URI);

const dbname = "Notes";

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");
  const db = client.db(dbname);
  const userCollection = db.collection("user");

    // insert the data
    const newData={
      firstName: "Mohan",
      website:'heyashu.in/digital-garden',
      city:'Ayodhya-2'
    }
  
  
    const insertResult= await userCollection.insertMany([newData])
    console.log("insertResult",insertResult);


  // read the data
  const findRes = await userCollection.find({}).toArray();
  console.log("findRes: ", findRes);



  return "Done";
}

main()
  .then(console.log("DATA LOGGED"))
  .catch(console.error)
  .finally(() => {
    client.close();
  });
