const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());


//Server up , 5000 PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
console.log("Server is running");
})