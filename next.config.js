const withPlugins = require('next-compose-plugins');
const sass = require("@zeit/next-sass")
const css = require("@zeit/next-css")

const nextConfig = {
  webpack: function (config) {
  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    use: {
    loader: 'url-loader',
      options: {
        limit: 100000,
        name: '[name].[ext]'
      }
    }
  })
  return config
},
// env: {
//  admintoken: process.env.ADMIN_TOKKEN,
//  apiurl:process.env.API_URL
// }

}

module.exports = withPlugins([
  [sass, {
     cssModules: false
   }],
  [css]

], nextConfig);
