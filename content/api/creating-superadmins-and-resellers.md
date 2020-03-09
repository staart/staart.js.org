# Creating Admin and Reseller Users

## Create Super Admin Users

Users with the super admin role can see a dashboard where they can see all server logs, teams, and users. They can make changes to all of these.

Before inviting any employees consider setting up forceTwoFactor, onlyAllowDomain and ipRestrictions for your 'master' organization. 

Invite the user to your organization. Once the user has created thier account you can escalate them to admin permissions in SQL.

```bash
select * from users WHERE primaryEmail = 'employee@example.com';
```

Check that this is indeed the user you wish to escalate by verifying createdAt, name etc. Once you have verified this grab the user ID which you will use to update the role

```bash
update users SET role = '3' WHERE id = 'xx';

```
## Create Reseller Users

Reseller functionality is WIP. 

Once the user has created thier account you can escalate them to Reseller permissions in SQL.

```bash
select * from users WHERE primaryEmail = 'employee@example.com';
```

Check that this is indeed the user you wish to escalate by verifying createdAt, name etc. Once you have verified this grab the user ID which you will use to update the role.

```bash
update users SET role = '2' WHERE id = 'xx';

```
