# Response headers

Staart sends some response headers which Express.js doesn't by default. These are for protections and analytics. This is an example of the headers in a response:

```txt
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-DNS-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-RateLimit-Limit: 200
X-RateLimit-Limit-Type: public
X-RateLimit-Remaining: 186
X-RateLimit-Reset: 1559552198
X-Response-Time: 1.957ms
X-XSS-Protection: 1; mode=block
```

## Headers

### `Strict-Transport-Security`

This header is used to be eligible for the HTTP Strict Transport Security (HSTS) preload list. It tells the browser to always use HTTPS. The value max-age tells the browser to remember to use HTTPS for the amount of time. The includeSubDomains value tell the browser to include all subdomains as well.

### `X-Content-Type-Options`

This header helps prevent browsers from trying to guess ("sniff") the MIME type, which can have security implications. The value is nosniff.

More info: https://helmetjs.github.io/docs/dont-sniff-mimetype/

### `X-DNS-Prefetch-Control`

The off value in this header disable browsers' DNS prefetching.

More info: https://helmetjs.github.io/docs/dns-prefetch-control/

### `X-Download-Options`

This header with the noopen value prevents Internet Explorer from executing downloads in your site's context. By default, old versions of Internet Explorer will allow you to open those HTML files in the context of your site, which means that an untrusted HTML page could start doing bad things in the context of your pages.

More info: https://helmetjs.github.io/docs/ienoopen/

### `X-Frame-Options`

The SAMEORIGIN value in this header mitigates clickjacking attacks. Clickjacking can be used to get you to click anything you don't want to.

More info: https://helmetjs.github.io/docs/frameguard/

### `X-Response-Time`

This header tells the client how long the server took to respond to this request. These metrics can be used for analytics or debugging.

### `X-XSS-Protection`

This header prevents reflected XSS attacks. This header provides a quick win and basic protection, but this header does not save you from XSS attacks. The value is 1; mode=block.

More info: https://helmetjs.github.io/docs/xss-filter/

### `X-RateLimit-Limit-Type`

This header tells you the type of rate limiting applied to you. This can be public if you are unauthenticated or api-key if you use the X-Api-Key header in your request.

### `X-RateLimit-Limit`

This header tells you the maximum amount of requests you can do in a period of time. By default, this is 200 requests per minute from an IP address.

### `X-RateLimit-Remaining`

This header tells you the number of requests you have remaining. In this example, you have 186 out of 200 requests remaining this minute.

### `X-RateLimit-Reset`

This headers tells you when your rate limit will be reset. After that, your quota will be back to 200 requests. The time is given as a UNIX timestamp.
