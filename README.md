# Podcasts

This application fetches podcasts from Apple iTunes API and lets you listen to them. You can also filter the list of podcasts, and fetched podcasts and their details will be saved locally for one day. It includes unit, integration and E2E tests.

## Technologies used:
React, Tailwind, React Testing Library, Jest, Puppeteer.

## Note: 
This app was developed in Windows/Chrome and not tested in other environments. It should run fine in them but may require some small tweaks.

Minimum tested device width: 500px.

If backend requests take too long it might be an issue with the AllOrigins endpoint used (it is being used to avoid CORS problems). Please retry a while later if that is the case.


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\
You need to be at the same time running the app either on development or production mode, so the E2E tests can run successfully.

### `npm run build`

Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
