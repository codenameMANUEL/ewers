
import { Schema,model } from "mongoose";

const DepartmentSchema = new Schema({
    name:{type:String},
    acronym:{type:String}
})
const Department = model("departments",DepartmentSchema)
export default Department;