
1. App.js, index.html

2. npm init
3. npm i -D parcel
4. edit pachet.json:{"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",}}
5. npm i react
6.  npm i react-dom
7. npx parcel index.html
8. npm install babel-plugin-transform-remove-console --save-dev  
    in file .babelrc:
    
    // with options
     {
      "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
      }

lecture 9:
1. npm i react-router-dom 