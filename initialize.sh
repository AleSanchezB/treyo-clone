#!/bin/bash

# Script that starts the project assuming the dependencies are installed.

# Initializing Python Enviroment.
python -m venv venv
source venv/bin/activate

# Initializing backend
uvicorn backend.main:app --reload &

# Initializing frontend
cd frontend
npm start &
