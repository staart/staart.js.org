# Updating Staart Native

You should make sure you're always on the most recent version of Staart Native to stay on top of latest security features. To update Staart Native to the most recent version, use `git pull`:

```bash
git pull git@github.com:o15y/staart-native
```

If you're using git with HTTP instead of SSH, use this instead:

```bash
git pull https://github.com/o15y/staart-native
```

Then, you should resolve your merge request (like the package name), and you should be good to go.

## First time updating Staart Native

If you're using Staart Native from source or GitHub's "Use this template" feature, you will not have the git history of this project. To update Staart Native, you'll have to use the `--allow-unrelated-histories` flag the first time.

```bash
git pull git@github.com:o15y/staart-native --allow-unrelated-histories
```
