import axiosClient from "../apiClient.js";

const sellerId = 1652443699;
const external_pos_id = "CAIXA01";

export default function createNewPayment(data) {
	return axiosClient.post(`instore/orders/qr/seller/collectors/${sellerId}/pos/${external_pos_id}/qrs`, JSON.stringify(data));
}
