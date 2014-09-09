stock-gauge
===========

Fetches monthly stock data for a gauge.

`npm start`

then

```
[koopa@dash-dev stock-gauge (master)]$ curl localhost:9010/?ticker=AAPL
{"start":94.84,"end":103.74,"value":99.64}
[koopa@dash-dev stock-gauge (master)]$ curl localhost:9010/?ticker=GOOG
{"start":560.88,"end":591.77,"value":583.4}
```

Throw it in a dash gauge. Marvel.
