import { prisma } from "../Config/database";
import connection from "../Config/postgres";

export async function testsByDiscipline(disciplineId:number) {
    const disciplineTests = await prisma.test.findMany({
        include: {
            TeachersDisciplines: {

            }
        }
    })
}

export async function teachersAndCategories() {
    const {rows:teachers} = await connection.query(
        'select name from teachers'
    )
    const {rows: categories} = await connection.query(
        'select name from categories'
    )
    return {teachers,categories};
}
export async function testsByTeachers(teacher:string,category:string) {
    const {rows:testList} = await connection.query(
        'select teachers.name as teacher, tests."pdfUrl" as url, tests.name as test, tests.id as id, categories.name as category, disciplines.name as disciplines from teachers join "teachersDisciplines" on teachers.id = "teachersDisciplines"."teacherId" join disciplines on "teachersDisciplines"."disciplineId" = disciplines.id join tests on "teachersDisciplines".id=tests."teacherDisciplineId" join categories on tests."categoryId"=categories.id where teachers.name=$1 and categories.name=$2;'
        ,[teacher, category]
    );
    return testList;   
}

/*  TENTATIVA DE FAZER PELO PRISMA
export async function testsByTeachers() {
    const teacherTests = await prisma.test.findMany({
        select:{
            id:true,
            name:true,
            pdfUrl:true,
            TeachersDisciplines:{
                select: {
                    
                    Teacher:{
                        select:{
                            name:true
                        }
                    }
                }
            },
            Category:{
                select:{
                    name:true
                }
            }    
        }
    });
    console.log(teacherTests);
    return teacherTests;
    
}*/