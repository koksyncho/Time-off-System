System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {

    'app': './',

    '@angular/core': 'npm:@angular/core@4.4.6/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@4.4.6/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.4.6/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@4.4.6/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.4.6/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@4.4.6/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@4.4.6/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@4.4.6/bundles/forms.umd.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser@4.4.6/bundles/platform-browser-animations.umd.js',
    '@angular/animations/browser': 'npm:@angular/animations@4.4.6/bundles/animations-browser.umd.js',
    '@angular/animations': 'npm:@angular/animations@4.4.6/bundles/animations.umd.js',

    'angular-calendar': 'npm:angular-calendar@0.21.3/dist/umd/angular-calendar.js',
    'calendar-utils': 'npm:calendar-utils@0.0.57/dist/umd/calendar-utils.js',
    'angular-resizable-element': 'npm:angular-resizable-element@1.2.4/dist/umd/angular-resizable-element.js',
    'angular-draggable-droppable': 'npm:angular-draggable-droppable@1.1.1/dist/umd/angular-draggable-droppable.js',
    'date-fns': 'npm:date-fns@1.29.0',

    '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap@1.0.0-beta.5',
    'ngx-contextmenu': 'npm:ngx-contextmenu@1.3.5',
    'rxjs': 'npm:rxjs@5.5.0',
    'rrule': 'npm:rrule@2.2.0',
    'typescript': 'npm:typescript@2.2.2/lib/typescript.js'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './bootstrap.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    'date-fns': {
      main: './index.js',
      defaultExtension: 'js'
    },
    'ngx-contextmenu': {
      main: './lib/index.js',
      defaultExtension: 'js'
    }
  }
});