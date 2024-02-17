const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOODB_URI)
    console.log('SUCCESS connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongooDB:', error.message);
    throw error;
  }
}

module.exports = connectDB;