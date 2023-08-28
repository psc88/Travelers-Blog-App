<h1 align="center">Template: README</h1>

<div align="center">
  <p align="center">
    A simple and straightforward README template.
</div>

## About the project

Travelers' Blog Application designed and intended for users who want to share their travel adventures from around the world, allowing them to view comments from other users and stay informed about the features of different places.

### Technologies used
[![react][react]][react-url]
[![typescript][ts]][ts-url]
[![jest][jest]][jest-url]
[![react-testing-library][react-testing-library]][react-testing-library-url]
[![Material-UI][mui]][mui-url]
[![Json Server][json-server]][json-server-url]

## Development

### Make it your own
To get a local copy, clone it using:
```bash
git clone https://github.com/psc88/blog-travellers.git
```

```bash
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```
### Install dependencies:

```bash
pnpm install
#or
yarn install
#or
npm install 
#and
yarn add react-router-dom@6
```
## Base Dependencies

- [react][react-url] create user interfaces from components.
- [Material-UI][mui-url] for stylesheets.
- [jest][jest-url] and [react-testing-library][react-testing-library] for testing.
- [json-server][json-server-url] Library that allows simulating APIs.
 
## Folder Structure

```bash
project-name/
├── node_modules             # Third party libraries
├── public                   # 
└── src                      # Root directory
|  ├── assets                # App resources
|  ├── components            # Common components
|  ├── helpers               # Common functions
|  ├── hooks                 # 
|  ├── pages                 # All pages of app
|  ├── routes                # Routes configuration
|  ├── services              # Requests to the server
|  ├── tests                 # Test all functionalities
|  ├── App.tsx               # 
|  ├── index.css             # 
|  ├── main.tsx              # 
|  └── vite-env.d.ts         # 
├── .eslintrc.cjs           # Styleguide configuration
├── .gitignore               # Files ignored at publish into github
├── index.html               # 
├── package.json             # 
├── README.md                # 
├── tsconfig.json            # 
├── tsconfig.node.json       # 
├── vite.config.js           # 
```