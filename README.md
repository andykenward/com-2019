![Actions Status](https://github.com/andykenward/andykenward.com/workflows/Check%20Pull%20Request/badge.svg)

## Requirements

- node `^14.15.1`
- npm `^6.14.8`

### Node

Recommend using a node version manager tool.

- [NVM](https://github.com/creationix/nvm#install-script)

Once NVM is installed go to the repos root directory

```
$ nvm use
```

### Installation

If you have a [Vercel](https://vercel.com) project already setup with your development environment variables you can download them using [`npx vercel env pull`](https://vercel.com/docs/v2/build-step#development-environment-variables)

Or you can manually set them up.

```
$ cp .env.example .env
```

Update the `.env` `API_TOKEN` & `API_URL` to the ones from your CMS in our case they are from [DatoCMS](https://datocms.com).

```
$ npm i
$ npm run schema
```

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
$ npm run build; npm start
```
## Environment Variables

Don't forget to set these up on your CI & hosting if changing environments or API.

```
SCHEMA_PATH="./generated/schema.json"
API_TOKEN=YOUR_GRAPHQL_API_TOKEN
API_URL=YOUR_GRAPHQL_ENDPOINT
```