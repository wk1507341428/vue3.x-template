// babel.config.js
module.exports = {
    presets: [
      ['@vue/app', {
        polyfills: [
          'es6.promise',
          'es6.symbol',
          'es6.string.includes',
          'es7.array.includes'
        ]
      }]
    ]
}