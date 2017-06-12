# Minor Webdevelopment | Tauw-sensoren
Repository for the "Tauw Sensor Selectiontool"

`
V 0.1.0
`

## Ontwikkelplan
Binnen dit project is per persoon een ontwikkelplan opgesteld dat gedurende dit project zal worden doorlopen.

### Nooroel Imamdi
500706701

#### Korte intro
Ik ben in 2014 tot de opleiding *Communication and Multimedia Design* (CMD) toegetreden als Visual Interface Designer. In de loop van de tijd ben ik me gaan richten op de techniek, met als doel om diversiteit te creëren in mijn werkzaamheden als CMD-er. De minor *Webdevelopment* was voor mij de uitgelezen mogelijkheid om verder tot verdieping over te gaan in code-land.

In de meesterproef is het de bedoeling om tenminste vier vakken uit de minor toe te passen in het project. Op de volgende vakken leg ik de focus gedurende de meesterproef:

- Web App from Scratch
- CSS to the Rescue
- Performance Matters
- Browser Technologies

**Web App from Scratch**
Bij dit onderdeel is het van belang dat **JavaScript** wordt toegepast volgens de standaarden van het vak *Web App from Scratch*. Het plan is om deze toe te passen op de *map* die wordt aangelegd in de interface.

**CSS to the Rescue**
Het toepassen van CSS zal plaatsvinden bij het omzetten van het Visueel Design naar een werkend prototype.

**Performance Matters**
Het onderdeel *Performance Matters* zal worden voldaan door een service worker toe te voegen. Hiermee is het mogelijk om de website ook in offline-modus te blijven bezoekers als een gebruiker al eerder op de website is geweest.

**Browser Technologies**
Dit onderdeel wordt toegepast door al bij het coderen ervoor te zorgen dat de code die geschreven wordt op meerdere web browsers wordt ondersteund en al dan niet een fallback wordt gemaakt.


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
