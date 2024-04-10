const { MongoClient } = require("mongodb");
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "fruitsDB";

async function insertDocuments(db, collectionName, documents) {
  try {
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(documents);
    assert.strictEqual(
      documents.length,
      result.insertedCount,
      "Not all documents were inserted"
    );

    console.log(`${result.insertedCount} documents inserted successfully`);
  } catch (err) {
    console.error(err);
  }
}

async function findDocuments(db, collectionName, query) {
  try {
    const collection = db.collection(collectionName);

    const cursor = collection.find(query);

    const results = await cursor.toArray();

    console.log("Found the following documents:");
    console.log(results);
  } catch (err) {
    console.error(err);
  }
}

async function deleteDocuments(db, collectionName, query) {
  try {
    const collection = db.collection(collectionName);
    const result = await collection.deleteMany(query);
    console.log(
      `Deleted ${result.deletedCount} documents in ${collectionName} collection`
    );
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to the database");

    // Select the database
    const db = client.db(dbName);

    const fruits = [
      { name: "Apple", score: 8, review: "Great fruit" },
      { name: "Orange", score: 6, review: "kinda sour" },
      { name: "Banana", score: 9, review: "Great stuff!" },
    ];
    // await insertDocuments(db, "fruits", fruits);
    // await findDocuments(db, "fruits", {});
    // await deleteDocuments(db, "fruits", {});
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
