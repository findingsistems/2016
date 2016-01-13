import webpack from 'webpack'
import config from './config'

const babelLoaderQuery = {
  stage: 0,
  optional: [
    'runtime',
  ],
  plugins: ['react-transform'],
  extra: {
    'react-transform': {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module'],
      }],
    },
  },
}

export default {
  entry: {
    'main': [
      'webpack-hot-middleware/client',
      config.entry,
    ],
  },
  devtool: 'inline-source-map',
  cache: true,
  output: {
    path: config.outputPath,
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: babelLoaderQuery,
      },
      {test: /\.json/, loader: 'json'},
      {test: /\.css$/, loaders: ['style', 'css']},
    ],
  },
  resolve: {
    alias: {
      'scalex-ui': config.aliasScalexUi,
      theme: config.theme,
      jssStyle: config.jssStyle,
    },
    extensions: ['', '.json', '.js'],
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
