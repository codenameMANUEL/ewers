
import {Report} from "../models/report.model.js";

const controller = {

    getAllReport: async (req, res) => {
        let reports = await Report.find();
        res.json(reports)
    },

    getOneReport: async (req, res) => {
        let {id} = req.params;
        let report = await Report.findOne(id);
        if(!report) return res.json({msg:"report does not exist"})
        res.json(report)
    },

    createReport: async (req, res) => {
        let report = await Report.create(req.body);
        res.json(report)
    },
  
    deleteReport: async (req, res) => {
        let {id} = req.params;
        let report = await Report.findOneAndDelete(id);
        if(report) return res.json({msg:"Report deleted"})
        res.json({msg:"Report does not exist"})
    },
};
export default controller;