import mongoose , {Schema , Document} from "mongoose";
import { number } from "zod";

// this is the interface or custom prototype of our schema , this is only for typescript checking.
export interface Message extends Document{
    content : string,
    solvedAt : Date
}

// this is our mongoose schema
const MessageSchema : Schema<Message> = new Schema({
    content : {
        type : String,
        required : true
    },
    solvedAt : {
        type : Date ,
        required : true,
        default : Date.now
    }
})

// this is the custom schema of user 
export interface User extends Document{
    username : string,
    email : string ,
    password : string,
    verifyCode : string ,
    verifyCode_Expiry : Date,
    isVerified : boolean ,
    message : Message[] ,
    solvedQuestions : number[]
}

const UserSchema : Schema<User> = new Schema({
    username : {
        type : String,
        required : [true , "Username is required!"],
        trim : true ,
        unique : true
    },
    email : {
        type : String ,
        required : [true , "Email is required!"],
        unique : true , 
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , 'Please use the valid email address']
    },
    password : {
        type : String , 
        required : [true , "Password is required!"], 
    },
    verifyCode : {
        type : String , 
        required : [true , "Verify code is required!"]
    },
    verifyCode_Expiry:{
        type : Date ,
        required : [true , "verify code expiry is required!"]
    },
    isVerified:{
        type : Boolean,
        default : false
    },
    message: [MessageSchema],
    solvedQuestions:{
        type : [Number],
        default : []
    },
})

const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User" , UserSchema)
export default userModel