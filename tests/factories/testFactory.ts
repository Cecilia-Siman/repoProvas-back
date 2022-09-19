import { faker } from "@faker-js/faker";

export async function testExample() {
    return {
        name: faker.random.word(),
        pdfUrl: faker.internet.url(),
        categoryId: 1,
        teacherId: 1,
        disciplineId: 1
    }
    
}