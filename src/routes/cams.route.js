import { Router } from "express";
import cams_controller from "../controllers/cams.controller.js";

const route = Router();

route.get("/", cams_controller.getAllReport)
route.get("/:id", cams_controller.getOneReport)
route.post("/", cams_controller.createReport)
route.delete("/:id", cams_controller.deleteReport)
route.put("/:id", cams_controller.updateReport);

export default route;