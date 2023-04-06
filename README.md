# open table clone

## Motivation

## Requirements

- [Node](https://nodejs.org/en/) `^16.15.0`
- [NPM](https://www.npmjs.com/) `^8.5.5`

## Installation

After confirming that your environment meets the above [requirements](#requirements), it is time to clone the project
locally by doing the following:

```bash
$ git clone git@github.com:DeanHristov/open-table-clone.git <project-name>
$ cd <project-name>
```

When you're done with the steps above, run the following command:

```bash
$ npm install
```

## Running the Project

Running the app in **development** mode. It gonna starts locally with [mock server](https://mswjs.io/)

```bash
$ npm run dev
```

## Running the Project in production mode.

Firstly, build the app with the following command:

```bash
$ npm run build
```

then start the app

```bash
$ npm start
```

## Testing

Running the unit tests

```bash
$ npm run test
```

**OR**

Running the automation tests with a cypress app

```bash
$ npm run test:int
```

Or running the automation tests with a cypress runner

```bash
$ npm run test:int:run
```

# Main tasks

All tasks automation are based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                | Description                                            |
|----------------------|--------------------------------------------------------|
| npm run dev          | Running the app in **dev** mode                        |
| npm run build        | Building the code in **production-ready** mode         |
| npm run start        | Running the app in **prod** mode                       |
| npm run test         | Running the unit tests ( with jest)                    |
| npm run test:int     | Running the automation tests with cypress app          |
| npm run test:int:run | Running the automation tests with cypress runner       |
| npm run lint         | Analyzing the code for problems with eslint            | 
| npm run type-check   | Type checking the code with typescript                 | 
| npm run test-all     | Running **lint**, **type-check** and **test** together |
| npm run storybook    | Running a storybook server on: localhost:6006          | 

## Used technologies

- NodeJS- https://nodejs.org/en/
- NextJS (v13+) - https://beta.nextjs.org/docs
- Git - https://git-scm.com/
- Cypress.io - https://www.cypress.io/
- TypeScript - https://www.typescriptlang.org/
- Storybook - https://storybook.js.org/

---
Author: [D. Hristov](https://dhristov.eu/) | Version: [0.0.1]()  