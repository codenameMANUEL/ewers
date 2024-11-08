// import { Schema,model } from "mongoose";

// const ReportsSchema = new Schema({
//     is_anonymous:{type:Boolean,default:false},
//     user_id:{type:String,default:""},
//     image:{type:String},
//     date_of_incident:{type:String},
//     time_of_incident:{type:String},
//     type_of_incident:{type:String},
//     state:{type:String},
//     local_government:{type:String},
//     land_mark:{type:String},
//     map_location:{type:String},
//     description:{type:String}
// })
// const Reports = model("reports", ReportsSchema)
// export default Reports;

import { Schema, model } from "mongoose";

// Define the schema for reports
const ReportsSchema = new Schema(
  {
    is_anonymous: { type: Boolean, default: false },
    user_id:{type:String,default:""},
    image: { type: String, required: false },
    date_of_incident: { type: Date, required: true }, 
    time_of_incident: { type: String, required: true }, 
    type_of_incident: { type: String, required: true },
    state: { type: String, required: true }, 
    local_government: { type: String, required: true },
    land_mark: { type: String, required: false },
    map_location: { type:String },
    description: { type: String, required: true }, 
  },
  { timestamps: true }
); 
const Reports = model("reports", ReportsSchema)
export default Reports;