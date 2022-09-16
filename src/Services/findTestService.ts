import { 
    testsByDiscipline, 
    testsByTeachers, 
    teachersAndCategories 
} from "../Repositories/findTestsRepository";

export async function teacherTests() {
    const {teachers,categories} = await teachersAndCategories();
    let listReturn = [];
    for (let i of teachers){
        let teacherObj = {teacher: i.name, testsByCategory: []};
        for (let j of categories){
            const listTests = await testsByTeachers(i.name,j.name);
            if(listTests.length !== 0){
                let categoryObj = {category: j.name, tests: listTests};
                teacherObj.testsByCategory.push(categoryObj);
            }
            
        }
        listReturn.push(teacherObj);
    }
    
    return listReturn;
    
}