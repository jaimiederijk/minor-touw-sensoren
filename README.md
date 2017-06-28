# Master is up to date. Please review the content in the master.

# Minor Webdevelopment | Tauw-sensoren
Repository for the "Tauw Sensor Selectiontool"
<!-- `
V 0.1.0
` -->

![Logo Tauw](./readme-files/tauw-logo.jpg)
![Photos devicelab](./readme-files/photos_devicelab.zip)


<!-- ### Live Demo
<a href="https://tauw-sensortool.herokuapp.com"> https://tauw-sensortool.herokuapp.com </a> -->

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
- The selectiontool can use specific criteria, to select the sectors and categories, you want. (Example: Stedelijk gebied  > Water  > Riolering)
- The selectiontool uses filters, to only show the results, that best matching the filters.
- The results show, what kind of sensor you selected, hase a small summary, a project, where the sensor was used and a person, that you can contact when you have a question.
- The database, should be accessible by the employees of Tauw and also external companies (in the future).

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

### Colin Dörr
<details>


#### Korte intro
In 2014 I started with my study (Communication en Multimedia Design (CMD)). In the beginning, I avoided the coding, because I wanted to design for the web, but bit by bit, I have become a real Front-end Developer. I started learning more and more and wanted to improve my knoledge about coding, so I chose to take the minor web Developmet, because I would learn a lot.

In the "meesterproef", I need to show, that I have to prove, what I have learned the past months. I have chosen the following classes, to focus on:
- Web App from Scratch
- CSS to the Rescue
- Performance Matters
- Browser Technologies

##### Web App from Scratch
During Web App from Scratch, I have learned a new and better structured type of coding. I'm going to use the object literal type of coding, to make the code easy to understand and cleaner. I will also use IFFE's to make the variable a bit more secure.

##### CSS to the Rescue
During CSS to the Rescue, I have learned, that you can do a lot with CSS and don't need Javascript for everything. Thats why I'm going to use CSS, instaid of Javacript, to make the  complex interfaces.

##### Performance Matters
The make the website preforme better, I will try to make the website mostly server-side, to make to prefent the most browser problems. Also, because Tauw (the client) uses IE11, I will need to change/ make fallbacks for the IE version, so even the IE users can use the site like it supposed to be.

##### Browser Technologies
During Browser Technologies I learned the importance of a good HTML and CSS structure. Thats why, I will begin with a clean HTML and CSS structure and will only use the Clien-side Javascript, as enhancements. So even when the user has Javascript turned off, the site will still be accessible and usable.

</details>
#### My work
<details>

##### /lib/
- **[search.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/lib/search.js)** : Completly made by me.
- **[connector.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/lib/connector.js)**: I made the:
    - Functions, to edit a Sensors data and send those changes to the database.
    - Functions, to update the settings document in the database.
    - Functions, to remove a item from the databse.
    [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/lib/connector.js)

##### /public/javascripts/
- **[countItems.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/javascripts/countItems.js)**: Completly made by me.
- **[filters.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/javascripts/filters.js)**: Partly made by me. [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/javascripts/filters.js)
- **[imagePreview.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/javascripts/imagePreview.js)**: Completly made by me.
- **[requiredInputs.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/javascripts/requiredInputs.js)**: Completly made by me.
- **[rotateArrows.js](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/javascripts/rotateArrows.js)**: Completly made by me.

##### /public/stylesheets/
- **[_detail.scss](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/stylesheets/_detail.scss)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/stylesheets/_detail.scss)
- **[_filters.scss](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/stylesheets/_filters.scss)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/stylesheets/_filters.scss)
- **[_header.scss](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/stylesheets/_header.scss)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/stylesheets/_header.scss)
- **[_results.scss](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/stylesheets/_results.scss)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/stylesheets/_results.scss)
- **[aside.scss](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/stylesheets/aside.scss)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/stylesheets/aside.scss)
- **[category.scss](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/public/stylesheets/category.scss)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/public/stylesheets/category.scss)

##### /routes/
-  **[cms.js](https://github.com/ColinDorr/minor-tauw-sensoren/tree/master/TauwApp/routes/cms.js)**: Completly made by me.
- **[detail.js](https://github.com/ColinDorr/minor-tauw-sensoren/tree/master/TauwApp/routes/cms)**: Mostly made by me. [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/routes/detail.js)
- **[form.js](https://github.com/ColinDorr/minor-tauw-sensoren/tree/master/TauwApp/routes/form.js)**: Completly made by me.
- **[index.js](https://github.com/ColinDorr/minor-tauw-sensoren/tree/master/TauwApp/routes/index.js)**: Completly made by me.


##### /views/
- **[cms.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/cms.ejs)**: Completly made by me.
- **[form.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/form.ejs)**: Completly made by me.
- **[edit.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/edit.ejs)**: Completly made by me.

##### /views/partials/
- **[aside.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/aside.ejs)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/views/partials/aside.ejs)
- **[category.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/category.ejs)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/views/partials/category.ejs)
- **[detail.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/detail.ejs)**:Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/views/partials/detail.ejs)
- **[filters.ejs.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/filters.ejs)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/views/partials/filters.ejs)
- **[results.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/results.ejs)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/views/partials/results.ejs)
- **[search_results.ejs](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/views/search_results.ejs)**: Partly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/views/partials/search_results.ejs)

##### sensorseed.json
- **[sensorseed.json](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/sensorseed.json)**: Mostly made by me [(see commits)](https://github.com/ColinDorr/minor-tauw-sensoren/blame/master/TauwApp/sensorseed.json)

##### settingsseed.json
- **[settingsseed.json](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/TauwApp/settingsseed.json)**: Completly made by me.

</details>


### Nooroel Imamdi
<details>

#### Korte intro
Ik ben in 2014 tot de opleiding *Communication and Multimedia Design* (CMD) toegetreden als Visual Interface Designer. In de loop van de tijd ben ik me gaan richten op de techniek, met als doel om diversiteit te creëren in mijn werkzaamheden als CMD-er. De minor *Webdevelopment* was voor mij de uitgelezen mogelijkheid om verder tot verdieping over te gaan in code-land.

In de meesterproef is het de bedoeling om tenminste vier vakken uit de minor toe te passen in het project. Op de volgende vakken leg ik de focus gedurende de meesterproef:

- Web App from Scratch
- CSS to the Rescue
- Performance Matters
- Browser Technologies

##### Web App from Scratch
Bij dit onderdeel is het van belang dat **JavaScript** wordt toegepast volgens de standaarden van het vak *Web App from Scratch*. Het plan is om deze toe te passen op de *map* die wordt aangelegd in de interface.

##### CSS to the Rescue
Het toepassen van CSS zal plaatsvinden bij het omzetten van het Visueel Design naar een werkend prototype.

##### Performance Matters
Het onderdeel *Performance Matters* zal worden voldaan door een service worker toe te voegen. Hiermee is het mogelijk om de website ook in offline-modus te blijven bezoekers als een gebruiker al eerder op de website is geweest.

##### Browser Technologies
Dit onderdeel wordt toegepast door al bij het coderen ervoor te zorgen dat de code die geschreven wordt op meerdere web browsers wordt ondersteund en al dan niet een fallback wordt gemaakt.

###### Documentation

**part: filter**
The filter-part contains the option to folding out relevant content. `html5` makes this possible by the `details`-tag. The problem that occurred is that this tag is not supported in `Internet Explorer` and `Microsoft Edge` while the main users use a Microsoft-machine with these browsers.

![HTML5 details support by Can I Use](https://github.com/ColinDorr/minor-tauw-sensoren/blob/master/readme-files/html5-details-tag-support-caniuse.png?raw=true)
*Can I Use* about support `details` in webbrowsers

I solved this with `CSS` by using the `checked`-selector to display an unordered list with the results. Example:
```
input:checked + ul {}
```

With this method we don't need to use JavaScript and the support of this method starts from `Internet Explorer` 10.

</details>

### Jaimie de Rijk

<details>

#### Korte intro
Ik ben een vierde jaars CMDer die zich focust op webdevelopment. Vorig jaar heb ik mij bij de meesterproef te veel gefocust op backend development. Dus bij deze herkansing zal ik mij veel meer richten op frontend.

De vier vakken die ik wil toepassen:

- Web App from Scratch
- CSS to the Rescue
- Performance Matters
- Browser Technologies
- real time web

**Web App from Scratch**
Interactie bouwen volgens de standaarden van het vak *Web App from Scratch* met behulp van javascript.

**CSS to the Rescue**
CSS die ik me kan herineren uit de minor toepassen op het werkende prototype.

**Performance Matters**
Tijdens het coderen bewust zijn van performance. En andere trucjes toepassen om snelheid te behouden.

**Browser Technologies**
Wij bouwen de app volgens progressive enhancement principe op.

**Realtime web ?**
Realtime resultaten van filter en zoek acties

</details>

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


##### for live version
- connect via shell
```
$ mongo "mongodb://tauw-shard-00-00-rkjng.mongodb.net:27017,tauw-shard-00-01-rkjng.mongodb.net:27017,tauw-shard-00-02-rkjng.mongodb.net:27017/test?replicaSet=tauw-shard-0" --authenticationDatabase admin --ssl --username jaimie2 --password <PASSWORD>
```
- import via shell
```
$ mongoimport --host "tauw-shard-00-00-rkjng.mongodb.net:27017,tauw-shard-00-01-rkjng.mongodb.net:27017,tauw-shard-00-02-rkjng.mongodb.net:27017" --authenticationDatabase admin --ssl --username jaimie2 --password askjaimie --db tauw --collection sensors --drop --file "./sensorseed.json"
```
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
