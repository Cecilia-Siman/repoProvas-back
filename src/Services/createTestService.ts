import { Test } from "@prisma/client";
import { insertTest, findTeachersDisciplinesId } from "../Repositories/createTestRepository";

export async function newTest(testData: any) {
    try {
        let { teacherId, disciplineId } = testData;
        teacherId = Number(teacherId);
        disciplineId = Number(disciplineId);
        const teacherDisciplineId = await findTeachersDisciplinesId(teacherId, disciplineId);
        let { name, pdfUrl, categoryId } = testData;
        categoryId = Number(categoryId);
        const newTest = { name, pdfUrl, categoryId, teacherDisciplineId };
        await insertTest(newTest);
    }
    catch (error) {
        console.log(error);
    }
}