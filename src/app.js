import express from "express";
import routes from "./web/index.js";

const app = express();
app.use(express.json());

routes(app, express);

export default app;
