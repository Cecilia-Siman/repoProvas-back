import Joi from "joi";

const findDisciplineTestSchema = Joi.object({
    disciplineId: Joi.number().required()
})

export default findDisciplineTestSchema;