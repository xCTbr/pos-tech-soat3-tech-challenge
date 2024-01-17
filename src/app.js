import express from "express";
// import routes from "./routes/index.js";
import routes from "./frameworks_drivers/api/routes/index.js"
import connectDatabase from "./config/dbConnect.js";

const conexao = await connectDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
// routes(app);
routes(app, express);


export default app;
