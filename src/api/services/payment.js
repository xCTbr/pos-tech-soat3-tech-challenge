import axiosClient from "../apiClient.js";

const sellerId = process.env.SELLER_ID;
const external_pos_id = process.env.EXTERNAL_POS_ID;

export default function createNewPayment(data) {
	console.log(`instore/orders/qr/seller/collectors/${sellerId}/pos/${external_pos_id}/qrs`, JSON.stringify(data))
	return axiosClient.post(`instore/orders/qr/seller/collectors/${sellerId}/pos/${external_pos_id}/qrs`, JSON.stringify(data));
}
