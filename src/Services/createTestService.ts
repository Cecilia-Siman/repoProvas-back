import { Test } from "@prisma/client";
import { insertTest, findTeachersDisciplinesId } from "../Repositories/createTestRepository";

export async function newTest(testData:any) {
    try{
        const teacherDisciplineId = await findTeachersDisciplinesId(testData.teacherId,testData.disciplineId); 
        const {name, pdfUrl, categoryId } = testData;
        const newTest = {name, pdfUrl, categoryId, teacherDisciplineId};
        await insertTest(newTest);
    }
    catch(error){
        console.log(error);
    }
}