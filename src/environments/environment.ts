// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tp-arqui-app-web',
    appId: '1:520316009576:web:51b0eb369c781df9318fdd',
    databaseURL: 'https://tp-arqui-app-web-default-rtdb.firebaseio.com',
    storageBucket: 'tp-arqui-app-web.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCNoUjt6JxM9KH7Zg5w30DwCfCMRq11k9k',
    authDomain: 'tp-arqui-app-web.firebaseapp.com',
    messagingSenderId: '520316009576',
  },
  production: false,
  host: "http://localhost:5000"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
