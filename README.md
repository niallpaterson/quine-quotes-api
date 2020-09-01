# 👴🏻 Quine quotes API

An API for managing quotations from the logician and philosopher [Willard Van Orman Quine](https://en.wikipedia.org/wiki/Willard_Van_Orman_Quine). The API does not [print its own source code](https://en.wikipedia.org/wiki/Quine_(computing)).

## About

The API is built in Node.js using [express](https://www.npmjs.com/package/express). A local JSON file is used for its database. Interaction with the database is handled with Node's filesystem module. To prevent file corruption synchronous (and hence blocking) variants of the readFile and writeFile operations are used. In the future corruption will be avoided by using asynchronous operations coupled with [rwlock](https://www.npmjs.com/package/rwlock).

## Installation

The API is not hosted. It is intended to be run locally.

To install, clone this repository:

````shell
git clone https://github.com/niallpaterson/quine-quotes-api.git
````

Navigate into the directory and install the required packages:

````shell
npm i
````

Start the server by running the 'listen' script:

````shell
npm run listen
````

Alternatively, start the server with nodemon. 

If globally installed:

````shell
nodemon
````

else:

````shell
nodemon api/server.js
````

If the default port (3001) is in use, pass in an unused port prior to running the script:

````shell
port=3001 npm run listen
````

## Routes

The API defines four routes.

### GETs

````shell
GET /quotes   # returns the full list of quotations, ordered by date created
````

````shell
GET /quotes/random    # returns a random quotation from the list
````

### POST

````shell
POST /quotes/random   # posts a quotation to the list
````

To post a quote, a body containing a single JSON object is required. The object must have a single property with the key 'quote'. The value must be a string containing the quotation.

For example:

````json
{
  "quote": "A test quoatation for documentation purposes."
}
````

 If any other passed properties are passed no error is thrown, but the properties will be ignored.

The object is passed into an object factory where it is assigned an id using [uniqid](https://www.google.com/search?q=uniqid&oq=uniqid&aqs=chrome..69i57j69i65.1348j0j4&sourceid=chrome&ie=UTF-8), and a creation date specified as a UTC string.

An example output:

````json
{
  "quote": "Language is conceived in sin and science is its redemption.",
  "id": "5hblv78skeilnl4l",
  "dateCreated": "Mon, 31 Aug 2020 14:09:58 GMT"
}
````

### DELETE

````shell
DELETE /quotes/{id}   # destroys a quotation from the list
````

## Tests

The API's endpoints are tested with [jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest).

If jest is installed globally, run the tests with:

````shell
jest
````

Otherwise use:

````shell
npm test
````
