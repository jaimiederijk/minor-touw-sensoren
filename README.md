# Minor Webdevelopment | Tauw-sensoren
Repository for the "Tauw Sensor Selectiontool"
<!-- `
V 0.1.0
` -->

![Logo Tauw](./repo-images/tauw-logo.jpg)

## Introduction
This is a project, for the Dutch company named <a href="http://www.tauw.nl">'Tauw'</a>. Tauw is a European  Europees consulting and engineering firm, that gives environmental friendly and sustainable advices to businesses. To help with the creation of a more sustainable world.

They have offices in the Netherlands, Belgium, Germany, France, Spain and Italy and have more than 1,000 people working to achive there goal, to make the world better and cleaner.

## Users
- <strong>User 1: </strong> At the moment, whenever someone wants to start a project, that requires a type of sensor. That person needs to talk to someone else in the company, to ask what sensors would be best to use.

 <strong>Current problem: </strong> That person is also busy, so a response could take a while and during that time a project could not continue.

- <strong>User 2: </strong> The second type of user, is a project leader, that knows what sensor is going to be used, but wants to check what the functionalities of that sensor are and how it work.

 <strong>Current problem: </strong> Because there is no accessible database, that contains all the sensors, the project leader needs to ask someone, what interrupts the progress of the project or he/she needs to search on the internet, what could take a while.

- <strong>User 3: </strong> External companies want to share information, about sensors with Tauw and want to help each other.

 <strong>Current problem: </strong> There is no database or public accessible document, where they could place the information. So sharing data is currently very inefficient.

## User stories (will become English soon)
- De tool bevat selectiecriteria. Het belangrijkste criterium is een plaatje, waarop je het werkveld kan selecteren waarvoor je een vraag hebt (bijvoorbeeld, industrie  luchtmetingen; of bijvoorbeeld stedelijk gebied  > Water  > Riolering). Overige criteria zijn een range in prijs en andere randvoorwaarden.

- Op basis van je selectiecriteria wordt een voorstel geselecteerd van een meettechniek of sensor. Er wordt een korte beschrijving van de meettechniek of de sensor getoond, daarbij wordt een contactpersoon binnen Tauw getoond en, als deze beschikbaar, een voorbeeldproject waar de techniek is toegepast.
- De database moet van buitenaf ingevuld kunnen worden, in eerste instantie alleen door medewerkers van Tauw, later mogelijk door externe partijen.

## Concept
Our idea, is a responsive website, where the users can easally find the best possible sensors for theire projects, by only knowing where they want to use it.

The webside also gives the user the ability, to find a specific sensor, by name. They than get to see a complete list with a summarty of the sensor, its functionalities, contact persons and example projects.

Currently we are also working on a databse, connected to a online form, where internal or external personal can add a new sensors, that will automaticly be added to the database and show on the side.

## Dependencies
- A basic MVC server: Nodejs, for Server-side scripting.
- A Node.js setup: Express.
- EJS as serverside templating engine
- A clean and widly supported HTML structure.
- Multiple SCSS style sheets (sass)
- JavaScript on Clien-side.
- Gulp to bundle the SCSS in one css, and to automaticly show the changes.
- MongoDB: to store and retrieve data from a database.

## Code conventions
- When making a new branch give it a clear name. (example: /partail/header/colin)
- Work modulair as much as possible, to prefent merge conflicts.
- Templating engine is EJS and try to keep the code clean and logical.
- Use tabs instaid of spaces.
- Give functions and variables clear names.
- Each function handeks on thing/action.
- No jQuery.
- Use Comments in your code, when needed.
- Write all code and comments in English. (!!).
- Use camelcase, when naming items.
- Everything gets it's own SCSS stylesheet (will be merged later).

## Personal development plan (will become English soon)
Binnen dit project is per persoon een ontwikkelplan opgesteld dat gedurende dit project zal worden doorlopen.

### Colin Dörr – 500704926
<details>
<h4>Korte intro</h4>
<p>In 2014 ben ik begonnen met de opleiding Communication en Multimedia Design (CMD). In eerste instantie wilde ik geen Front-end Developer worden, maar sinds dien, ben ik mijzelf steeds meer gaan verdiepen in de Front-end. Met als uiteindelijke doel, om een zo goed mogelijke Front-end Developer te worden, die niet alleen de basis kent, maar die daarnaast ook nog diverse tools tot zijn beschikking heeft, waarmee hij tot het best mogelijke eind product kan komen. Waardoor mijn producten niet alleen op dat moment, maar ook in de toekomst eenvoudig gebruikt en/of aangepast kan worden. </p>
<p>In de meesterproef is het de bedoeling om tenminste vier vakken uit de minor toe te passen in het project. Op de volgende vakken leg ik de focus gedurende de meesterproef:</p>
<ul>
<li> Web App from Scratch</li>
<li> CSS to the Rescue</li>
<li> Performance Matters</li>
<li> Browser Technologies</li>
</ul>

<h5>Web App from Scratch</h5> <p>Bij dit onderdeel is het van belang dat de JavaScript wordt toegepast volgens de standaarden van het vak Web App from Scratch. Dit houdt in, dat ik gebruik ga maken van een IFFE en object literal programming, om structuur orde te creëren in de codes. </p>

<h5>CSS to the Rescue</h5> <p>Voor dit onderdeel gebruik ik responsive css oplossingen, voor het bouwen van complexe interface onderdelen.</p>

<h5>Performance Matters</h5> <p>Voor Performance Matters, zal ik de website offline accessible, door een  service worker te implementeren. Daarnaast zal ik proberen zo veel mogelijk server-side te regelen en zal ik verschillende stappen ondernemen, om onder andere de laatsnelheid en de grote van de website zo klein en snel mogelijk te maken.</p>

<h5>Browser Technologies</h5> <p> Bij dit onderdeel ga ik beginnen met een goed werkend html en css. De Javascript zal daarna als enhancemet worden toegevoegd. Daarnaast zal er rekening gehouden worden met de verschillende web browser en waar nodig zullen fallback wordt geschreven. </p>
</details>


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


## Installation
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
