import { findDisciplineTests, findTeacherTests } from "../Controllers/findTestController";
import { validateToken } from "../Middlewares/tokenValidator";
import { Router } from "express";

const findTestsRouter = Router();

findTestsRouter.get('/disciplines',validateToken, findDisciplineTests);
findTestsRouter.get('/teachers',validateToken, findTeacherTests);

export default findTestsRouter;