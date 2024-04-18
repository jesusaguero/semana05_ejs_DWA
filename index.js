import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 'Bienvenido a los motores de plantilla' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
