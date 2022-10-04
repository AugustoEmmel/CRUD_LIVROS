import express from "express"
import { Livro } from "../entities/Livro";

const router = express.Router();

router.get('/api/buscar_livros', async (req, res) => {

  const livros = await Livro
    .getRepository()
    .createQueryBuilder('livros')
    .getMany()

  return res.json(livros);

})

export { router as buscarLivrosRoute }