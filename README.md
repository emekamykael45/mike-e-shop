# Mike e-shop using Xendit Payment API

Used ReactJS to build this project https://mikeshop.vercel.app/.

![alt text](https://res.cloudinary.com/emekamykael45/image/upload/v1613178019/mike-e-shop/mike-store_vef7i1.png)

## Before you Use/Explore the Application

Install `Allow CORS` extension on your browser from the [Chrome Web Store here](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) and ensure to toggle it `ON`.
![alt text](https://res.cloudinary.com/emekamykael45/image/upload/v1613178407/mike-e-shop/Screenshot_2021-02-13_at_2.06.09_AM_l6mgis.png)

## Documentation

For the documentation and details of this project, check [Mike e-shop Documentation](https://res.cloudinary.com/emekamykael45/image/upload/v1613179858/mike-e-shop/MIKE_E-SHOP_USING_XENDIT_PAYMENT_API_2_t9mgdm.pdf).

## Before you Start

1. Generate secret API key
2. Obtain your secret API key from your `Xendit Dashboard > Settings > API keys`.
3. Ensure to select `WRITE` for `Money-in products` category. You can select `NONE` for the rest.
4. Encode the value above into `Base64` [here](https://www.base64encode.org/), following this format (with colon) -
   `xnd_my_own_development_secret_key:`
5. Create a `.env` file in your root directory.
6. Add a `REACT_APP_XENDIT_SECRET_KEY`, and assign it the value of your Base64 `secret key`. It should look like this:
   `REACT_APP_XENDIT_SECRET_KEY=your_secret_key_here`.
7. Install `Allow CORS` extension on your browser from the [Chrome Web Store](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) and ensure to toggle it `ON`.

## Installation

In the project directory, you can run: `npm install` to install all packages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
