# Graasp App Template Typescript

This repository hosts a template for a Graasp app using Typescript, React, MUI and the Graasp API.

## Installation

### Local Env Files

Setup the env files with at least:

```sh
# id of the app (generate one yourself)
REACT_APP_GRAASP_APP_ID=25c25f3f-ce4a-4f08-a7d5-61eb5be8778c

# whether to use the mock api
# (fakes the db so you don't need the graasp backend running)
REACT_APP_MOCK_API=true

# the url of the api backend
# when using the mock api this can be any url
REACT_APP_API_HOST=http://localhost:3636

# domain of the app
REACT_APP_GRAASP_DOMAIN=localhost

# port to use when running the app
PORT=3005
```

If you wish to test the app with the full graasp backend:

```sh
PORT=3008
CYPRESS_BASE_URL=http://localhost:3008

# do not use fake api
REACT_APP_MOCK_API=false

REACT_APP_GRAASP_APP_ID=147e89b5-7760-48b3-81ef-10c4a2dcc786

# this is the url of the graasp api listening on port 3000 (default)
REACT_APP_API_HOST=http://localhost:3000
REACT_APP_GRAASP_DOMAIN=localhost

NODE_ENV=production
```

### Sentry

Add the `SENTRY_DSN` secret to the repo secrets to track errors using Sentry
TODO: add link to sentry documentation.

## Running the app

## Documentation

### How to bootstrap your app and set every tool you need

Please have a look at the documentation to [start your app and setup all necessary tools](docs/SETUP.md).
