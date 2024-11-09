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
    user_id: { type: String, default: "" },
    image: { type: String, required: false },
    date_of_incident: { type: Date, required: true },
    time_of_incident: { type: String, required: true },
    type_of_incident: { type: String, required: true },
    state: { type: String, required: true },
    local_government: { type: String, required: true },
    land_mark: { type: String, required: false },
    map_location: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
const Report = model("reports", ReportsSchema);


const UserReportSchema = new Schema(
  {
    is_anonymous: { type: Boolean, default: false },
    user_id: { type: String, default: "" },
    image: { type: String, required: false },
    date_of_incident: { type: Date, required: true },
    time_of_incident: { type: String, required: true },
    type_of_incident: { type: String, required: true },
    state: { type: String, required: true },
    local_government: { type: String, required: true },
    land_mark: { type: String, required: false },
    map_location: { type: String },
    description: { type: String, required: true },
    numbers_kiilled: { type: String, required: true},
    numbers_injured: { type: String, required: true},
    numbers_of_women_affected: { type: String, required: true},
    number_of_children_affected: { type: String, required: true},
    number_of_cattles_affected: { type: String, require: true },
    number_of_properties_affected: { type: String, require: true },
    Security_intervention: { type: String, require: true },
    has_it_happened_before: { type: String, require: true },
    source_of_information: { type: String, require: true },
  },
  { timestamps: true }
);

const UserReport = model("userReport", UserReportSchema);

export  {Report, UserReport};