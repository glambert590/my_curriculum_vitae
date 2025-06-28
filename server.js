import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Sirve archivos estáticos desde /public
app.use(express.static(join(__dirname, 'public')));

// Todas las rutas redirigen a index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});