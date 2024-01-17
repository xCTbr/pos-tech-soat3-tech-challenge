import customerRoutes from "./customerRoutes.js";

export default function routes(app, express) {
  app.use('/api/v1/customers', customerRoutes(express));
}