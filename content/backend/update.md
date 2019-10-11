# Updating Staart

You should make sure you're always on the most recent version of Staart to stay on top of latest security features. To update Staart to the most recent version, use `git pull`:

```bash
git pull git@github.com:o15y/staart
```

If you're using git with HTTP instead of SSH, use this instead:

```bash
git pull https://github.com/o15y/staart
```

Then, you should resolve your merge request (like the package name), and you should be good to go.

## First time updating Staart

If you're using Staart from source or GitHub's "Use this template" feature, you will not have the git history of this project. To update Staart, you'll have to use the `--allow-unrelated-histories` flag the first time.

```bash
git pull git@github.com:o15y/staart --allow-unrelated-histories
```

## Update script

You can also use the built-in update script to update Staart:

```bash
node setup/update.js
```
