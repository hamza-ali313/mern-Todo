import UserModel from "../models/users.js";

export const Register = async(req,res,next)=>{
 try {
    const newUser = new UserModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
      });
      const user = await newUser.save()
      res.json(user);
 } catch (error) {
    console.log(error)
 }
}

export const Login = async(req,res,next)=>{
    try {
    const user = await UserModel.findOne({username : req.body.username,password:req.body.password});
    if(!user){
        res.send("user is not found");
    }
    res.json(user)
    } catch (error) {
        console.log(error)
    }
}

// export const Logout = (req,res,next)=>{
//   try {
//   } catch (error) {
//       console.log(error)
//   }
// }