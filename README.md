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

#### Localhost
- To install the node modules
```
$ npm install
$ npm start
```
It should return something like this:
```
node ./bin/www
```

-   If `npm start` throws an `error` please check if port `3000` is free.
