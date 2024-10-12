#!/bin/bash

# Script that starts the project assuming the dependencies are installed.

# Initializing Python Enviroment.
python -m venv venv
source venv/bin/activate

# Function to start backend
start_backend() {
  cd ../backend
  python manage.py runserver
}

# Function to start frontend
start_frontend() {
  cd frontend
  npm start
}

# Run both backend and frontend in parallel
start_backend &  # Run backend in the background
start_frontend &  # Run frontend in the background

# Wait for both processes to complete (optional)
wait
