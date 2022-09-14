import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string().pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i).required(),
    password: Joi.string().min(6).required()
})

export default loginSchema;