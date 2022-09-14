import Joi from "joi";

const teacherTestSchema = Joi.object({
    teacherId: Joi.number().required()
})

export default teacherTestSchema;