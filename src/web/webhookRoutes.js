import webhookController from '../controllers/webhookController.js';

export default function webhookRoutes(express) {
	const router = express.Router();
	const controller = webhookController();

	router.route('/').post(controller.webHookHandler, 
		// #swagger.tags = ['Webhook']
		// #swagger.description = 'Endpoint used to webhook payment automation.'
	);

	return router;
}
