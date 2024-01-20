const mongoose = require("mongoose");

const mongoURI ="mongodb+srv://bhavyachopra2509:bhavya2509@cluster0.uhhaism.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = async () => {
    await mongoose.connect(mongoURI);
    console.log("connected");
    const foodItems = mongoose.connection.collection("food_items");
    const foodCategory = mongoose.connection.collection("foodCategory");
  try {
    const fetched_data=await foodItems.find({}).toArray();
    const fetched_data2=await foodCategory.find({}).toArray();

    global.food_items=fetched_data;
    global.foodCategory=fetched_data2;


  } catch (error) {
    console.error(error);
  }
};


module.exports = mongoDB;
