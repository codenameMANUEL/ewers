// import { UserReport } from "../models/report.model.js";

// const userReportController = {
//   getAllUsersReport: async (req, res) => {
//     try {
//       let userReport = await UserReport.find();
//       res.json(userReport);
//     } catch (error) {
//       res.status(500).json({
//         msg: "Error retrieving reports",
//         error,
//       });
//     }
//   },

//   getUserReport: async (req, res) => {
//     try {
//       let { id } = req.params;
//       let report = await UserReport.findOne({ _id: id });
//       if (!report) return res.json({ msg: "report does not exist" });
//       res.json(report);
//     } catch (error) {
//       res.status(500).json({ msg: "Error retrieving report", error });
//     }
//   },

//   createUserReport: async (req, res) => {
//     try {
//       let report = await UserReport.create(req.body);
//       res.json(report);
//     } catch (error) {
//       res.status(500).json({ msg: "Error creating report", error });
//     }
//   },

//   deleteUserReport: async (req, res) => {
//     try {
//       let { id } = req.params;
//       let report = await UserReport.findOneAndDelete({ _id: id });
//       if (report) return res.json({ msg: "Report deleted" });
//       res.json({ msg: "Report does not exist" });
//     } catch (error) {
//       res.status(500).json({ msg: "Error deleting report", error });
//     }
//   },
// };

// export default userReportController;
