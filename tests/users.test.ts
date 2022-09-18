import app from "../src/app";
import supertest from "supertest";
import { userExample } from "./factories/userFactory"

describe(' test POST /signup', () => {
    it('Must return 201 if user created correctly', async () => {
        const { email, password } = await userExample();
        const body = { email, password, confirmPassword: password };

        const { status } = await supertest(app).post("/signup").send(body);

        expect(status).toBe(201);
    });
    it('Must return 422 for empty body', async () => {
        const body = {};
        const { status } = await supertest(app).post("/signup").send(body);

        expect(status).toBe(422);
    });
    it('Must return 401 for email already registered', async () => {
        const { email, password } = await userExample();
        const body = { email, password, confirmPassword: password };
        await supertest(app).post('/signup').send(body);
        const { status } = await supertest(app).post('/signup').send(body);

        expect(status).toBe(401);
    });
})

describe('test POST /login', () => {
    it('Must return 200 and token if user is logged', async () => {
        const { email, password } = await userExample();
        const bodySignup = { email, password, confirmPassword: password };
        await supertest(app).post('/signup').send(bodySignup);

        const bodyLogin = { email, password };
        const { status, body } = await supertest(app).post('/login').send(bodyLogin);

        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Object);
    });
    it('Must return 422 for empty body', async () => {
        const body = {};
        const result = await supertest(app).post('/login').send(body);
        const status = result.status;

        expect(status).toBe(422);
    });
    it('Must return 412 if email is not registered', async () => {
        const body = await userExample();
        const { status } = await supertest(app).post('/login').send(body);

        expect(status).toBe(412);

    });
    it('Must return 401 for wrong password', async () => {
        const { email, password } = await userExample();
        const bodySignup = { email, password, confirmPassword: password };
        await supertest(app).post('/signup').send(bodySignup);
        const { password: newPassword } = await userExample();
        const bodyLogin = { email, password: newPassword };
        const { status } = await supertest(app).post('/login').send(bodyLogin);

        expect(status).toBe(401);
    });
})
