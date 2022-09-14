import { signup, login } from "../Controllers/usersController";
import signupSchema from "../Schemas/signupSchema";
import loginSchema from "../Schemas/loginSchema";
import { validateSchema } from "../Middlewares/schemaValidator";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/signup',validateSchema(signupSchema), signup);
userRouter.post('/login', validateSchema(loginSchema), login);

export default userRouter;