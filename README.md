# TEST NET SAR

A test for Net Sar

## Technologies

- Angular 6
- LoopBack 3
- MySQL

## Installation

### API

```
cd api/
npm install

change file datasources.json to your credentials:

"mysql": {
    "host": "YOUR HOST",
    "port": "YOUR PORT",
    "url": "",
    "database": "netsar",
    "password": YOUR PASSWORD,
    "name": "mysql",
    "user": "YOUR USERNAME",
    "connector": "mysql",
    "createDatabase": true
  }

node server/migrate.js
node .
```

- Access api at http://localhost:3000

### CLIENT

```
cd net-sar-angular-project/
npm install
ng serve
```

- Access client at http://localhost:4200

## Author

- Caio Milleo
