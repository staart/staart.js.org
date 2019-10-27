# Throwing errors

Staart has built-in error handling, so your Node.js process won't crash even if you throw errors in your controllers or helper functions. You can either throw your own error, or use the `@staart/errors` package for HTTP errors.

For example, if you want to throw a 404 Subscription Not Found error for a team, you can like this:

```ts
import { SUBSCRIPTION_NOT_FOUND } from "@staart/errors";

const findSubscription = async () => {
  // Check if subscription is found or not
  throw new Error(SUBSCRIPTION_NOT_FOUND);
}
```

## Custom errors

If you want to throw your own error, it's as simple as `CODE/MESSAGE`:

```ts
throw new Error("401/invalid-token");
```

In this case, an HTTP 401 Unauthorized error will be responsed with, along with the message "invalid-token". The HTTP response will look like this:

```json
{
  "code": 401,
  "message": "invalid-token"
}
```
