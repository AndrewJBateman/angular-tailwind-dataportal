# :zap: Angular Tailwind Data Portal

* Angular app using [TailwindCSS](https://developers.google.com/chart/) components & Angular Signals to display backend data
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-tailwind-dataportal?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-tailwind-dataportal?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-tailwind-dataportal?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-tailwind-dataportal?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Tailwind Data Portal](#zap-angular-tailwind-data-portal)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Data shown on a grid of Tailwind-styled cards
* Angular Signals used to track the state of changing backend data so rendering can be optimised.
* Any JSON data object made available on `localhost:3000` can be displayed on the Angular frontend. It is easy to modify the frontend Typescript model and HTML markup to match the JSON object on the backend. I used [drug product JSON data](https://health-products.canada.ca/api/drug/drugproduct/?lang=en&type=json) as test data - see `db.json`

## :camera: Screenshots

![Angular page](./imgs/pharma-data.png)

## :signal_strength: Technologies

* [Angular framework v17](https://angular.io/)
* [Angular Signals](https://angular.io/guide/signals)
* [TailwindCSS v3](https://tailwindcss.com/) CSS framework
* [JSON server](https://www.npmjs.com/package/json-server) used to serve a fake REST API backend on port localhost:3000 to test frontend

## :floppy_disk: Setup

* Run `npm i` to install dependencies.
* This frontend requires a backend data source - see `/models/pharma.data.ts` for format, on port `http://localhost:3000`
* `npm run server` to run fake backend. Navigate to `http://localhost:3000/api` to see data object.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :wrench: Testing

* Fake databse data in `db.json` used to test frontend.

## :computer: Code Examples

* 'data.service.ts' function to return data array Observable with fetch status and catch errors

```typescript
loadData(): Observable<State<Array<IPharmaData>> | State<null>> {
    return this.http.get<Array<IPharmaData>>(`${environment.API_URL}/api`).pipe(
      share(),
      map((data) => {
        return new State<Array<IPharmaData>>(
          StatusNotification.OK,
          data,
          null
        );
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          new State<Array<IPharmaData>>(
            StatusNotification.ERROR,
            undefined,
            error
          )
        );
      })
    );
  }
```

## :cool: Features

* Tailwind build for production CSS purge results in a very small styles bundle (about 7kB)

## :clipboard: Status & To-Do List

* Status: working
* To-Do: Nothing

## :clap: Inspiration

* [Gouv of Canada API: Drug Product Database - All Files - Drug Product](https://health-products.canada.ca/api/drug/drugproduct/?lang=en&type=json)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@gmail.com`
