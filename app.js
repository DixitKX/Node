const express = require("express")
const mongoose = require("mongoose")
//express object
const app = express()
app.use(express.json())


const roleRoutes = require("./src/routes/RoleRoutes");
app.use(roleRoutes);


const userRoutes = require("./src/routes/UserRoutes");
app.use(userRoutes)

mongoose.connect("mongodb://localhost:27017/25_node_internship").then(()=>{
    console.log("database connected....")
})


//server creation....
const PORT = 3000
app.listen(PORT,()=>{
   console.log("server started on",PORT) 
})