const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    // let response = await collection.find({}).toArray(); // to get all data 
    let response = await collection.find({name:'m 40'}).toArray(); // to get single data based on some ref
    console.log(response);
}

getData();

