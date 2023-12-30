import { config } from "dotenv"

config()

export const PORT = process.env.PORT || 3000
export const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;
