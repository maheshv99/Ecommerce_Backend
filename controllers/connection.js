const {MongoClient} = require("mongodb");

const url="mongodb+srv://mahesh:TCPzsJRtO6OQ5HD9@cluster0.obfk2as.mongodb.net/?retryWrites=true&w=majority"
//mongodb+srv://mahesh:TCPzsJRtO6OQ5HD9@cluster0.obfk2as.mongodb.net/test

const client= new MongoClient(url);

const findAllFromDb = async (collectionName) => {
    try {
        await client.connect();
        console.log("connection succesfull to db")
        const database = client.db("ecommerce");
        const collection = database.collection(collectionName);
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;
    }
}

module.exports={findAllFromDb}
