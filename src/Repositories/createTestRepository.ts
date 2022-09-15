import { prisma } from "../Config/database";
import { Test } from "@prisma/client";

export async function findTeachersDisciplinesId(teacherId:number, disciplineId: number) {
    const {id} = await prisma.teachersDisciplines.findFirst({
        where: {teacherId,
                disciplineId}
    })
    return id;
}

export async function insertTest(testInfo: Omit<Test,"id">) {
    await prisma.test.create({
        data:testInfo
    })
}