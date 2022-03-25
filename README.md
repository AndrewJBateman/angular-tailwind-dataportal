# :zap: Angular Firebase BigQuery

* Angular frontend CRUD operations on Firebase-GCP_BigQuery backend database
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-firebase-bigquery?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-firebase-bigquery?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-firebase-bigquery?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-firebase-bigquery?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Firebase BigQuery](#zap-angular-firebase-bigquery)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Frontend Technologies](#signal_strength-frontend-technologies)
  * [:signal_strength: Backend Technologies](#signal_strength-backend-technologies)
  * [:floppy_disk: Frontend Setup](#floppy_disk-frontend-setup)
  * [:floppy_disk: Backend Setup](#floppy_disk-backend-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Firebase functions used to store SQL CRUD operations functions in GCP BigQuery.
* These BigQuery functions are accessed from an Angular frontend

## :camera: Screenshots

![Example screenshot](./img/bigquery.png)

## :signal_strength: Frontend Technologies

* [Angular v10](https://angular.io/)
* [Node v12](https://nodejs.org/en/) required by Angular 10.x CLI

## :signal_strength: Backend Technologies

* [@google-cloud/bigquery](https://www.npmjs.com/package/@google-cloud/bigquery) Google BigQuery Client Library for Node.js
* [cors v2](https://www.npmjs.com/package/cors) Express middleware to enable Cross Origin Resource Sharing for Node.js
* [firebase-admin v9](https://www.npmjs.com/package/firebase-admin) to enable access to GCP BigQuery for Node.js
* [firebase-functions v3](https://www.npmjs.com/package/firebase-functions) to define Cloud Functions for Firebase

## :floppy_disk: Frontend Setup

* Install dependencies by running `npm i`
* Run `npm start` for a dev server.
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files

## :floppy_disk: Backend Setup

* Add project in Firebase Console
* Run `firebase init functions`
* From functions folder install @google-cloud/bigquery and cors dependencies
* Run 'firebase deploy --only functions' to deploy backend to Firebase
* Copy the Url from the Firebase dashboard Functions list and paste it in the frontend .env file as the QUERY_URL value (used by `bigquery.service.ts`).

## :computer: Code Examples

* extract from `functions/index.js` to execute query stored in BigQuery database via Firebase Functions

```javascript
async function executeQuery(query) {
  // Creates a client
  const bigqueryClient = new BigQuery();
  const sqlQuery = query;

  const options = {
    query: sqlQuery,
    timeoutMs: 100000, // Time out after 100 seconds.
    useLegacySql: false, // Use standard SQL syntax for queries.
  };

  // Runs the query
  return bigqueryClient.query(options);
}
```

## :cool: Features

* BigQuery is a powerful tool and is used here to query very large data sets using standard SQL.

## :clipboard: Status & To-Do List

* Status: in work
* To-Do: correct database connection issue, most likely due to unconfigured payment account.

## :clap: Inspiration

* [Touwin10: How to have full control of BigQuery CRUD in your Angular application](https://touwin10.com/tutorials/VcitzwiLz1rtQkPhCjK0/how-to-have-full-control-of-bigquery-query-in-your-angular-application.) published Jul 17, 2019 so out of date. Uses Node 8. There is an authentication issue if using Node 10

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
