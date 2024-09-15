import { serve } from '@hono/node-server';
import { Hono } from 'hono';

import { cors } from 'hono/cors';

const app = new Hono();

app.use(cors());

// https://cloud.google.com/vertex-ai/generative-ai/docs/samples/generativeaionvertexai-gemini-pdf#generativeaionvertexai_gemini_pdf-nodejs
app.patch('/new/collection/:name', async (c) => {
  const name = c.req.param('name');

  const body = await c.req.parseBody();
  console.log('body', body['file'], name);

  return c.text('Hello Hono!');
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
