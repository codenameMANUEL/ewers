import { Router } from "express";
import report_controller from '../controllers/report.controller.js'

const route = Router();

route.get("/", report_controller.getAllReport);

route.get("/:id", report_controller.getOneReport);

route.post("/", report_controller.createReport);

// route.patch("/:id", async (req, res) => {});

// route.put("/:id", async (req, res) => {});

route.delete("/:id", report_controller.deleteReport);

export default route;
