## E-commerce website using react redux and firebase
Live at: [https://react-ecom-clothing.herokuapp.com/shop](https://react-ecom-clothing.herokuapp.com/shop)

## How to deploy react app to Heroku

1. Install heroku-cli `sudo snap install --classic heroku`
2. Login in to heroku `heroku login`
3. Create new project 
   1. `heroku create ecom-react --buildpack https://github.com/mars/create-react-app-buildpack.git`
4. Push to heroku `git push heroku master`
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

