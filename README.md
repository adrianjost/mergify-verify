# Mergify.io config validator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7da77c6fbbca436cafb20b7d0065160b)](https://app.codacy.com/app/adrianjost/mergify-verify?utm_source=github.com&utm_medium=referral&utm_content=adrianjost/mergify-verify&utm_campaign=Badge_Grade_Dashboard)
[![Demo Badge](https://img.shields.io/badge/Demo-Deployed-brightgreen.svg)](https://mergify.adrianjost.dev/)


## About

Mergify is an aweseome GitHub-Bot! But checking your config can be a pain, when using Windows.
This Projects abstracts away the curl command from the [official documentation](https://doc.mergify.io/configuration.html#validation) and replaces it with a simple, intuitive Website.

[![image](https://user-images.githubusercontent.com/22987140/56078575-03dc2400-5dea-11e9-871b-e603e6c54541.png)](https://mergify.adrianjost.dev)

## Development

```bash
# install dependencies
yarn install

# open with live server (http://localhost:8080)
yarn dev

# build for production
yarn build
```
