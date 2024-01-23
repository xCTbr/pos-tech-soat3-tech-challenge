import express from "express";
import routes from "./routes/apis/index.js";
import connectDatabase from "./config/dbConnect.js";

const conexao = await connectDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
})

const app = express();
app.use(express.json());

routes(app, express);

export default app;
