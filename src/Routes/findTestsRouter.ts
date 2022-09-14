import { findDisciplineTests, findTeacherTests } from "../Controllers/findTestController";
import { Router } from "express";

const findTestsRouter = Router();

findTestsRouter.get('/disciplines', findDisciplineTests);
findTestsRouter.get('/teachers', findTeacherTests);

export default findTestsRouter;