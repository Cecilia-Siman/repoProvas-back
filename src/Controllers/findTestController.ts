import { Request, Response } from "express";
import { teacherTests, disciplineTests } from "../Services/findTestService";


export async function findTeacherTests(req:Request, res: Response) {
    const testList = await teacherTests();
    res.send(testList).status(200);
    
}

export async function findDisciplineTests(req:Request, res: Response) {
    const testList = await disciplineTests();
    res.send(testList).status(200);
}