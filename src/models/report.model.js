import { Schema, model } from "mongoose";

// Define the schema for reports
const ReportsSchema = new Schema(
  {
    is_anonymous: { type: Boolean, default: true },
    image: { type: String, required: false },
    date_of_incident: { type: Date, required: true },
    time_of_incident: { type: String, required: true },
    type_of_incident: { type: String, required: true },
    state: { type: String, required: true },
    local_government: { type: String, required: true },
    // land_mark: { type: String, required: false },
    map_location: { type: String },
    description: { type: String, required: true },
    numbers_kiilled: { type: String, required: false},
    numbers_injured: { type: String, required: false},
    numbers_of_women_affected: { type: String, required: false},
    number_of_children_affected: { type: String, required: false},
    number_of_cattles_affected: { type: String, require: false },
    number_of_properties_affected: { type: String, require: false },
    Security_intervention: { type: String, require: false },
    has_it_happened_before: { type: String, require: false },
    source_of_information: { type: String, require: false },
  },
  { timestamps: true }
);
const Report = model("reports", ReportsSchema);
export default Report;