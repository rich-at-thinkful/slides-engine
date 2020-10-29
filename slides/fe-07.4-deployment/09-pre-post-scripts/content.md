# Pre and Post Scripts

```json
// package.json
  "scripts": {
    "start": "react-scripts start",
    "prebuild": "CI=true react-scripts test --colors",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "vercel --prod
  },
  ```

  `npm run deploy`

* Run the tests
* If the tests succeed, run the build
* Deploy to production with `vercel --prod`