In the project directory, you can run:

```
npm install
# or
yarn install
```

### START APP BY RUNNING BELOW COMMAND

```
npm start
# or
yarn start
```

### TO USE DATABASE SERVER

keep the app running and open another terminal and run below command:

```
npm server
# or
yarn server
```

BABEL
Go ahead and install --save-dev
@babel/core
@babel/cli
@babel/preset-env
@babel/preset-react.

babel-core: is the main babel package — We need this for babel to do any transformations on our code.

babel-cli: allows you to compile files from the command line.

preset-react and preset-env: are both presets that transform specific flavors of code — in this case, the env preset allows us to transform ES6+ into more traditional javascript and the react preset does the same, but with JSX instead.

WEBPACK
Go ahead and install --save-dev
webpack
webpack-cli
webpack-dev-server
webpack-merge
babel-loader
css-loader
style-loader

Webpack uses loaders to process different types of files for bundling. It also works easily alongside the development server that we’re going to use to serve our React project in development and reload browser pages on (saved) changes to our React components. In order to utilize any of this though, we’ll need to configure Webpack to use our loaders and prepare the dev server.

REACT
react
react-dom

REDUX
@reduxjs/toolkit
react-redux

store.js > createStore
tasksSlice.js > createSlice

USE OF REDUX TOOLKIT METHODS: createStore, createSlice, createAsyncThunk
USE OF REACT REDUX HOOKS: useSelector, useDispatch
USE OF REACT HOOKS: useEffect, useState, useCallback
