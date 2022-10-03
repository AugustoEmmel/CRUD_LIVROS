import express from "express";
import { Livro } from "../entities/Livro";
import { Autor } from "../entities/Autor";

const router = express.Router();

router.post('/api/autor/:autor_id/criar_livro', async (req, res) =>{
    const {
        titulo,
        editora,
        sinopse,
        paginas
    } = req.body;

    const { autor_id } = req.params;

    const autor = await Autor.findOne({
        where: {
            id: parseInt(autor_id)
        }
    })

    if (!autor) {
        return res.json({
            msg: "Autor não encontrado"
        })
    }

    const livro = Livro.create({
        titulo,
        editora,
        sinopse,
        paginas,
        autor
    })

    await livro.save();

    return res.json(livro);

})

export{
    router as criarLivroRoute
}