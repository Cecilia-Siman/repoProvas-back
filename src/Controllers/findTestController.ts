import { Request, Response } from "express";
import { teacherTests } from "../Services/findTestService";


export async function findTeacherTests(req:Request, res: Response) {
    const testList = await teacherTests();
    res.send(testList);
    
}

export async function findDisciplineTests(req:Request, res: Response) {
    
}