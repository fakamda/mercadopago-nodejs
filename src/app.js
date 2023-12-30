import express from 'express'
import PaymentRoutes from './router/payment.routes.js'
import { PORT } from './config.js'
import morgan from 'morgan';
import path from 'path'

const app = express();


app.get('/', (req, res) => {
  res.send('inicio');
})

app.use(morgan('dev'))
app.use(express.json())

app.use(PaymentRoutes)

app.use(express.static(path.resolve("src/public")));

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
