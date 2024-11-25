
// import Report from "../models/report.model.js";

// const controller = {

//     getAllReport: async (req, res) => {
//         let reports = await Report.find();
//         res.json(reports)
//     },

//     getOneReport: async (req, res) => {
//         let {id} = req.params;
//         let report = await Report.findOne({ _id: id });
//         if(!report) return res.json({msg:"report does not exist"})
//         res.json(report)
//     },

//     createReport: async (req, res) => {
//         let report = await Report.create(req.body);
//         res.json(report)
//     },
  
//     deleteReport: async (req, res) => {
//         let {id} = req.params;
//         let report = await Report.findOneAndDelete(id);
//         if(report) return res.json({msg:"Report deleted"})
//         res.json({msg:"Report does not exist"})
//     },
// };
// export default controller;  

import Report from "../models/report.model.js";

const controller = {
    getAllReport: async (req, res) => {
        try {
            const reports = await Report.find();
            res.json(reports);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getOneReport: async (req, res) => {
        try {
            const { id } = req.params;
            const report = await Report.findOne({ _id: id });
            if (!report) {
                return res.status(404).json({ message: "Report does not exist" });
            }
            res.json(report);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createReport: async (req, res) => {
        try {
            const report = await Report.create(req.body);
            res.status(201).json(report);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteReport: async (req, res) => {
        try {
            const { id } = req.params;
            const report = await Report.findOneAndDelete({ _id: id });
            if (report) {
                return res.json({ message: "Report deleted" });
            }
            res.status(404).json({ message: "Report does not exist" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

export default controller;
