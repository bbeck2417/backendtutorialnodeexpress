# Backend API

## Overview
A simple Express.js REST API server that serves song data.

## Project Architecture
- **Runtime**: Node.js 20
- **Framework**: Express 5
- **Entry Point**: `app.js`
- **Port**: 5000 (bound to 0.0.0.0)

## API Endpoints
- `GET /api/songs` - Returns a list of songs with title, artist, popularity, genre, and release date

## Dependencies
- express - Web framework
- cors - Cross-origin resource sharing middleware
- nodemon - Development auto-restart (dev dependency)
