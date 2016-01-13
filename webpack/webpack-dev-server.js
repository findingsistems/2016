/* eslint-disable no-console */
import Express from 'express'
import webpack from 'webpack'
import config from './config'
import devConfig from './dev.config'

const compiler = webpack(devConfig)

const serverOptions = {
  contentBase: config.staticFolder,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  publicPath: devConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true},
}

const app = new Express()
app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

app.use(require('serve-static')(config.staticFolder))
app.get('*', (req, res) => {
  res.sendFile(config.index)
})

app.listen(config.port, (err) => {
  err ?
    console.error(err) :
    console.info('Webpack development server listening on port %s', config.port)
})
