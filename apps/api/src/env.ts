import { z } from 'zod';

const schema = z.object({
  AWS_ACCESS_KEY_ID: z.string(),
  AWS_SECRET_ACCESS_KEY: z.string(),
  AWS_REGION: z.string(),
});

export const processEnv = schema.parse(process.env);
