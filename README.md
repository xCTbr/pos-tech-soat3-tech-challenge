# PÓS-TECH SOAT3 TECH CHALLENGE

API Sistema de pedidos 'Totem de autoatendimento'

## Setup

Para configurar a aplicação em ambiente kubernetes, execute os seguintes comandos

Deploy
```bash
$ kubectl apply -f deployment.yml
$ kubectl apply -f hpa.yml
$ kubectl apply -f service.yml
```
ou `make deploy`

Se necessário, remover os recursos da infraestrutura
```bash
$ kubectl delete service app-service
$ kubectl delete hpa app-hpa
$ kubectl delete deployment app-deployment
```
ou `make undeploy`

Se necessário, atualizar a imagem
```bash
$ docker build -t carlostofoli/tech-challenge-fase3:latest .
$ docker login
$ docker tag carlostofoli/tech-challenge-fase3:latest carlostofoli/tech-challenge-fase3:latest
$ docker push carlostofoli/tech-challenge-fase3:latest
```
ou `make update-image`



## Tech challenge Fase 2

a. Desenho da arquitetura

   ![tech_challenge_fase2](https://github.com/xCTbr/pos-tech-soat3-tech-challenge/assets/27281151/582c5bd6-6c49-43dd-8f38-5c96c3c8caec)

b. Collection:

	Swagger UI: http://localhost/docs

c.  Guia completo com todas as instruções para execução do projeto e a ordem de execução das APIs, caso seja necessário.

#### API's:

Nosso banco de dados já está populado, no entanto, caso deseje criar novos registros, seguir a ordem indicada abaixo.

- Criar cliente
- Criar categoria
- Criar produto associado à categoria
- Criar pedido associado à cliente e produto

d. Link para o vídeo




## Team
 - Turma: 3SOAT
 - Grupo: 2

    [Bruna Carlota](brunacarlota@gmail.com)

    [Carlos Tofoli](henrique.tofoli@hotmail.com)

    [Valdeir Jesus](valdeir_014@hotmail.com)
