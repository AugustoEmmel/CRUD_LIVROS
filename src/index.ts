import "reflect-metadata";
import * as dotenv from "dotenv"
import conectarDB from "./config/config_banco";
import express from "express";
import { criarLivroRoute } from "./routes/criar_livro";
import { criarAutorRoute } from "./routes/criar_autor";
import { deletarLivroRoute } from "./routes/deletar_livro";
import { deletarAutorRoute } from "./routes/deletar_autor";
import { buscarLivrosRoute } from "./routes/buscar_livros";
import { buscarAutoresRoute } from "./routes/buscar_autores";

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
    app.use(deletarLivroRoute);
    app.use(deletarAutorRoute);
    app.use(buscarLivrosRoute);
    app.use(buscarAutoresRoute)
    
} catch (err) {
    console.error(err)
    throw new Error("Não foi possível conectar ao Postgres")
}}

main();

