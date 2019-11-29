# HOS-Metadata-Visualisation

React-based visualization of bibliographic metadata. This project is part of the Hamburg Open Science _Schaufenster_ project.

## Available Scripts

In the project directory, you can run:

### `yarn`

Install project dependencies to node_modules directory. Uses yarn.lock file.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Lints [styled components](https://styled-components.com) with [stylelint](https://stylelint.io)

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Configuration

The project expects a `.env` file with four environment variables. 

### REACT_APP_TILES_URL
Raster tiles path, which is used by [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js)

### REACT_APP_TYPO3_PUBLIC
Public path in TYPO3 enviroment

### REACT_APP_DEV_SERVER
Points to the remote development server. Used to link from the graph visualization to the discovery search results page.

### REACT_APP_SOLR_API

Path of the Apache Solr JSON API, i.e. `/solrQuery`

## Assets

This project uses [Open Sans](https://fonts.google.com/specimen/Open+Sans) typeface. The font files are not included in the repository, but can be downloaded with the [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts/open-sans?subsets=latin). The files need to be located inside the `src/fonts` directory.

In order to use the typeface in the map, the font files need to  be encoded. This can be done with [node-fontnik](https://github.com/mapbox/node-fontnik). The .pbf need to be located inside the `public` directory.

## More information

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## License

HOS-Metadata-Visualisation is open source software [licensed as MIT](https://github.com/subhh/HOS-Metadata-Visualisation/blob/master/LICENSE).