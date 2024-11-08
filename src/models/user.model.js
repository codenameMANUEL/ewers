import { Schema,model } from "mongoose";

const UserSchema = new Schema({
    full_name:{type:String},
    phone_number:{type:String},
    email:{type:String},
    // department:{type:String, ref:"departments"},
    department:{type:String},
    password:{type:String},
})
const User = model("users",UserSchema)
export default User;


