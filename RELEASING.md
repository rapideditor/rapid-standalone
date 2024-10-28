## **rapid-standalone** Release Checklist


### Update `main` branch

This project is a version of Rapid with all depdendencies included.
We want the version of `rapid-standalone` to just match the versions in `rapid`.

```bash
# First, update `package.json` - make the package version match Rapid's version

# Store in environment variable for later (replace below with the actual version)
export VERSION=rapid-standalone-A.B.C-pre.D

npm install
npm run build
git add . && git commit -m  "$VERSION"
git tag "$VERSION"
git push origin "$VERSION"
npm publish

```

Set as latest release on GitHub:
- Because this project is just a copy of Rapid, we can just copy Rapid's changelog link here.
- Open https://github.com/facebook/Rapid/blob/main/CHANGELOG.md and copy the URL to the new release
- Open https://github.com/rapideditor/rapid-standalone/tags and pick the new tag you just pushed
- There should be a link like "create a release from the tag", click that, and paste in the link to the changelog.
