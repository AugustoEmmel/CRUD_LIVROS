import express from "express"
import { Autor } from "../entities/Autor";

const router = express.Router();

router.get('/api/buscar_autores', async (req, res) => {

  const autores = await Autor
    .getRepository()
    .createQueryBuilder('autors')
    .getMany()

  return res.json(autores);

})

export { router as buscarAutoresRoute }