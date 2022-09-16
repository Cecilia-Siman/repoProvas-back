import { createTest } from "../Controllers/createTestController";
import testSchema from "../Schemas/createTestSchema";
import { validateSchema } from "../Middlewares/schemaValidator";
import { validateToken } from "../Middlewares/tokenValidator";
import { Router } from "express";

const createTestRouter = Router();

createTestRouter.post('/newTest',validateToken, validateSchema(testSchema), createTest);

export default createTestRouter;