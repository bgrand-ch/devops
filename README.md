# Kubernetes

## Connect frontend to backend using services

This task shows how to create a frontend and a backend microservice.
The backend microservice is a hello greeter. The frontend exposes the backend using nginx and a Kubernetes Service object.

More info: https://kubernetes.io/docs/tasks/access-application-cluster/connecting-frontend-backend/

## Configure frontend and backend

1. Install Docker Desktop and [enable Kubernetes](https://docs.docker.com/desktop/kubernetes/).
2. In the terminal, run `kubectl version` to confirm that the cli has been installed.
3. Run `kubectl apply -f ./backend/deployment.yaml` to create the backend deployment.
4. Run `kubectl apply -f ./backend/service.yaml` to create the backend service object.
5. Run `kubectl apply -f ./frontend/deployment.yaml` to create the frontend deployment.
6. Run `kubectl apply -f ./frontend/service.yaml` to create the frontend service object.
6. Run `kubectl get service frontend` which finds the external ip to interact with the frontend service from outside the cluster.
