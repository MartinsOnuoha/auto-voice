# AutoVoice 🧾

AutoVoice is a Jamstack application that let's users customize invoices and download or automate (coming soon) them in a click...or two.

## Checkout AutoVoice

## Project Tools 🛠

Autovoice is built with:

- [Vue.js](https://vuejs.org/) - Javascript SPA framework
- [Quasar](https://quasar.dev/) - UI library written in Vue
- [GraphQL](https://graphql.org/) - Query language
- [Apollo](https://www.apollographql.com/) - GraphQL Client
- [Postgres](https://www.postgresql.org/) - Database provisioned on a heroku instance
- [Cypress](https://cypress.io/) - E2E testing framework

## Running the Application Locally

To run Autovoice locally, you would need to have [node.js](https://nodejs.org/en/download/) and **npm** setup properly on your machine.

> ℹ️ NPM is the official package manager for Node.js, and comes prepackaged when Node.js is installed.
> Alternatively, you can [install yarn](https://yarnpkg.com/) as a package manager for node.

### Install All Dependencies

First install all necessary dependencies

Using NPM

```bash
npm install
```

Using Yarn

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

The application should now be running on `http://localhost:8080/`. Visit the URL to test it yourself.

### Lint the files

```bash
yarn run lint
```

## Run Integration Tests

AutoVoice has Cypress integrated for E2E tests.

If you have the cypress application installed on your machine, you can run this command for the visual testing suite.

```bash
yarn run test:e2e
```

OR

```bash
npm run test:e2e
```

For CLI based report run:

```bash
yarn run test:e2e:ci
```

```bash
npm run test:e2e:ci
```
