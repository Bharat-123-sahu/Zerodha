import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
 export const UserSchema=new mongoose.Schema({
    email:{type:String,
        required:[true,"your email address required"],
        unique:true,
    
    },
    username:{
        type:String,
        required:[true,"your username is required"],
        
    },
    password:{
        type:String,
        required:[true,"Your password is required"],
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },

    
})

