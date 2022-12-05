import { GoodByeController } from "../controller/GoodByeController";
import express, { Express, Request, Response } from "express";

const goodbye = express();

goodbye.route('/')
    .get( async (req: Request, res: Response) => {
        //Obtein query param
        const name: any = req?.query?.name;

        // Controller Instance to excute method
        const controller: GoodByeController = new GoodByeController();

        //Obtain response
        const response = await controller.getMessage(name);

        // Send to the clent response
        res.json(response)
    })


export default goodbye;