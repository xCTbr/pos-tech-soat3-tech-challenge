import { MercadoPagoConfig } from 'mercadopago';

// init client object
export const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_TOKEN });
export const seller = new MercadoPagoConfig({ accessToken: process.env.TOKEN_VENDEDOR_MP });
