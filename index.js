var historical = require('./lib/historical')
  , current = require('./lib/current')
  , ticker = process.argv[2]

if (!ticker) {
  throw new Error('Define a ticker')
}
historical(ticker, function (err, result) {
  current(ticker, function (err, value) {
    result.value = value
    console.log(result)
  })
})
