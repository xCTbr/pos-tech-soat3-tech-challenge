import express from "express";
import CategoryController from "../controllers/categoryController.js";

const routes = express.Router();

routes.get("/category", CategoryController.listCategories);
routes.get("/category/:id", CategoryController.getCategoryById);
routes.post("/category", CategoryController.createCategory);
routes.put("/category/:id", CategoryController.updateCategory);
routes.delete("/category/:id", CategoryController.deleteCategory);

export default routes;
