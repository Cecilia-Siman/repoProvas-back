import { Request, Response } from "express";
import { newTest } from "../Services/createTestService";


export async function createTest(req:Request, res: Response) {
    newTest(req.body);
    res.sendStatus(201);
    
}