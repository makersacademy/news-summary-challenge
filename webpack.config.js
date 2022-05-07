const webpack = require('webpack'); 

// replace accordingly './.env' with the path of your .env file 
require('dotenv').config({ path: './.env' }); 

const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'none',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
      API_KEY: process.env.API_KEY
    }),
  ]
};