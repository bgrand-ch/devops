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

## Local development

### Install dependencies

Back:
```shell
composer install --working-dir back
```

Front:
```shell
npm install --prefix front
```

### Run applications

Back:
```shell
(cd back && php artisan serve) # directory changed in the subshell
```

Front:
```shell
npm run dev --prefix front
```

## Local development with Docker

**Important:** Start Docker Desktop.

### Build app images

Back:
```shell
# TODO
```

Front:
```shell
docker build front -t front-app
```

### Run app images

Back:
```shell
# TODO
```

Front:
```shell
docker run --detach --publish 8080:3000 front-app # http://localhost:8080
```

## Local development with Kubernetes

**Important:** Start Docker Desktop and enable Kubernetes.

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

### Use applications

Front:
```shell
kubectl get service app # finds ip to interact with front-end app
```
