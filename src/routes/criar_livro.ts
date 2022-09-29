import express from "express";
import { Livro } from "../entities/Livro";

const router = express.Router();

router.post('/api/criar_livro', async (req, res) =>{
    const {
        titulo,
        editora,
        sinopse,
        paginas
    } = req.body;

    const livro = Livro.create({
        titulo,
        editora,
        sinopse,
        paginas
    })

    await livro.save();

    return res.json(livro);

})

export{
    router as criarLivroRoute
}