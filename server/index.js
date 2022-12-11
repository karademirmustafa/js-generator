const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
app.use(express.json());

const createFrontend = require("./services/frontend-service");

app.get("/react", async (req,res)=> {
const {name,version,description} = req.query;

const projectDetails = {
    name:name ? name : "react-app",
    version:version ? version : "0.0.1",
    description:description ? description : ""
}
createFrontend(projectDetails,(file) => {res.download(path.join(__dirname, file))});
})



//Server up , 5000 PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
console.log("Server is running");
})