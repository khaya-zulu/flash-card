import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url().describe('api url'),
});

export const processEnv = envSchema.parse(process.env);
