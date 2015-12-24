import QuantumStylePlugin from 'quantum/lib/webpack-plugin'
import webpack from 'webpack'
import config from './config'

const babelLoaderQuery = {
  stage: 0,
  optional: [
    'runtime'
  ],
  plugins: ['react-transform'],
  extra: {
    'react-transform': {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }]
    }
  }
}

export default {
  entry: {
    'main': [
      'webpack-hot-middleware/client',
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [QuantumStylePlugin.loader(), 'babel?' + JSON.stringify(babelLoaderQuery)]
      },
      {test: /\.json/, loader: 'json'},
      {test: /\.css$/, loaders: ['style', 'css']}
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
