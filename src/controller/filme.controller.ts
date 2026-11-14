import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service.js";

const filmeService = new FilmeService();

export class FilmeController{

    //REQUISIÇÃO POST
    async create(req: Request,res: Response)
    {
        const dados = req.body; //{nome. imagem, nota}

        //Serviço que resolve
        await filmeService.create(dados);

        //Status 200 significa Ok
        res.status(200).send();
    }

    //requisiç~ao HHTP com verbo Delete
    async delete(req: Request, res: Response)
    {
        const id = Number(req.params.id);

        await filmeService.delete(id);

        res.status(200).send();
    }

    //Requisição HTTP com verbo PUT
    async update(req:Request, res:Response)
    {
        // Dados a serem atualizados
        const dados = req.body; //{nome, imagem, nota}

        //o id vem pela URL
        const id = Number(req.params.id);

        await filmeService.update(id,dados);

        res.status(200).send();
    }

    //requisição HTTP GET
    async findAll(req:Request, res:Response)
    {
        const resp = filmeService.findAll();

        //0 . json já coloca um status 200
        res.json(resp);
    }

    async findById(req:Request, res:Response)
    {

    }

}