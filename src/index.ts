import "reflect-metadata";
import * as dotenv from "dotenv"
import conectarDB from "./config/config_banco";
import express from "express";
import { criarLivroRoute } from "./routes/criar_livro";
import { criarAutorRoute } from "./routes/criar_autor";
import { deletarLivroRouter } from "./routes/deletar_livro";
import { deletarAutorRouter } from "./routes/deletar_autor";

dotenv.config({ path: __dirname+'/.env'})

const app = express();

const main = () => {
try {
    conectarDB;
    app.listen(8080, () => {
        console.log("Rodando na porta 8080")
    })

    app.use(express.json());
    app.use(criarAutorRoute);
    app.use(criarLivroRoute);
    app.use(deletarLivroRouter);
    app.use(deletarAutorRouter);
    
} catch (err) {
    console.error(err)
    throw new Error("Não foi possível conectar ao Postgres")
}}

main();

