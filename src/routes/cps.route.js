import { Router } from "express";
import cps_controller from  "../controllers/cps.controller.js"

const route = Router();

route.get("/", cps_controller.getAllReport)
route.get("/:id", cps_controller.getOneReport)
route.post("/", cps_controller.createReport)

export default route;