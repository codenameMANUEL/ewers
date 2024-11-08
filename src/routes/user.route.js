import { Router } from "express";
import user_controller from '../controllers/user.controller.js'

const route = Router();

route.get("/", async (req, res) => {
  res.json("naso");
});

// route.post("/", user_controller.createUser);
route.post("/", user_controller.createUser);


// route.patch("/:id", async (req, res) => {});

// route.put("/:id", async (req, res) => {});

// route.delete("/:id", async (req, res) => {});

export default route;
