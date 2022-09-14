import { createTest } from "../Controllers/createTestController";
import testSchema from "../Schemas/createTestSchema";
import { validateSchema } from "../Middlewares/schemaValidator";
import { Router } from "express";

const createTestRouter = Router();

createTestRouter.post('/newTest', validateSchema(testSchema), createTest);

export default createTestRouter;