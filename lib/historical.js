var request = require('request')
  , split = require('split')
  , reduce = require('stream-reduce')
  , yahoooooooooooo = 'http://ichart.yahoo.com/table.csv'

module.exports = function (ticker, next) {
  var from = new Date
    , result = {
      start: Infinity,
      end: -Infinity
    }

  from.setMonth(from.getMonth() - 1)

  request(yahoooooooooooo + '?s=' + ticker + '&a=' + from.getMonth() + '&b=' + from.getDate() + '&c=' + from.getFullYear())
    .pipe(split())
    .pipe(reduce(function (acc, data) {
      var row = data.split(',').map(Number)
      if (row[2]) {
        result.end = Math.max(result.end, row[2])
      }
      if (row[3]) {
        result.start = Math.min(result.start, row[3])
      }
      return result
    }, result)).on('data', function (d) {
      next(null, d)
    })
}
