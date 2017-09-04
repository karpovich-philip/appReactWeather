const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//3 обязательных свойства - это entry, output, extensions

module.exports = {
  entry: './src/App.jsx',

  output: {
    filename: 'weather.min.js',
    path: __dirname,
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'weather.min.css',
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: [/node_modules/],
        include: __dirname,
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          'react-hot-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react']
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        use: "url-loader"
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  },

  node: {
    fs: "empty"
  },

  //devtool: 'source-map',

  resolve: {
    //root: __dirname,
    //alias: {
    //  Main: 'src/components/Main.jsx'
    //},
    extensions: ['.js', ".ts", ".tsx", '.jsx', '.json', '*']
  }
};