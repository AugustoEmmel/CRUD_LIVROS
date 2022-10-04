import express from "express";
import { Livro } from "../entities/Livro";

const router = express.Router();

router.delete("/api/deletar_livro/:livro_id", async (req, res) => {
    const { livro_id } = req.params;

    const response = await Livro.delete(parseInt(livro_id));

    return res.json(response);
});

export { router as deletarLivroRoute };