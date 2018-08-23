
## Introduction

This is a proof of concept that demonstrates the ability to share core functionalities and ngrx-based business logic between an Angular6 web app and an Ionic4 mobile app.

It is based on a Nx Workspace mono-repo project structure (from Nrwl.io [Nx Extensions](https://github.com/nrwl/nx), an open source toolkit for enterprise Angular applications).

Please check the Medium article [Sharing (Ngrx-based) logic between Angular5 web app and Ionic3 mobile app](https://medium.com/@benorama/sharing-ngrx-based-logic-between-angular5-web-app-and-ionic3-mobile-app-77c19470cccc) for more info.

![Demo](https://cloud.githubusercontent.com/assets/394356/24591063/344c55ee-17f9-11e7-82ca-96821ac723b7.png)

**Goals:**

* encapsulate all the business logic in a core module, based on [@ngrx/store](https://github.com/ngrx/platform),
* keep specific view layout, markup and navigation logic in the app projects.

Note: [@ngrx/store](https://github.com/ngrx/platform) is a RxJS powered state management inspired by Redux for Angular apps.
It's currently the most popular way to structure complex business logic in Angular apps.


## Running the apps locally

```
# Clone the repo
git clone https://github.com/benorama/ngrx-demo-workspace.git
```

Prerequisites, latest version of:
* [Typescript](https://www.typescriptlang.org/index.html#download-links)
* [Angular CLI](https://cli.angular.io)
* [Ionic CLI](http://ionicframework.com/docs/cli/)

### Web app

To run web app, we use the root Nx Project package and Angular CLI.

```
# Install dependencies
npm i

# Run the web app locally
ng serve web
```

### Mobile app

To run mobile app, we use the mobile app Ionic package and Ionic CLI.

```
# Go into mobile Ionic app directory
cd ./apps/mobile

# Install dependencies and typings (you can get a burger...)
npm i

# Run the mobile app locally
ionic serve

# Or from the root
ng serve mobile
```


## Bugs and feedback

If you have any questions or suggestions to improve the demo app, don't hesitate to submit an issue or a pull request!

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0 using [Nrwl Nx](https://nrwl.io/nx).
