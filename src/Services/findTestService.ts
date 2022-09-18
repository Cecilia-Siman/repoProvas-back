import {
    testsByDiscipline,
    testsByTeachers
} from "../Repositories/findTestsRepository";

import {
    findTeachers,
    findCategories,
    findDisciplines
} from "../Repositories/findTableDataRepository";

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