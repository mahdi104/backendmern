//1 require express
const express = require("express");
//2 instance express

const app = express();

//5 require dotenv and config

require("dotenv").config();

//6 Connect DataBase
const connectDB = require("./config/connectDB");
connectDB();

//8 Middelware BodyPart
app.use(express.json());
//7 Routes
app.use("/api/contacts", require("./routes/contact"));

//3 PORT

const PORT = process.env.PORT;

//4 Create server
app.listen(PORT, (error) => {
  error
    ? console.log(`failed To Connect to server !!! ${error}`)
    : console.log(`server is Runinig on ${PORT}...`);
});
