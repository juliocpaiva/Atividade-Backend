import { FilmeController } from "../controller/filme.controller.js";
import { Router } from "express";
import { FilmeScalarFieldEnum } from "../generated/prisma/internal/prismaNamespace.js";

const router = Router();
const filmeController = new FilmeController();

// GET para retornar os Filmes
// PUT com id para atualizar o filme
// POST Para criar o filme
// DELETE com ID para remover o filme
// a rota padrão é /filmes
router.post('/', filmeController.create);

router.delete('/:id', filmeController.delete);

router.get('/', filmeController.findAll);

router.put('/:id' , filmeController.update);


export {router as filmeRoutes};