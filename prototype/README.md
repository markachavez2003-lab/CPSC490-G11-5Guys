# Marathon Tracker App — Prototype

This folder contains the starter prototype for our CPSC 490 Marathon Tracker App.

The mobile application uses **React Native with Expo**. Our planned technology stack also includes Firebase for backend services, Mapbox for maps, and Python for race-time prediction.

This initial skeleton establishes the project structure. No marathon tracking features have been implemented yet.

## Requirements

- Node.js (LTS version recommended)
- npm
- Expo Go on a compatible mobile device, or a supported emulator

## How to install

From the repository root:

```bash
cd prototype
npm ci
```

## How to run

Start the Expo development server:

```bash
npm start
```

Follow the instructions in the terminal to open the application on a supported device or emulator.

## How to test

The starter project should be checked by confirming that Expo starts without errors.

```bash
npm start
```

Automated tests for the Marathon Tracker App have not been implemented yet.

## Environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Fill in the required configuration values when Firebase and Mapbox are integrated. Do not commit actual API keys or other secrets.

## Current status

**Sprint 2 — Prototype Skeleton (Issue #49)**

- React Native + Expo starter project
- Dependency files included
- Environment configuration template planned
- Setup and run instructions documented
- No application features implemented yet

## Planned features

Future development will include runner tracking, race information, spectator features, and race-time prediction.

These features are outside the scope of Issue #49.