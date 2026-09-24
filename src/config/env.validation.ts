import Joi from 'joi';
export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  API_PREFIX: Joi.string().pattern(/^\S+$/).required(),
  DATABASE_URL: Joi.string()
    .uri({ scheme: ['postgresql'] })
    .required(),
  JWT_SECRET: Joi.string().min(32).required(),
  JWT_EXPIRES_IN: Joi.string()
    .trim()
    .pattern(/^[0-9]+[smhd]$/)
    .required(),

  BCRYPT_SALT_ROUNDS: Joi.number().integer().min(8).max(14).default(10),
  SCHOOL_NAME: Joi.string().min(3).max(80).required(),
  MIN_PASSING_GRADE: Joi.number().integer().min(1).max(100).default(51),
  MAX_STUDENTS_PER_COURSE: Joi.number().integer().min(5).max(60).required(),
});
