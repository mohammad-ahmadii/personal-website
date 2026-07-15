import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// If you deploy to https://<username>.github.io/<repo-name>/
// set base to '/<repo-name>/' (with slashes on both sides).
// If you deploy to a "user site" repo named <username>.github.io,
// or use a custom domain, set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/personal-website',
})
