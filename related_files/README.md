# angular-e07 &mdash; Programmation de menus déroulants avec le module ng-select
[README](../README.md) &mdash; Angular

## Démonstration
https://ghislaincoutu.ca/r002/angular-e07

## Paquets NPM à installer
```sh
npm install bootstrap
npm install @ng-select/ng-select
```

## Commandes Angular à exécuter pour générer les composants de l'exercice
```sh
ng generate component menu
ng generate component t01
ng generate component t02
ng generate component t03
ng generate component t04
ng generate service module01
ng generate service module02
```

## Ajout des fichiers Boostrap au projet Angular
Pour que les fichiers Bootstrap soient pris en compte dans le projet, il faut ajouter les fichiers CSS et JavaScript dans le fichier **angular.json**, dans la section _build_ :
```json
{
  "build": {
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.css",
      "src/styles.scss"
    ],
    "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
  }
}
```