# Update: [Mergify now has a Simulator](https://medium.com/mergify/whats-new-in-mergify-2019q3-edition-3bea07b481f5#64ab) and copied over this UI into their docs. Therefore this Repository will no longer be maintained.

# [Mergify.io](https://mergify.io) config validator <img height="100" src="./src/img/icon.png" align="right" />

[![Build Status](https://travis-ci.com/adrianjost/mergify-verify.svg?branch=master)](https://travis-ci.com/adrianjost/mergify-verify)
[![Demo Badge](https://img.shields.io/badge/Demo-Deployed-brightgreen.svg)](https://mergify.adrianjost.dev/)
[![Greenkeeper badge](https://badges.greenkeeper.io/adrianjost/mergify-verify.svg)](https://greenkeeper.io/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7da77c6fbbca436cafb20b7d0065160b)](https://app.codacy.com/app/adrianjost/mergify-verify?utm_source=github.com&utm_medium=referral&utm_content=adrianjost/mergify-verify&utm_campaign=Badge_Grade_Dashboard)
[![Code Volume](https://api.gitential.com/accounts/1294/projects/1711/badges/code-volume.svg)](https://gitential.com/accounts/1294/projects/1711/share?uuid=7ef433a1-51c4-4570-9ef9-7bc393e5d3e3&utm_source=shield&utm_medium=shield&utm_campaign=1711)
[![Coding Hours](https://api.gitential.com/accounts/1294/projects/1711/badges/coding-hours.svg)](https://gitential.com/accounts/1294/projects/1711/share?uuid=7ef433a1-51c4-4570-9ef9-7bc393e5d3e3&utm_source=shield&utm_medium=shield&utm_campaign=1711)

> Verify your mergify.io config with ease.

## About

Mergify is an aweseome GitHub-Bot! But checking your config can be a pain, when using Windows.
This Projects abstracts away the curl command from the [official documentation](https://doc.mergify.io/configuration.html#validation) and replaces it with a simple, intuitive Website.

[![image](./src/img/screenshot.png)](https://mergify.adrianjost.dev)

## Development

```bash
# install dependencies
npm i

# open with live server (http://localhost:8080)
npm run dev

# build for production
npm run build

# open test runner (cypress)
npm run cy:open
```
