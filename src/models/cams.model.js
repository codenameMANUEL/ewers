import { Schema, model } from "mongoose";

const CamsReportSchema = new Schema(
  {
    cams_id: { type: String, required: true },
    cams_fullname: { type: String, required: true },
    user_id: { type: String, required: true },
    image: { type: String },
    user_full_name: { type: String, required: true },
    date_of_incident: { type: String, required: true },
    time_of_incident: { type: String, required: true },
    type_of_incident: { type: String, required: true },
    state: { type: String, required: true },
    local_government: { type: String, required: true },
    // land_mark: { type: String, required: false },
    map_location: { type: String },
    description: { type: String, required: true },
    numbers_kiilled: { type: String, required: true },
    numbers_injured: { type: String, required: true },
    numbers_of_women_affected: { type: String, required: true },
    number_of_children_affected: { type: String, required: true },
    number_of_cattles_affected: { type: String, require: true },
    number_of_properties_affected: { type: String, require: true },
    Security_intervention: { type: String, require: true },
    has_it_happened_before: { type: String, require: true },
    source_of_information: { type: String, require: true },
    report_type: { type: String, required: true },
    method_of_verification: { type: String, required: true },
    verification_signal: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const CamsReport = model("camsReports", CamsReportSchema);
export default CamsReport;
