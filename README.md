# RunnersQ

This README outlines the details of collaborating on this Ember application.

RunnersQ is a little app that I've built to learn EmberJS and to play with data visualization.

**Strava**

The way this works right now is that I pull in my activities from Strava using the `strava-proxy`.  The proxy requires a `.env` file.  It should look something like this:

```
STRAVA_ACCESS_TOKEN=11bcYOURACCESSTOKENHERE1122
```
You can get your access token by creating an API App at http://labs.strava.com/developers/

**History**

I also have an array of old activites.  I'm a little lazy, so I just load all this data statically.  You can replace my data with your data in the Array that is returned from `getArchive` in the `history-store` service, or simply return an empty array `[]`.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Run / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Run Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

