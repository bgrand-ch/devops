# DevOps playground

> **Work in progress:** Kubernetes resources are currently being modified and the corresponding documentation is not necessarily up to date.

## Objective

### Flow

Web browser <--> Localhost URL <--> React (SSR) <--> Laravel API

### Result

Display a JSON response from the API in the front-end app.

## Prerequisites

- Install Node (>= 20).
- Install PHP (>= 8) and Composer.
- Install Docker Desktop and enable Kubernetes.

## Local development without Kubernetes

### Install dependencies

Back:
```shell
composer install --working-dir back
```

Front:
```shell
npm install --prefix front
```

### Run microservices

Back:
```shell
(cd back && php artisan serve) # directory changed in the subshell
```

Front:
```shell
npm start --prefix front
```

## Local development with Kubernetes

### Create resources

Back:
```shell
kubectl apply -f infra/back/deployment.yaml
kubectl apply -f infra/back/service.yaml
```

Front:
```shell
kubectl apply -f infra/front/config.yaml
kubectl apply -f infra/front/deployment.yaml
kubectl apply -f infra/front/service.yaml
```

### Use microservices

Front:
```shell
kubectl get service app # finds ip to interact with front app
```
