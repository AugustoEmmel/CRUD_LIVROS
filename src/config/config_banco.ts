import * as dotenv from "dotenv"
import { DataSource } from "typeorm";
import { Autor } from "../entities/Autor";
import { Livro } from "../entities/Livro";

dotenv.config({ path: __dirname + '/../../.env' });

const conectarDB = new DataSource({
    type: "postgres",
    host: process.env.DATA_HOST,
    port: 5432,
    username: process.env.DATA_USER,
    password: process.env.DATA_PASSWORD,
    database: process.env.DATA_DB,
    entities: [Autor,Livro],
    synchronize: true
})

conectarDB.initialize()
    .then(() => {
        console.log("Conexão ao banco inicializada com sucesso!");
    })
    .catch((err) => {

        console.error("Erro ao inicializar conexão ao banco: ", err);
    })

export default conectarDB;