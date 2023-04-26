# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)










raft labs task flow ->
how to approach this project.

First, you need to set up your development environment with React and TypeScript. You can use create-react-app to quickly set up a new project with TypeScript. Once you have your project set up, you can start building the different components of your social media app.

For user registration and login, you can use a service like Firebase Authentication to handle user authentication and secure password storage.

For the news feed, you can use Firebase Realtime Database or Firestore to store and retrieve posts from the users that the logged-in user is following, sorted by date. You can use a debounce function to limit the number of requests to the database and improve performance.

To create new posts, you can use Firebase Storage to store images and other media files. You can also use the Firebase Cloud Functions to tag other users in the posts.

For liking and commenting on posts, you can use Firebase Realtime Database or Firestore to store and retrieve likes and comments for each post.

To display user profiles, you can use Firebase Firestore to store user information and retrieve the user's posts, sorted by date.

To follow and unfollow other users, you can use Firebase Firestore to store the user's following list and retrieve the posts from the users that the user is following.

For data structures and algorithms, you can use a variety of tools to efficiently manage and manipulate data. For example, you can use arrays and objects to store and retrieve data, or use libraries like Lodash to perform more complex operations.

To build a polished and user-friendly UI, you can use a React component library like Ant, Atlaskit, or Fluent UI to quickly create reusable components for your app. You can also use Tailwind CSS to style the app and make it responsive.

Once you have built your app, you can host it on Vercel, Netlify, or similar platforms and share the links to your git repository and walkthrough video with your reviewer. In the video, make sure to demonstrate all the features of your app and explain the code you have written. Good luck with your project!