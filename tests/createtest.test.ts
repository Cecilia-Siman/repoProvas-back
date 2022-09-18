import app from "../src/app";
import supertest from "supertest";

describe('test POST /newTest', () => {
    it.todo('Must return 201 if test created correctly');
    /*it('Must return 422 for empty body', async () => {
        const body = {};
        const result = await supertest(app).post('/newTest').send(body).set('Authorization', 'bearer ' + auth.token); 
        const status = result.status;
        expect(status).toBe(422);
    });
    it.todo('Must return 401 if no token')*/
})
