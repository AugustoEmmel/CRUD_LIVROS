import express from "express";
import { Autor } from "../entities/Autor";

const router = express.Router();

router.post('/api/criar_autor', async (req, res) =>{
    const {
        nome,
        idade
    } = req.body;

    const autor = Autor.create({
        nome,
        idade
    })

    await autor.save();

    return res.json(autor);

})

export{
    router as criarAutorRoute
}