Starter author : https://khalilstemmler.com

## Prepare

This repos uses Husky, to run pre-commit hooks (test, format, lint). Please use `npm run prepare` before any changes.

## Scripts

### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

### `npm run build`

Builds the app at `build`, cleaning the folder first (with rimraf lib).

### `npm run test`

Runs the `jest` tests once.

### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

### `npm run prettier-format`

Format your code.

### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

