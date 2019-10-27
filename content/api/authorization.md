# Authorization

Staart has built-in authorization checks, so you can test whether a user has access to a resource or action. The `can` function makes it very easy:

```ts
import { can } from "../helpers/authorization";
import { Request, Response } from "express";
import { deleteOrganization } from "../crud/organization";
import { OrgScopes } from "../interfaces/enum"

const deleteTeamIfAllowed = async (req: Request, res: Response) => {
  const orgId = req.body.id;
  if (await can(userId, OrgScopes.DELETE_ORG, "organization", orgId)) {
    await deleteOrganization(orgId);
    return res.status(204);
  }
  throw new Error(INSUFFICIENT_PERMISSION);
}
```

Just like you would read in English, the line corresponds to "if user can delete organization" and results in a boolean.

The `can` function takes `OrgScopes` (for organizations) or `UserScopes` (for users) as the second parameter, and a user object or API key object as the first parameter. These scopes are defined in the `enum` interface file.
