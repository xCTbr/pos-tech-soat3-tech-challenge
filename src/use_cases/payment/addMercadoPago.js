import createNewPayment from '../../api/services/payment.js';
import getQrCodeFile from '../../qrcode/generateQrCode.js';

export default async function addPayment(data) {
	if (!data) return "data can not be empty";

	const response = await createNewPayment(data);
	console.log("response data",data)
	const { qr_data } = response.data;
	if (qr_data) getQrCodeFile(qr_data);
	return response.data.qr_data;
}
