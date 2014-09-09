var historical = require('./historical')
  , current = require('./current')

module.exports = function (ticker, next) {
  if (!ticker) {
    return next(new Error('Define a ticker'))
  }

  historical(ticker, function (err, result) {
    current(ticker, function (err, value) {
      result.value = value
      result.formatted = '$' + value.toFixed(2)
      return next(null, result)
    })
  })
}
