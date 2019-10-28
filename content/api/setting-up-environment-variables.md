# Setting up environment variables

The easiest way to set up your environment variables is to rename the `.env.example` file to `.env` and then add the required configuration. This article takes you through the **required** key-value pairs.

## Port

The first and most important is the port you want the Staart backend process to run on. On production, this is usually `80`. Locally, it can be something like `3000` or `8080`.

```env
PORT = 8080
```

In the above example, your process will run on http://localhost:8080.

## Base URLs

Base URLs are used for links in emails, redirects, etc. In this guide, we're assuming you're running both the Staart backend and the Staart UI frontend project.

```env
BASE_URL = "http://localhost:8080" # This server's full URL
FRONTEND_URL = "http://localhost:3000" # URL for Staart UI
```

## Database connection

To connect with your SQL database, we require the host, port number, username/password combination, and database name.

If you're running multiple Staart backends or another app in the same database, you can also specify a `DB_TABLE_PREFIX`, and Staart will use the table `staart-users` instead of `users`, for example.

```env
DB_HOST = "localhost"
DB_PORT = 3306
DB_USERNAME = "root"
DB_PASSWORD = ""
DB_DATABASE = "database-name"
DB_TABLE_PREFIX = "staart-"
```

## Sending emails

We use Amazon Web Services (AWS)'s SES for sending emails. You should create an AWS account (they have a generous free tier) and create credentials for SES:

```env
SES_EMAIL = "staart@o15y.com"
SES_REGION = "eu-west-2"
SES_ACCESS = "aws-access-key-xxxxxxxxxx"
SES_SECRET = "aws-secret-key-xxxxxxxxxx"
```

In the above example, emails are sent from the `staart@o15y.com` email address, and SES is setup in the `eu-west-2` AWS region with the given credentials.

## Billing

We use Stripe for billing and subscription management. You'll need your Stripe secret key and a product ID (you can use your test key to make sure people aren't actually charged). We use the product ID to show the pricing plans of that product.

```env
STRIPE_SECRET_KEY = "stripe-test-api-key"
STRIPE_PRODUCT_ID = "stripe-product-id"
```

## Tracking & data

We use AWS's ElasticSearch service to track events, analytics, and server logs. Like the SES step, you can create credentials for the ElasticSearch service, enter an AWS region, and the host URL.

```env
AWS_ELASTIC_ACCESS_KEY = "aws-access-key-xxxxxxxxxx"
AWS_ELASTIC_SECRET_KEY = "aws-secret-key-xxxxxxxxxx"
AWS_ELASTIC_HOST = "https://name.region.es.amazonaws.com"
AWS_ELASTIC_REGION = "eu-west-2"
```

Alternately, you can also use a custom ElasticSearch service if you don't want to use AWS. In this case, you have to specify the host, log, and API version.

```env
ELASTIC_HOST = "localhost:9200"
ELASTIC_LOG = "trace"
ELASTIC_API_VERSION = "7.2"
```

You can specify an index prefix for server logs and events. Events keep track of security-related changes, such as when users log in or change their billing details. The logs will include the date after prefix as an index; for example, `staart-logs-` becomes `staart-logs-2019-10-11` if today is October 10, 2019.

```env
ELASTIC_LOGS_PREFIX = "staart-logs-"
ELASTIC_EVENTS_PREFIX = "staart-events-"
```

## Optional environment variables

### Encryption keys

It is highly recommended that you change the default encryption keys for signing JWTs, salts for hashes, etc. These should just be large (10+ character) strings, preferably a mix of letters, numbers, and special characters:

```env
JWT_SECRET = "staart"
HASH_IDS = "staart"
```

### Caching

Staart using both Redis-based and in-memory caches to optimize queries and requests. If you're running Redis using the default settings, you can ignore the `REDIS_URL` key, or populate it with your instance's URL if it's managed or on another port.

The TTL determines how long a result is cached in the memory; by default, this is 10 minutes. The check period tells Staart how often to check the cache and remove expired items (think of it like a `setInterval`). Organization details, API key scopes, etc., are stored in-memory for faster access, and Redis is primarily used to invalidate JWTs.

```env
REDIS_URL = "redis://127.0.0.1:6379"
CACHE_TTL = 600                  #     10 mins
CACHE_CHECK_PERIOD = 1000        #        1k s
```

### Rate limits

Rate limits help Staart mitigate some types of attacks. By default, users can do 60 requests/minute without an API key. With API key authentication, this is increased to 1,000 requests/minute. There is also a speed limit mechanism that delays requests by 100ms (in response time) per request if more than 500 are made in a minute.

Brute force prevention is used on authentication endpoints, where only 50 requests per 5 minutes are allowed, and users have to wait for (an increasing amount of) some time before they can make another request.

```env
## Brute force is used for auth endpoints
BRUTE_FREE_RETRIES = 50          # 50 requests
BRUTE_LIFETIME = 300000          #   in 5 mins

## Public limits
PUBLIC_RATE_LIMIT_MAX = 60       # 60 requests
PUBLIC_RATE_LIMIT_TIME = 60000   #    in 1 min
SPEED_LIMIT_COUNT = 500         # 1k requests
SPEED_LIMIT_TIME = 600000        #    in 1 min
SPEED_LIMIT_DELAY = 100          # delay 100ms

## Limits when using an API key
RATE_LIMIT_MAX = 1000            # 1k requests
RATE_LIMIT_TIME = 60000          #    in 1 min
```

### Expiry durations

JWTs are used for authentication and emails, and you can configure their expiry duration. Email verification links are valid for one week, password reset links for a day, and location approval links for 10 minutes.

In terms of authentication, a login session token is approved for 15 minutes and a refresh token is valid for 1 month.

When a user creates an API key, they can set an expiry duration. The maximum expiry date is 2299-12-31 (roughly 300 years in the future), something that Microsoft uses, equivalent to `10413685800000` in JS Unix timestamp.

```env
# JWT expiry durations
TOKEN_EXPIRY_EMAIL_VERIFICATION = "7d"
TOKEN_EXPIRY_PASSWORD_RESET = "1d"
TOKEN_EXPIRY_LOGIN = "15m"
TOKEN_EXPIRY_APPROVE_LOCATION = "10m"
TOKEN_EXPIRY_REFRESH = "30d"

TOKEN_EXPIRY_API_KEY_MAX = 10413685800000
```

### Other config

Settings like CORS and support for disposable emails can be set up too, along with a DSN for Sentry.

```env
# Remove CORS headers without API key
DISALLOW_OPEN_CORS = false

# Allow users with disposable emails to sign up
ALLOW_DISPOSABLE_EMAILS = false

# Error tracking using Sentry
SENTRY_DSN = "https://<key>@sentry.io/<project>"
```

### OAuth2 credentials

If you're setting up "Login with OAuth" services, you can set up your client and secret keys too.

```env
GOOGLE_CLIENT_ID = "google-oauth2-client-id"
GOOGLE_CLIENT_SECRET = "oauth2-client-secret"

GITHUB_CLIENT_ID = "github-oauth2-client-id"
GITHUB_CLIENT_SECRET = "oauth2-client-secret"

MICROSOFT_CLIENT_ID = "microsoft-oauth2-client-id"
MICROSOFT_CLIENT_SECRET = "oauth2-client-secret"
```
