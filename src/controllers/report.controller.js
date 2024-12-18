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
