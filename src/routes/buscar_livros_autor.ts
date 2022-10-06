import express from "express";
import { Livro } from "../entities/Livro";
import { Autor } from "../entities/Autor";

const router = express.Router();

router.get("/api/autor/:autor_id/livros", async (req, res) => {
    const { autor_id } = req.params;

    const autor = await Autor.findOne({
        where: {
            id: parseInt(autor_id)
        }
    })

    if (autor) {
        const livros = await Livro
            .getRepository()
            .createQueryBuilder('livros')
            .where('livros.autorId = :autor_id', { autor_id })
            .getMany()

        return res.json({ 
            autor, livros, msg: 'Livros encontrados com sucesso' 
        });
    } else {
        return res.json({
            msg: 'Livro ou autor não encontrado',
        });
    }

})

export { router as buscarLivrosAutorRoute };