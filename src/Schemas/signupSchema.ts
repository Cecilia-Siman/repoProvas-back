import Joi from "joi";

const signupSchema = Joi.object({
    email: Joi.string().pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i).required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
})

export default signupSchema;