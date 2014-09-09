var http = require('http')
  , url = require('url')
  , fetch = require('./lib')

http.createServer(function (req, res) {
  var ticker = url.parse(req.url, true).query.ticker
  if (!ticker) {
    res.writeHead(500)
    res.end('Missing ticker')
  }
  fetch(ticker, function (err, result) {
    if (err) {
      res.writeHead(500)
      return res.end(err.message)
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(result))
  })
}).listen(process.env.PORT || 9000, 'localhost')
