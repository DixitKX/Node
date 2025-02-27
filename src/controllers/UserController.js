//users table.. -->userModel
const userModel = require("../models/UserModel")

//addUser
const addUser = async (req, res) => {
  //req.body,req.params,req.headers,req.query
  //console.log("request body....", req.body);
  //insert into roles () values()
  //database...
  const savedUser = await  userModel.create(req.body)

  res.json({
    message:"User created...",
    data:savedUser
  });
};
//getUser
const getAllUsers = async (req, res) => {
    //await....
    //select * from roleModel
  
    const roles = await userModel.find(); //[{}]
  
    res.json({
      message: "User fetched successfully",
      data: roles,
    });
  };
//deleteUser
const deleteUser = async(req,res)=>{

    //delete from roles where id =?
    //req.params
//    console.log(req.params.id) //prams object...

    const deletedUser = await userModel.findByIdAndDelete(req.params.id)

    res.json({
      message:"user deleted successfully..",
      data:deletedUser
    })
  }
//getUserById
const getUserById = async (req,res)=>{

    //req.params.id
  
    const foundUser = await userModel.findById(req.params.id)
    res.json({
      message:"User fatched..",
      data:foundUser
    })
  
  }

//exports
module.exports = {
    getAllUsers,addUser,deleteUser,getUserById
  };