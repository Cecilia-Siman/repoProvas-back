import Joi from "joi";

const signupSchema = Joi.object({
    //email: Joi.string().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
})

export default signupSchema;