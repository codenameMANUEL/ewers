import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user_route from "./routes/user.route.js";
import auth_route from "./routes/auth.route.js";
import report_route from "./routes/report.route.js";
import cams_route from "./routes/cams.route.js"
import cps_route from "./routes/cps.route.js"
import responsers_route from "./routes/responsers.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const BASE_URL = "/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(`${BASE_URL}/users`, user_route);
app.use(`${BASE_URL}/users`, user_route);
app.use(`${BASE_URL}/auth`, auth_route);
app.use(`${BASE_URL}/reports`, report_route);

// verification routes
app.use(`${BASE_URL}/cams`, cams_route);
app.use(`${BASE_URL}/cps`, cps_route);
app.use(`${BASE_URL}/responders`, responsers_route);
// app.use(`${BASE_URL}/user-report`, user_report_route)

app.get(`${BASE_URL}/`, (req, res) =>
  res.json({ msg: "Welcome to ewers API" })
);
app.get(`${BASE_URL}/*`, (req, res) =>
  res.status(404).json({ msg: "Route not implemented on the server" })
);

mongoose.connect(process.env.URL);
mongoose.connection.on("open", () => {
  console.log("Database Server connected");
  app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
