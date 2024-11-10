# DevOps playground

> **Work in progress:** Kubernetes resources are currently being modified and the corresponding documentation is not necessarily up to date.

## Objective

### Flow

Web browser <--> Localhost URL <--> Next.js (SSR) <--> Laravel (API)

### Result

Display a JSON response in the front-end app from the back-end API.

## Prerequisites

- Install NVM to manage Node versions.
- Install PHP (>= 8.3) and latest Composer version.
- Install Docker Desktop and enable Kubernetes.

## Local development

### Install dependencies

Back:
```shell
composer install --working-dir back
```

Front:
```shell
(cd front && nvm use && npm install) # directory changed in the subshell
```

### Run applications

Back:
```shell
(cd back && php artisan serve) # directory changed in the subshell
```

Front:
```shell
(cd front && nvm use && npm run dev) # directory changed in the subshell
```

## Local development with Docker

**Important:** Start Docker Desktop.

### Build app images

Back:
```shell
docker build back --tag back-app --no-cache
```

Front:
```shell
docker build front --tag front-app --no-cache
```

### Run app images

Network:
```shell
docker network create api
```

Back:
```shell
docker run --detach --network api --name api back-app # http://api (only inside network containers)
```

Front:
```shell
docker run --detach --network api --publish 8080:3000 front-app # http://localhost:8080 (only in host browser)
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
