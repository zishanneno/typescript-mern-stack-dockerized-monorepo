# All-In-One Typescript Dockerized MERN Stack Monorepo

[![GitHub](https://img.shields.io/github/license/zishanneno/typescript-mern-stack-dockerized-monorepo?style=for-the-badge)](https://github.com/zishanneno/typescript-mern-stack-dockerized-monorepo/blob/main/LICENSE) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zishandanish/)

## About this project

The inspiration behind this project is to provide an all-in-one template repository that can be used to quickly jump start with one or a combination of the following use cases within a yarn workspace based monorepo:

- Standalone API backend
- API backend connected with a database
- Full MERN stack client/server/database appication
- Containerized MERN stack application stack
- Shared codebase

Besides these, it also serves as a learning resource around all the tools/technologies used, and hence dedicated to my wife who has taken a courageous dive into the world of programming. ❤️

## Features

- Yarn Workspaces based monorepo
- Typescript base config extending each workspace
- Concurrent execution of client and server
- Ability to spin up a dev database instance
- Creation of a dockerized application stack
- Hygiene for cleaning up build
- Shared codebase between workspaces
- Express based API backend
- Out-of-the-box JWT authentication
- Integration with MongoDB using `mongoose`
- Dependency injections using `typedi`
- Configurable logging using `winston`
- ReactJS client app with login and Ant Design layout
- `react-router-dom` driven navigation and side menu
- Built-in internationalization with `i18next`
- Avoid large bundles by code-splitting into multiple bundles
- State management using `redux`

I possibly missed mentioning some features but there's more to come.

## Super Quick start

1.  After cloning this repository, rename these files:
    - `.env.example` => `.env`
    - `/server/.env.example` => `/server/.env`
    - `/database/config/*.example` => Remove `.example`
2.  In the root of the project directory run `yarn`
3.  Once dependencies have been installed, run `yarn start`
4.  Modify and execute this curl request:

        `curl --request POST \ --url http://localhost:8000/api/auth/signup \ --header 'content-type: application/json' \ --data '{ "name": "YOUR NAME", "email": "YOUR_USERNAME", "password": "YOUR_PASSWORD" }'`

5.  Browse to `http://localhost:3000/` and login using your credentials.
