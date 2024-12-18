import { Router } from "express";
import cps_controller from  "../controllers/cps.controller.js"

const route = Router();

route.get("/", cps_controller.getAllReport)
route.get("/:id", cps_controller.getOneReport)
route.post("/", cps_controller.createReport)
route.delete("/:id", cps_controller.deleteReport)
route.put("/:id", cps_controller.updateReport);

export default route;