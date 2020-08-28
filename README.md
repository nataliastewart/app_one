# app_one

Back End Dependecies list

-npm i
-npx gitignore node (creates .gitignore)
-npm init -y (creates package.json)
-npm i -D nodemon (creates devDependencies)
-npm knex
-npm knex sqlite3
-knex init (creates knexfile.js)
-npm i dotenv ( .env : "require('dotenv').config()"/ make the PORT dynamic) - const port = process.env.PORT || 5000;
-npm i bcryptjs
-npm i cors
-npm i helmet
-npm i jsonwebtoken
-npm i jest (test library)
-npm i supertest
-npm i cross-env
------- extra:
-npm i pg
-npm i postgresql
-npm i knex-cleaner (for seeds)
---------------------------------------//-------------------------

Inside package.json:
"scripts": {
"test": "cross-env NODE_ENV = testing jest --watch",
"start": "node index.js",
"server": "nodemon index.js"
}
