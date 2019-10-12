# Creating a controller

Setting up your first controller is as simple as creating a new file in the `./src/controllers` folder. For example, if you want your endpoint to be http://localhost/api/hello, your controller name is `api` and file name is `api.ts`.

```ts
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Get, Controller, ClassWrapper, Middleware } from "@overnightjs/core";
import { authHandler, validator } from "../helpers/middleware";
import { RESOURCE_NOT_FOUND } from "@staart/errors";
import Joi from "@hapi/joi";

@Controller("api")
@ClassWrapper(asyncHandler)
export class ApiController {
  @Get("hello")
  @Middleware(
    validator(
      { name: Joi.string().min(3).required() },
      "query"
    )
  )
  async sayHello(req: Request, res: Response) {
    const name = req.query.name;
    if (name === "Anand")
      return res.json({ text: `Hello, ${name}!`; });
    throw new Error(RESOURCE_NOT_FOUND);
  }
}
```

The above code 20 lines of code with create a new endpoint which can be accessed at http://localhost/api/hello?name=Anand, which will respond with a JSON object with the text "Hello, Anand!".

Staart code is easily understandable. You create a new controller, `api`, which means all routes in this class will have the prefix `/api`. Then, you create an HTTP `GET` method `hello` and use our built-in validator to say that the query parameter name must be a string of at least 3 characters.

With the `asyncHandler`, you can use async functions and Staart will handle errors for you. In this case, if the provided name is Anand, your function returns a JSON response "Hello, Anand!" and otherwise sends an error 404.
