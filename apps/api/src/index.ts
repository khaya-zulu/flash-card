import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

// https://cloud.google.com/vertex-ai/generative-ai/docs/samples/generativeaionvertexai-gemini-pdf#generativeaionvertexai_gemini_pdf-nodejs
app.get('/', (c) => {
  return c.text('Hello Hono!');
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
