import app from "../src/app";
import supertest from "supertest";
import { prisma } from "../src/Config/database";
import { userExample } from "./factories/userFactory";
import { testExample } from "./factories/testFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
    await prisma.$executeRaw`TRUNCATE TABLE tests`;
});

afterAll(async () => {
    await prisma.$disconnect();
});

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

describe('test POST /newTest', () => {
    it('Must return 201 if test created correctly', async () => {
        const { email, password } = await userExample();
        const bodySignup = { email, password, confirmPassword: password };
        const bodyLogin = { email, password };
        await supertest(app).post('/signup').send(bodySignup);
        const result = await supertest(app).post('/login').send(bodyLogin);
        const token = result.body.token;
        const newTest = await testExample();
        const { status } = await supertest(app).post('/newtest').set('Authorization', 'Bearer ' + token).send(newTest);

        expect(status).toBe(201);
    });
    it('Must return 422 for empty body', async () => {
        const { email, password } = await userExample();
        const bodySignup = { email, password, confirmPassword: password };
        await supertest(app).post('/signup').send(bodySignup);
        const bodyLogin = { email, password };
        const result = await supertest(app).post('/login').send(bodyLogin);
        const token = result.body.token;
        const body = {};
        const { status } = await supertest(app).post('/newTest').send(body).set('Authorization', 'Bearer ' + token);

        expect(status).toBe(422);
    });
    it('Must return 401 if no token', async () => {
        const body = {};
        const { status } = await supertest(app).post('/newTest').send(body);

        expect(status).toBe(401);
    })
})

describe('test GET /findtests/disciplines', () => {
    it('Must return 200 and array with tests', async () => {
        const { email, password } = await userExample();
        const bodySignup = { email, password, confirmPassword: password };
        const bodyLogin = { email, password };
        await supertest(app).post('/signup').send(bodySignup);
        const result = await supertest(app).post('/login').send(bodyLogin);
        const token = result.body.token;
        const { status, body } = await supertest(app).get('/findtests/disciplines').set('Authorization', 'Bearer ' + token);

        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
    });
    it('Must return 401 if no token', async () => {
        const { status } = await supertest(app).get('/findtests/disciplines');
        expect(status).toBe(401);
    })
})

describe('test GET /findtests/teachers', () => {
    it('Must return 200 and array with tests', async () => {
        const { email, password } = await userExample();
        const bodySignup = { email, password, confirmPassword: password };
        const bodyLogin = { email, password };
        await supertest(app).post('/signup').send(bodySignup);
        const result = await supertest(app).post('/login').send(bodyLogin);
        const token = result.body.token;
        const { status, body } = await supertest(app).get('/findtests/teachers').set('Authorization', 'Bearer ' + token);

        expect(status).toBe(200);
        expect(body).toBeInstanceOf(Array);
    });
    it('Must return 401 if no token', async () => {
        const { status } = await supertest(app).get('/findtests/teachers');

        expect(status).toBe(401);
    })
})
