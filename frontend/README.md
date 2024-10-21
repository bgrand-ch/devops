# App

## Prerequisites

- Use version 20 or higher of Node.
- Go to `app` folder with `cd ./app`.
- Install dependencies with `npm install`.

## Local development

```shell
npm start
```

## Production SPA

```shell
npm run build
```

### Serve SPA locally

```shell
npm run serve
```

### Serve SPA with Docker

```shell
docker build --tag frontend-app .
docker run --detach --publish 8080:80 frontend-app
docker ps
```
