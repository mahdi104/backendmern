//mongoose

const mongoose = require("mongoose");

//conncet DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DataBase Connected`);
  } catch (error) {
    console.error(`connection to database failed ${error}`);
  }
};
module.exports = connectDB;
