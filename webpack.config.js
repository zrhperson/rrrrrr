var path = require('path')
var fs = require('fs')

var rimraf = require('rimraf')
var webpack = require('webpack')
var LiveReloadPlugin = require('webpack-livereload-plugin')
var beautify = require('code-beautify')
var postCssFor = require('postcss-for')
var autoprefixer = require('autoprefixer')

var isProduction = process.argv.slice(2)[0] === '-p'

rimraf.sync(__dirname + '/build')

var config = {
  entry: {
    app: './src/index'
  },
  devtool: "#source-map",
  output: {
    path: __dirname + '/build',
    filename: '[name]' + (isProduction ? '.[hash]' : '') + '.js',
    chunkFilename: '[id]' + (isProduction ? '.[hash]' : '') + '.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ["es2015", "stage-0", "react"],
              plugins: ['transform-runtime']
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)(\?v=[\d\.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'files/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              souceMap: 'inline',
              plugins: () => {
                return [postCssFor, autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ]
                })];
              }
            }
          }
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => {
                return [postCssFor, autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ]
                })];
              }
            }
          }
        ]
      },
      {
        test: /.md$/,
        use: [
          'html-loader',
          {
            loader: 'markdown-loader',
            options: {
              highlight: (code, lang) => beautify(code, lang)
            }
          }
        ]
      },
      {
        test: /.doc$/,
        use: [
          'babel-loader',
          'doc-loader'
        ]
      }
    ]
  },
  resolveLoader: {
    alias: {
      'doc-loader': path.join(__dirname, './src/loaders/doc')
    }
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'bocomui': '@bocom/bocomui/lib',
      'public': path.resolve(__dirname, './src/public')
    }
  },
  plugins: []
}

if (isProduction) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: config.devtool && (config.devtool.indexOf("sourcemap") >= 0 || config.devtool.indexOf("source-map") >= 0),
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }))
} else {
  config.plugins.push(new LiveReloadPlugin({
    appendScriptTag: true
  }))
}

config.plugins.push(function () {
  this.plugin('done', function (statsData) {
    var stats = statsData.toJson()
    var html = fs.readFileSync(path.join(__dirname, '/src/index.html'), 'utf8')
    var distPath = config.output.publicPath + 'app.' + (isProduction ? stats.hash + '.' : '') + 'js'
    html = html.replace(/(<script src=").*?(")/, '$1' + distPath + '$2')
    fs.writeFileSync(path.join(__dirname, '/src/index.html'), html)
  })
})

module.exports = config
