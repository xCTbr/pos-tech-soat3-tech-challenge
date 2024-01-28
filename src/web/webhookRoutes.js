import webhookController from '../controllers/webhookController.js';

export default function webhookRoutes(express) {
	const router = express.Router();
	const controller = webhookController();

	router.route('/').post(controller.webHookHandler);

	return router;
}
