# AutoVoice 🧾

AutoVoice is a Jamstack application that let's users customize invoices and download or automate (coming soon) them in a click...or two.

- [AutoVoice 🧾](#autovoice-)
  - [Checkout AutoVoice](#checkout-autovoice)
    - [See More](#see-more)
  - [Try it Out](#try-it-out)
  - [Project Tools 🛠](#project-tools-)
  - [Running the Application Locally](#running-the-application-locally)
    - [Install All Dependencies](#install-all-dependencies)
    - [Start the app in development mode (hot-code reloading, error reporting, etc.)](#start-the-app-in-development-mode-hot-code-reloading-error-reporting-etc)
    - [Lint the files](#lint-the-files)
  - [Run Integration Tests](#run-integration-tests)
  - [Project Structure](#project-structure)
    - [📁 Components](#-components)
    - [📁 Gql Folder](#-gql-folder)

## Checkout AutoVoice

![preview](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/1.png)

----

### See More

- Seemless Micro animations and great user experience
- Search and Filter through _not a lot_ of templates 😅

![preview-2](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/a.gif)

- Instantly choose a template and start editing away. No hassle.
- Oh, plus you don't have to design them.

![preview-2](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/b.gif)

- Don't want to use a template now? No worries, Save it for the rainy day.

![preview-2](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/c.gif)

- Don't like repeating yourself? No worries, you can set default values here, and we'll auto-fill your templates. You're welcome.

![preview-2](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/d.gif)

- Oh, and your data is secure with our Passwordless login and device detection.

![preview-2](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/e.gif)

![preview-2](https://raw.githubusercontent.com/MartinsOnuoha/auto-invoice/master/public/2.png)

## Try it Out

Feel free to try out the application [HERE](http://autovoice.martinsonuoha.com)

## Project Tools 🛠

Autovoice is built with:

- [Vue.js](https://vuejs.org/) - Javascript SPA framework
- [Quasar](https://quasar.dev/) - UI library written in Vue
- [GraphQL](https://graphql.org/) - Query language
- [Magic](https://magic.link) - Passwordless Authentication system
- [Apollo](https://www.apollographql.com/) - GraphQL Client
- [Postgres](https://www.postgresql.org/) - Database provisioned on a heroku instance
- [Cypress](https://cypress.io/) - E2E testing framework
- [Hostinger](https://hostinger.com) - Static Hosting Service
- Github Actions - CI/CD

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

## Project Structure

### 📁 Components

Under the components folder are two core folders:

- Reusables
- Template

**Reusables** are components that are used more than once across the application, this includes, notification, breadboards, etc.

```javascript
📁 components
  📁 reusables
    📁 COMPONENT_NAME
      🅥 COMPONENT.VUE
```

**Template** contains the vue component versions of our invoice templates themes and related components.

```javascript
📁 components
  📁 Template
    📁 Themes
      🅥 Theme1.VUE
      🅥 Theme2.VUE
      🅥 Theme3.VUE
    📁 Preview
```

### 📁 Gql Folder

This folder contains graphQL mutations and queries used accross the app.

```javascript
📁 gql
  🅙 mutations.js
  🅙 queries.js
```
