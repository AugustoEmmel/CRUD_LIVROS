import express from "express";
import { Autor } from "../entities/Autor";

const router = express.Router();

router.delete("/api/deletar_autor/:autor_id", async (req, res) => {
    const { autor_id } = req.params;

    const response = await Autor.delete(parseInt(autor_id));

    return res.json(response);
});

export { router as deletarAutorRouter };