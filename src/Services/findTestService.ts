import {
    testsByDiscipline,
    testsByTeachers
} from "../Repositories/findTestsRepository";

import {
    findTeachers,
    findCategories,
    findDisciplines,
    findTerms
} from "../Repositories/findTableDataRepository";

export async function disciplineTests() {
    const { terms } = await findTerms();
    const { disciplines } = await findDisciplines();
    const { categories } = await findCategories();
    let listReturn = [];
    for (let i of terms) {
        let termObj = { term: i.number, testsByDiscipline: [] };
        for (let j of disciplines) {
            let disciplineObj = { discipline: j.name, testsByCategory: [] };
            for (let k of categories) {
                const listTests = await testsByDiscipline(i.number, j.name, k.name);
                if (listTests.length !== 0) {
                    let categoryObj = { category: k.name, tests: listTests };
                    disciplineObj.testsByCategory.push(categoryObj);
                }
            }
            if (disciplineObj.testsByCategory.length !== 0) {
                termObj.testsByDiscipline.push(disciplineObj);
            }
        }
        listReturn.push(termObj);
    }
    return listReturn;
}

export async function teacherTests() {
    const { teachers } = await findTeachers();
    const { categories } = await findCategories();
    let listReturn = [];
    for (let i of teachers) {
        let teacherObj = { teacher: i.name, testsByCategory: [] };
        for (let j of categories) {
            const listTests = await testsByTeachers(i.name, j.name);
            if (listTests.length !== 0) {
                let categoryObj = { category: j.name, tests: listTests };
                teacherObj.testsByCategory.push(categoryObj);
            }

        }
        listReturn.push(teacherObj);
    }

    return listReturn;

}

