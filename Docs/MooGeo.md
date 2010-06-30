Class: MooGeo {#MooGeo}
=========================================================

This is a simple plugin MooTools delivering various geo tasks like geolocation, reverse geocoding and content analysis.

### Implements:

Options, Events


MooGeo Method: constructor {#MooGeo: constructor}
----------------------------------------------------------------------------------


### Syntax:

    new MooGeo(what,options);     

### Arguments:
1. what (*String*) Is a thing you want to analyse - this could be the URL to a web document, a text, an IP, a pair of latitude and longitude information, 'visitor' to detect the geographic location of the current visitor or 'ipvisitor' to grab visitor's IP.
3. options - (*object*) An object containing the MooGeo instance's options.

### options:

* endpoint  - (*String*, default to 'http://query.yahooapis.com/v1/public/yql?q=') it is endpoint YQL Service API.
* format - (*String*, default to 'json')  this is the format you want to receive the response from service.
* injectScript - (*String*, default to 'document.head')  the location for script tag injection.


### Returns:

* (*Object*) A new MooGeo instance

### Events:

### request

* (*function*) This event is fired whenever the instance actually send a request.It is passed one argument.

### Signature

   onRequest(yql)

#### Arguments
     1. yql - the statement YQL that is used in request.


### complete

* (*function*) This event is fired whenever the instance receives a successful response from the server. It is passed one argument.

### Signature

   onComplete(data)

#### Arguments
     1. data - (*Object*) the object that transports the response from server.

### success

* (*function*) this function is fired whenever the request has been completed and the data returns from the server. It is passed one argument.

### Signature

   onSuccess(data)

#### Arguments
     1. data - (*Object*) the object that contains the data from server.

### error

* (*function*) fired when the request failed.

### Signature

   onError(ob)

#### Arguments
     1. ob - (*Object*) an object that transports the error.

### failure

* (*function*) fired when the request failed.

### Signature

   onFailure(ob)

#### Arguments
     1. ob - (*Object*) an object that transports the error.

