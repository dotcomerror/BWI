# BonziWORLD Independent

## Overview
BonziWORLD Independent is a nostalgic chat application featuring animated Bonzi Buddy characters. Users can join chat rooms, customize their Bonzi character, and communicate with others in real-time using Socket.io.

## Project Structure
```
├── server/          # Node.js/Express backend with Socket.io
│   ├── index.js     # Main server entry point
│   ├── meat.js      # Chat logic and Socket.io handlers
│   ├── ban.js       # Ban management
│   ├── settings.json # Server configuration (port 5000)
│   └── package.json
├── src/             # Frontend source files
│   ├── www/         # HTML, CSS (SCSS), JS source
│   ├── Gruntfile.js # Build configuration
│   └── package.json
├── build/           # Built frontend output (generated)
│   └── www/         # Static files served by Express
└── res/             # Resource files and icons
```

## Development
- **Frontend Build**: Run `cd src && npx grunt test_www` to rebuild the frontend
- **Server**: The server runs on port 5000 and serves static files from `build/www/`

## Dependencies
- Node.js 20
- Ruby + Sass (for SCSS compilation)
- npm packages in both `server/` and `src/` directories

## Configuration
Server settings are in `server/settings.json`:
- `port`: Server port (5000 for Replit)
- `express.serveStatic`: Enable static file serving
- `prefs`: Chat room settings

## Deployment
- **Platform**: Render / Replit Autoscale
- **Start Command**: `node server/index.js`
- **Root Directory**: Project root (contains `server/` and `build/` directories)

## Notes
- The Cordova-related 404 errors (platform.css, cordova.js) are expected - those files are only for mobile app builds
- WebGL warning is just a fallback notification, the app works without it
- Ensure absolute paths are used in `server/index.js` for `settings.json` and static file serving to handle different execution environments.
