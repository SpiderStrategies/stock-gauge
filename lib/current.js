var request = require('request')
  , yahoooooooooooo = 'http://download.finance.yahoo.com/d/quotes.csv'

module.exports = function (ticker, next) {
  request(yahoooooooooooo + '?s=' + ticker + '&f=l1', function (err, response, body) {
    if (err) {
      return next(err)
    }
    return next(null, parseFloat(body))
  })
}
