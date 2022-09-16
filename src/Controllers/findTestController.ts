import { Request, Response } from "express";
import { teacherTests } from "../Services/findTestService";


export async function findTeacherTests(req:Request, res: Response) {
    try{
        const testList = await teacherTests();
        res.send(testList);
        
    }
    catch(error){
        console.log(error);
    }
    
}

export async function findDisciplineTests(req:Request, res: Response) {
    try{
        
    }
    catch(error){
        console.log(error);
    }
    
}