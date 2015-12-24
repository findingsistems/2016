import QuantumStylePlugin from 'quantum/lib/webpack-plugin'
import webpack from 'webpack'
import config from './config'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: {
    'main': [
      config.entry
    ]
  },
  cache: true,
  output: {
    path: config.outputPath,
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: [QuantumStylePlugin.loader(), 'babel']},
      {test: /\.json/, loader: 'json'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
    ]
  },
  resolve: {
    alias: {
      'scalex-ui': config.aliasScalexUi
    },
    extensions: ['', '.json', '.js']
  },
  quantum: {
    alias: {
      'ScalexUI': config.aliasScalexUi,
      'ScalexUIDocs': config.aliasScalexUiDocs
    },
    theme: config.theme
  },
  plugins: [
    new QuantumStylePlugin(),
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
