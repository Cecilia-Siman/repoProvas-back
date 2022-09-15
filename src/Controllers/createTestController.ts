import { Request, Response } from "express";
import { newTest } from "../Services/createTestService";


export async function createTest(req:Request, res: Response) {
    try{
        newTest(req.body);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
    
}