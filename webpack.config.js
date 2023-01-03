const path = require('path');

module.exports = {
  // entry: tells Webpack where our application starts and where to start bundling our files
  entry: './src/index.js',
  mode: 'development',
  // The module object helps define how your exported javascript modules are transformed and which ones are included according to the given array of rules.
  module: {
    rules: [
      /**
       * Our first rule is all about transforming our ES6 and JSX syntax. The test and exclude properties are conditions to match file against. In this case, it’ll match anything outside of the node_modules and bower_components directories. Since we’ll be transforming our .js and .jsx files as well, we’ll need to direct Webpack to use Babel. Finally, we specify that we want to use the env preset in options.
       */
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      /**
       * The next rule is for processing CSS. Since we’re not pre-or-post-processing our CSS, we just need to make sure to add style-loader and css-loader to the use property. css-loader requires style-loader in order to work. loader is a shorthand for the use property, when only one loader is being utilized.
       */
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // The resolve property allows us to specify which extensions Webpack will resolve — this allows us to import modules without needing to add their extensions.
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    host: 'localhost',
    port: 3000,
    open: true,
    // publicPath: 'http://localhost:3000/dist/',
    // hot: 'only'
    watchFiles: {
      paths: ['src/*'],
      options: {
        usePolling: false
      }
    }
  }
};
