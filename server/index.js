const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
app.use(express.json());

const createFrontend = require("./services/frontend-service");

app.get("/react", async (req,res)=> {
const {name} = req.query;
createFrontend(name ? name : "react-app",(file) => {res.download(path.join(__dirname, file))});
})


//Server up , 5000 PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
console.log("Server is running");
})