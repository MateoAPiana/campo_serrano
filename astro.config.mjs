// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      BACKEND_HOST: envField.string({ context: "client", access: "public" })
    }
  }
});
