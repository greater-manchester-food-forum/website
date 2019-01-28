# Greater Manchester Food Forum (GMFF) - Technical Documentation 

This application was scaffolded using 'Create React App': https://github.com/facebook/create-react-app

Any questions please contact: 
* Reece Johnson - [reece.johnson@thoughtworks.com](mailto:reece.johnson@thoughtworks.com) 
* Flinn Burgess - [f.burgess@thoughtworks.com](mailto:f.burgess@thoughtworks.com) 

## General Information
* Tech Stack
  >* [npm](https://www.npmjs.com) - Package Manager
  >* [React JS](https://reactjs.org/) - JS Framework
  >* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind) - CSS Framework
* When running locally, changes to JS and CSS files are automatically recognised and hot-reloaded straight into the browser
* JS linting is configured through the [.eslintrc](.eslintrc) file 
* There is no server side to this application

## Run app locally 
To run the app locally, in development mode, run these commands whilst in the project root directory:

```npm install```

```npm run start```

*You’ll need to have Node 8.10.0 or later on your local development machine.*

## Create a Production Build
Creating a production build will minify all of the required files and place them into the 'build' folder:

```npm run predeploy```

## Styling 
The site uses a CSS utility framework called [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind) which can be customised through the [tailwind.config.js](tailwind.config.js) file in the root directory. 

Changes to CSS files are automatically picked up and applied to the site through hot-reloading. 

The tailwind config file generates the [src/index.css](src/index.css) file which will get overwritten every time a change is detected (so don't edit this manually). 

There is comprehensive documentation available on their site. 

Alongside this, there are also some styles applied through the [src/styles/index.css](src/index.css) file, which is where any styles that aren't easily applicable with Tailwind should be placed.