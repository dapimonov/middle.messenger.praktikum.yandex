const colors = require('./src/config/colors')

module.exports = {
  plugins: [
    require('postcss-simple-vars')({
      variables: function () {
        return colors
      }
    }),
    require('postcss-normalize')({ forceImport: 'sanitize.css', allowDuplicates: false }),
  ]
}