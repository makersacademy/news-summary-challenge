const path = require("path");
const dotenv = require('dotenv');
const webpack = require('webpack'); 

dotenv.config({path: './.env'})

module.exports = {
	mode: 'development', //or production
	entry:{
		main: path.resolve(__dirname, 'app.js')
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
	]
}