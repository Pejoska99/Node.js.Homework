import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('admin', 'user').required()
    
});

const userValidator = (req, res, next) => {
    const userData = req.body;
    const validation = userSchema.validate(userData);

    if (validation.error) {
        res.status(400).send({
          msg: validation.error.details[0].message,
        });
      } else {
        next();
      }
    };
    
    export default userValidator;