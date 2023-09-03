## About the project

Travelers' Blog Application designed and intended for users who want to share their travel adventures from around the world, allowing them to view comments from other users and stay informed about the features of different places.

### Technologies used
[![react][react]][react-url]
[![typescript][ts]][ts-url]
[![MUI][MUI]][mui-url]
[![Yarn][yarn]][yarn-url]
[![vite][vite]][vite-url]

## Development

### Make it your own
To get a local copy, clone it using:
```bash
git clone https://github.com/psc88/Travelers-Blog-App.git
```

### Install dependencies:

```bash
pnpm install
#or
yarn install
#or
npm install 
```

## How to test the application


| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn start:server | Runs json server                       |
| yarn dev      | Runs the app in the development mode.               |
| yarn build    | Builds the app for production to the dist folder. |
| yarn lint     | Runs eslint to see your errors |
| yarn preview  | Run the application in production mode |

Run the 'yarn start:server' command. Note: Please be aware that when running the application, it will by default take a port. Therefore, the port configured for the JSON server must be different from that of the app. If they happen to coincide, you must make the port change in the '.env' file and package.json file
## Base Dependencies

- [react][react-url] create user interfaces from components.
- [MUI][mui-url] for stylesheets.
- [json-server][json-server-url] Library that allows simulating APIs.
- [react-hook-form][react-hook-form-url] React form management library that is based on the use of Hooks
- [sweet-alert2][sweet-url] For managing alert messages 
## Folder Structure

```bash
project-name/
├── node_modules             # Third party libraries
├── public                   # 
└── src                      # Root directory
|  ├── components            # Common components
|  ├── context               # 
|  ├── helpers               # Common functions
|  ├── hooks                 # 
|  ├── interfaces            # Data interfaces
|  ├── layaout               # Common layaout of app
|  ├── pages                 # All pages of app
|  ├── routes                # Routes configuration
|  ├── services              # Requests to the server
|  ├── theme                 # Common theme of the Material UI app
|  ├── App.tsx               # 
|  ├── index.css             # 
|  ├── main.tsx              # 
|  └── vite-env.d.ts         # 
├── .eslintrc.cjs            # Styleguide configuration
├── .gitignore               # Files ignored at publish into github
├── db.json                  # JSON-format data for the simulated database
├── index.html               # 
├── package.json             # 
├── README.md                # 
├── tsconfig.json            # 
├── tsconfig.node.json       # 
├── vite.config.js           # 
├── yarn.lock     yarn           # 
```

[nodejs-url]: https://nodejs.org/en
[react]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-url]: https://react.dev/
[yarn]:https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[mui-url]: https://mui.com
[yarn-url]: https://yarnpkg.com
[ts]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev
[json-server-url]: https://www.npmjs.com/package/json-server
[react-hook-form-url]: https://react-hook-form.com
[sweet-url]: https://sweetalert2.github.io/#download
