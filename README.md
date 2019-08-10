# medellin-heritage

View the project at [www.patrimoniomedellin.com](http://www.patrimoniomedellin.com/)

The Unity of Memory and Heritage, a program of the Medellín Mayor’s Office, wanted a web application with an enriching, easy-to-navigate interface that provides locals and visitors with a way of searching and locating all the 400+ sculptures and architectural sites that are part of the Medellín’s cultural heritage. Mobility Labs' solution is built on top of the Leaflet JavaScript library, using React and GeoJSON for the data. It displays a map of Medellín using a client-suggested color scheme. Different icons are used to indicate the type of heritage (sculpture or archeological finding) at a location. By clicking on the icons, users can access pictures and basic descriptions. Users can also use the predictive search feature to find heritage objects.

##Technical Instructions:

###Google Analytics

You will need to create a config.json file in the /client folder.  This will contain your google analytics code, as follows: 

```
{
  "google_analytics_id":"UA-xxxxxx"
}
```
The analytics code will not be added during development.  To add Google Analytics during production, run the following command:

```
$ gulp copy --production
```

###To run the app: 

* clone the repo to your local system
* switch to /client
* run npm install
* run gulp
* switch to /server
* run npm install
* start the server using `node server`
* view it on http://localhost:4000/