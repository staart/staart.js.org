# Creating Admin and Reseller Users

## Create Super Admin Users

Users with the super admin role can see a dashboard where they can see all server logs, teams, and users. They can make changes to all of these.

Before inviting any employees consider setting up forceTwoFactor, onlyAllowDomain and ipRestrictions for your 'master' organization. 

Invite the new user to your organization. Once the user has created their account you can escalate them to admin permissions in SQL.

Get the ID of the user you want to escalate the permission for. You may decide to double check you have the right ID by verifying createdAt, name etc. Finally use the below SQL (substituting ID with the user ID) to set the role for this user to Super Admin.

```sql
update users SET role = '3' WHERE id = 'xx';

```
## Create Reseller Users

Reseller functionality is WIP. 

Once the user has created their account you can escalate them to Reseller permissions in SQL.

Get the ID of the user you want to escalate the permission for. You may decide to double check you have the right ID by verifying createdAt, name etc. Finally use the below SQL (substituting ID with the user ID) to set the role for this user to Reseller.

```sql
update users SET role = '2' WHERE id = 'xx';

```
