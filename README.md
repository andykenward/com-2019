![Actions Status](https://github.com/andykenward/andykenward.com/workflows/Check%20Pull%20Request/badge.svg)

## Requirements

- node `^10.19.0`
- npm `^6.13.4`

### Node

Recommend using a node version manager tool.

- [NVM](https://github.com/creationix/nvm#install-script)

Once NVM is installed go to the repos root directory

```
$ nvm use
```

### Installation

```
$ cp .env.example .env
```

Update the `.env` `ENDPOINT` to the [GraphCMS](https://graphcms.com) GraphQL endpoint.

```
$ npm i
```

There is a `postinstall` cli which downloads the GraphQL schema and generates TypeScripts typings.

### Development

In seperate terminal windows run.
```
$ npm run dev
```

```
$ npm run codegen:watch
```

### Serve static version

```
$ npm run build; npm run export; cd out && npx serve -p 3000
```
## Environment Variables

Don't forget to set these up on the CI if changing environments or API.

**There are defaults used in the codebase if not set in the environment**

```
ENDPOINT=your-graphql-endpoint-url
SCHEMA_PATH=path-to-graphql-schema-json-or-graphql
```

For `now` deployment you need to add secrets to your account via now-cli.

**FYI `now` secrets keys are case sensitive, REACT_APP_API will be react_app_api when using on now-cli**
[using-environment-variables-and-secrets](https://zeit.co/docs/v2/build-step#using-environment-variables-and-secrets)

```
npx now secrets add andykenward_com_schema_path https://graphql.endpoint
npx now secrets add ci true
```
