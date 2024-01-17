import customerRoutes from "./customerRoutes.js";

export default function routes(app, express) {
	app.route("/").get((req, res) => res.status(200).send("Sistema de pedidos"));
  app.use('/customers', customerRoutes(express));
}