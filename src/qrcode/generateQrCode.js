import QRCode from 'qrcode';

const getQrCodeFile = (qr_data) => {
	QRCode.toFile('src/qrcode/qrcode.png', qr_data, function (err, url) {
		console.log(url)
	})
};

export default getQrCodeFile;