System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.6",
    "angular-route": "github:angular/bower-angular-route@1.4.7",
    "github:angular/bower-angular-route@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.6"
    }
  }
});
