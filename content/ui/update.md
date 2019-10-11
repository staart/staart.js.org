# Updating Staart UI

You should make sure you're always on the most recent version of Staart UI to stay on top of latest security features. To update Staart UI to the most recent version, use `git pull`:

```bash
git pull git@github.com:o15y/staart-ui
```

If you're using git with HTTP instead of SSH, use this instead:

```bash
git pull https://github.com/o15y/staart-ui
```

Then, you should resolve your merge request (like the package name), and you should be good to go.

## First time updating Staart UI

If you're using Staart UI from source or GitHub's "Use this template" feature, you will not have the git history of this project. To update Staart UI, you'll have to use the `--allow-unrelated-histories` flag the first time.

```bash
git pull git@github.com:o15y/staart-ui --allow-unrelated-histories
```
