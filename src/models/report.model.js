import { Schema,model } from "mongoose";

const ReportsSchema = new Schema({
    is_anonymous:{type:Boolean,default:false},
    user_id:{type:String,default:""},
    image:{type:String},
    full_name:{type:String},
    date_of_incident:{type:String},
    time_of_incident:{type:String},
    type_of_incident:{type:String},
    state:{type:String},
    local_government:{type:String},
    land_mark:{type:String},
    map_location:{type:String},
})
const Reports = model("reports", ReportsSchema)
export default Reports;