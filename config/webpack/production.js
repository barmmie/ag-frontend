const environment = require('./environment')
const webpack = require('webpack')

environment.config.set('devtool', 'source-map')

environment.plugins.prepend(
  'DefinePlugin',
   new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('PROD'),
      },
    }),
)

environment.plugins.prepend( 
    'HotModuleReplacementPlugin', 
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  )

module.exports = environment.toWebpackConfig()
