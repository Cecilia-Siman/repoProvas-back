import { faker } from '@faker-js/faker';

export async function userExample(){
    return {
        email:faker.internet.email(),
        password:faker.internet.password(10)
    }
}
