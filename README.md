# Minor Webdevelopment | Tauw-sensoren
Repository for the "Tauw Sensor Selectiontool"

`
V 0.1.0
`
## Installing
### Stap 1: Cloning
```
$ git clone https://github.com/ColinDorr/minor-tauw-sensoren
```

### Stap 2: setup
- Go the console and find the minor-tauw-sensoren folder and the TauwApp.
- In the TauwApp folder use ``npm install`` to install the necessary node modules.


#### mongodb setup
- instal mongodb [instructions windows](https://www.mkyong.com/mongodb/how-to-install-mongodb-on-windows/)

- add mongo install bin folder to your path variables.

- run gulp setup-db
```
$ gulp setup-db
```

- conect with db:
[node mongo quickstart](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)

#### veranderingen aan de json
```
$ gulp import-data
```

### Stap 3: Localhost
 use ``gulp``, to start the application.  .
```
$ gulp
```
The applications is now running on your local host on http://localhost:3000/

-   If `gulp` throws an `error` please check if port `3000` is free.
