const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const main = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
};

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "666b48b51fd83cf97dff1580" }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (err) {
    console.error("Error initializing data:", err);
  } finally {
    mongoose.connection.close();
  }
};

main().then(initDB);
