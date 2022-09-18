import { prisma } from "../src/Config/database";

async function main() {
    for (let i = 1; i < 7; i++) {
        let data = { number: i };
        await prisma.term.upsert({
            where: { number: data.number },
            update: {},
            create: data
        })
    }
    const categoriesArray = ['Projeto', 'Prática', 'Recuperação'];
    for (let i = 0; i < categoriesArray.length; i++) {
        let data = { name: categoriesArray[i] };
        await prisma.category.upsert({
            where: { name: data.name },
            update: {},
            create: data
        })
    }
    const teachersArray = ['Diego Pinho', 'Bruna Hamori'];
    for (let i = 0; i < teachersArray.length; i++) {
        let data = { name: teachersArray[i] };
        await prisma.teacher.upsert({
            where: { name: data.name },
            update: {},
            create: data
        })
    }
    const disciplinesArray = [{ name: 'HTML e CSS', termId: 1 }, { name: 'JavaScript', termId: 2 }, { name: 'React', termId: 3 }, { name: 'Humildade', termId: 1 }, { name: 'Planejamento', termId: 2 }, { name: 'Autoconfiança', termId: 3 }];
    for (let i = 0; i < disciplinesArray.length; i++) {
        let data = disciplinesArray[i];
        await prisma.discipline.upsert({
            where: { name: data.name },
            update: {},
            create: data
        })
    }
    const teachersDisciplinesArray = [{ teacherId: 1, disciplineId: 1 }, { teacherId: 1, disciplineId: 2 }, { teacherId: 1, disciplineId: 3 }, { teacherId: 2, disciplineId: 4 }, { teacherId: 2, disciplineId: 5 }, { teacherId: 2, disciplineId: 6 }];
    for (let i=0;i<teachersDisciplinesArray.length;i++){
        let data = teachersDisciplinesArray[i];
        await prisma.teachersDisciplines.upsert({
            where: {teacherId_disciplineId:data},
            update: {},
            create: data
        })
    }
}

main().catch(error => {
    console.log(error);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})