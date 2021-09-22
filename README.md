# generic-template

![GithubActions](https://github.com/TradeTrust/generic-templates/workflows/GenericTemplateCI/badge.svg)

Generic templates for TradeTrust, where users can use any of these available templates to render their document.

_Note: These are just some rendering templates that are made available for users to use, the configurations to use these templates are in the [documentation](https://docs.tradetrust.io/document-creator) of TradeTrust document creator._

| Available Templates      | type              | name                   | url                                     | Support OA V3 |
| ------------------------ | ----------------- | ---------------------- | --------------------------------------- | ------------- |
| Bill of Lading           | EMBEDDED_RENDERER | BILL_OF_LADING         | https://generic-templates.tradetrust.io | &check;       |
| Bill of Lading (Generic) | EMBEDDED_RENDERER | BILL_OF_LADING_GENERIC | https://generic-templates.tradetrust.io |               |
| Chafta COO               | EMBEDDED_RENDERER | CHAFTA_COO             | https://generic-templates.tradetrust.io | &check;       |
| Covering Letter          | EMBEDDED_RENDERER | COVERING_LETTER        | https://generic-templates.tradetrust.io |               |
| Invoice                  | EMBEDDED_RENDERER | INVOICE                | https://generic-templates.tradetrust.io | &check;       |
| Simple COO               | EMBEDDED_RENDERER | SIMPLE_COO             | https://generic-templates.tradetrust.io | &check;       |

Use any one of these urls in the `forms[0].defaults.$template.url` field of the configuration file.

_Note: To use these available templates, please ensure that you have the correct schema in the configuration file._

---

## Install

You can download or `git clone` this repo

```sh
$ git clone https://github.com/TradeTrust/generic-templates.git
$ npm install
```

## Commands

```sh
$ npm run storybook # open storybook and start editing your components
$ npm run storybook:build # generate docs
$ npm run test:watch # run tests with Jest
$ npm run test:coverage # run tests with coverage
$ npm run integration # run integration test with testcafe
$ npm run lint # lint code
$ npm run build # build component
$ npm run example:application # start embedded application
```

## Testing the templates in an integrated environment

This template provides a simple application that is able to render documents built for the current renderer. To use it:

1. Open `application/index.tsx` file and edit the `documents` property of the `App` component to suit your needs (provide any document that is available locally, whether it's a javascript, JSON or typescript document).
1. Start your renderer: `npm run dev`
1. Start the local application: `npm run example:application`
1. Head to `http://localhost:3010/`, you should see the configured documents during step 1.

## End-to-end and visualisation test

This repository has been configured to run end-to-end tests using `Testcafe`.

- concurrently run `npm run dev` + `npm run integration`

## Features

- [**React**](http://reactjs.org/) - A JavaScript library for building user interfaces.
- [**Webpack**](https://webpack.js.org/) - Component bundler.
- [**React testing library**](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices.
- [**Emotion**](https://emotion.sh/) - Library designed for writing css styles with JavaScript.
- [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
- [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
- [**Testcafe**](https://devexpress.github.io/testcafe/) - A node.js tool to automate end-to-end web testing.
- [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
- [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript superset, providing optional static typing
- [**Circle CI**](https://circleci.com/) - Automate tests and linting for every push or pull request.
- [**Storybook**](https://storybook.js.org/) - Tool for developing UI components in isolation with documentation.
- [**Debug**](https://github.com/visionmedia/debug) - JS debugging utility that works both in node.js and browsers.

## License

GPL-3.0

---
