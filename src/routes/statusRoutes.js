import express from "express";
import StatusController from "../controllers/statusController.js";

const routes = express.Router();

routes.get("/status", StatusController.listStatuss);
routes.get("/status/:id", StatusController.getStatusById);
routes.post("/status", StatusController.createStatus);
routes.put("/status/:id", StatusController.updateStatus);
routes.delete("/status/:id", StatusController.deleteStatus);

export default routes;
