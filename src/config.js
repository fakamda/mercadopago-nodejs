import { config } from "dotenv"

config()

export const PORT = process.env.PORT || 3000
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;
