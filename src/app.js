import express from 'express'
import PaymentRoutes from './router/payment.routes.js'
import { PORT } from './config.js'
import morgan from 'morgan';

const app = express();


app.get('/', (req, res) => {
  res.send('inicio');
})

app.use(morgan('dev'))

app.use(PaymentRoutes)

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
