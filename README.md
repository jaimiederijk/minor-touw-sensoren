# Minor Webdevelopment | Tauw-sensoren
Repository for the "Tauw Sensor Selectiontool"

`
V 1.0.7
`
## Installing
### Stap 1: Cloning
```
$ git clone https://github.com/ColinDorr/minor-tauw-sensoren
```

<!-- ### Stap 2: Preparing
- Create a .env file in the TauwApp folder (same level as the package.json)

- Fill `.env` with Funda json url and the Funda key. For exmaple:
```
URL=http://funda.kyrandia.nl/feeds/Aanbod.svc/json/
API_KEY=1234ThisWillBeTheFundaKey
```
- After creating the .env file and giving it the correct values, oyu are ready to run the application. -->

### Stap 2: Running
- Go the console and find the minor-tauw-sensoren folder and the TauwApp.
- In the TauwApp folder use ``npm install`` to install the necessary node modules.
- Afterwards use ``npm start``, to start the application. The applications is now running on your local host on http://localhost:3000/ .


### mongodb
- instal mongodb [instructies](https://www.mkyong.com/mongodb/how-to-install-mongodb-on-windows/)
- run config die aangeeft waar data folder staat in de instalatie map van mongo
```
(win7)
$ \mongodb\bin>./mongod --config D:\mongodb\mongo.config (win7)
```
- of geef het direct aan in dezelfde map
```
(win7)
$ .\mongod --dbpath C:\Users\jaimie\Documents\GitHub\minor-tauw-sensoren\mongodb\data
```

- open mongo shell
```
$ H:\Program Files\MongoDB\Server\3.4\bin> ./mongo
```
- use tauwSensors Database. (maakt db met deze naam)
voer dit uit in de mongo shell
```
$ use tauwSensors
```
- import json en maak collection.
voer uit in nieuw terminal venster. navigeer weer naar mongo bin folder
```
$ \mongodb\bin> ./mongoimport --db tauwSensors --collection meettechnieken --drop --file  C:\Users\jaimie\downloads/TauwSensoren.json
```
- conectie maken vanuit node:
[node mongo quickstart](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)

#### Localhost
- To install the node modules
```
$ npm install
$ npm start

$ npm run sass
```
It should return something like this:
```
node ./bin/www
```

-   If `npm start` throws an `error` please check if port `3000` is free.
