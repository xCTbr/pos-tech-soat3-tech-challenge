import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://api.mercadopago.com/`,
  headers: {
    'Content-Type': 'application/json',
		'Authorization': `Bearer ${process.env.TOKEN_VENDEDOR_MP}`
  }
});

export default axiosClient;