import { MERCADOPAGO_ACCESS_TOKEN } from "../config.js"
import {MercadoPagoConfig, Preference} from "mercadopago"

const client = new MercadoPagoConfig({
  accessToken: MERCADOPAGO_ACCESS_TOKEN,
  timeout: 5000,
});

const preference = new Preference(client)

export const createOrder = async (req, res) => {
    try{
      const paymentRequest = await preference.create({
        body: {
          items: [
            {
              id: "1",
              title: "Gaming brain",
              quantity: 1,
              unit_price: 500
            }
          ]
        }
     })
      console.log(paymentRequest)
      res.send("Orden creada exitosamente");
    } catch (error) {
      console.error('Error al crear la orden:', error);
      res.status(500).json({ message: "Error interno del servidor" });
   }
  }


export const receiveWebhook = async (req, res) => {
  // try {
  //   const payment = req.query;
  //   console.log(payment);
  //   if (payment.type === "payment") {
  //     const data = await mercadopage.payment.findById(payment["data.id"]);
  //     console.log(data);
  //   }

  //   res.sendStatus(204);
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({ message: "Something goes wrong" });
  // }
  res.send('webhook')
};
