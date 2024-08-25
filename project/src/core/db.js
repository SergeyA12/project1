const mongoose = require('mongoose');

const database = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/eax');
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = database;
