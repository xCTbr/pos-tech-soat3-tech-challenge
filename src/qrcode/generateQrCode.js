import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

function createTempLinkFromBase64(base64String, tempDirectory) {
  // Create a unique filename using UUID
  const filename = `${uuidv4()}.png`;

  // Decode the base64 string into a Buffer
  const buffer = Buffer.from(base64String, 'base64');

  // Create a path to the temporary file
  const tempFilePath = path.join(tempDirectory, filename);

  // Write the buffer to the temporary file
  fs.writeFileSync(tempFilePath, buffer);

  // Generate a temporary link for the file
  const tempLink = `http://localhost:3000/${filename}`; //example.com/${filename}; // Replace with your actual domain

  return tempLink;
}
const getQrCodeFile = (qr_data) => {
	QRCode.toDataURL(qr_data, function (err, url) {
		const base64Data = url.replace(/^data:image\/png;base64,/, "");
		const link = createTempLinkFromBase64(base64Data, 'src/qrcode/');
		console.log(link)
	})
};

export default getQrCodeFile;