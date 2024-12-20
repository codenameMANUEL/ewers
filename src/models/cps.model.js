import { Schema, model } from "mongoose";

const CpsReportSchema = new Schema(
    {
        cps_id: { type: String, required: true },
        cps_fullname: { type: String, required: true },
        user_id: { type: String, required: true },
        image: { type: String },
        user_full_name: { type: String, required: true },
        date_of_incident: { type: String, required: true },
        time_of_incident: { type: String, required: true },
        type_of_incident: { type: String, required: true },
        state: { type: String, required: true },
        local_government: { type: String, required: true },
        map_location: { type: String },
        description: { type: String, required: true },
        numbers_kiilled: { type: String, required: true },
        numbers_injured: { type: String, required: true },
        numbers_displaced: { type: String, required: true },
        numbers_of_women_affected: { type: String, required: true },
        number_of_children_affected: { type: String, required: true },
        number_of_cattles_affected: { type: String, require: true },
        number_of_properties_affected: { type: String, require: true },
        Security_intervention: { type: String, require: true },
        has_it_happened_before: { type: String, require: true },
        source_of_information: { type: String, require: true },
        report_to_responders: { type: String, required: true },
        cams_comment: { type: String, required:true },
        comment: { type: String, required: true },
        cams_id: { type: String, required: true },
        cams_fullname: { type: String, required: true }
      },
      { timestamps: true }
);

const CpsReport = model("cpsReports", CpsReportSchema);
export default CpsReport;