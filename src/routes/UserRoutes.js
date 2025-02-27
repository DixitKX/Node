//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
//get
routes.get("/users",userController.getAllUsers)
//post
routes.post("/user",userController.addUser)
//delete
routes.delete("/user/:id",userController.deleteUser)
//get
routes.get("/user/:id",userController.getUserById)
module.exports = routes