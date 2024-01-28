deploy:
	@kubectl apply -f deployment.yml
	@kubectl apply -f service.yml


undeploy:
	@kubectl delete service app-service
	@kubectl delete deployment app-deployment


update-image:
	@docker build -t carlostofoli/tech-challenge-fase3:latest .
	@docker login
	@docker tag carlostofoli/tech-challenge-fase3:latest carlostofoli/tech-challenge-fase3:latest
	@docker push carlostofoli/tech-challenge-fase3:latest