import { Router } from "express";
import userRouter from "./userRouter";
import createTestRouter from "./createTestRouter";
import findTestsRouter from "./findTestsRouter";

const router = Router();

router.use('/', userRouter);
router.use('/', createTestRouter);
router.use('/', findTestsRouter);

export default router;