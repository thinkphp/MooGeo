MooGeo
======

This is a simple plugin MooTools delivering various geo tasks like geolocation, reverse geocoding and content analysis.

![Screenshot](http://farm5.static.flickr.com/4138/4742102395_a0daa4e42e_b.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.
       
       #HTML
       <script type="text/javascript" src="mootools-core.js"></script>
       <script type="text/javascript" src="geo.js"></script>

In your JS

     //you can scrape a certain document at a URL for geographical locations: 
     new MooGeo('http://mootools.net/developers/',{
              onComplete: function(o) {
                  if(o.place){
                    var out = '';
                    var all = o.place.length;
                       for(var i=0;i<all;i++){
                             out+=o.place[i].name+'<br/>';
                       };
                     $('info').set('text',out);
                  }
              }  
     });        

     //you can find the user (using the W3C geolocation API)
     new MooGeo('visitor',{
         onComplete: function(o) {
               var out = '<h3>Information from your IP</h3>'+
               '<ul>'+ 
               '<li>WOEID: '+ o.place.woeid + '</li>'+ 
               '<li>Latitude: '+ o.place.centroid.latitude + '</li>'+ 
               '<li>Longitude: '+ o.place.centroid.longitude + '</li>'+ 
               '<li>Country: '+ o.place.country.content + '</li>'+ 
               '<li>Country Code: '+ o.place.country.code + '</li>'+ 
               '<li>Postal Code: '+ o.place.postal.content + '</li>'+ 
               '</ul>';
               $('info').set('html', out);
         }  
     });      

     or
     
     //you can find geographical data from a text
     new MooGeo('bucharest,ro',{
        onComplete: function(o) {
              $('info').set('text',o.place.name+' ('+o.place.centroid.latitude+', '+o.place.centroid.longitude+')');
        }  
     });        

     or

     //you can get the place from an IP number
     new MooGeo('188.25.34.67',{
        onComplete: function(o) {
              $('info').set('text',o.place.name + ',' + o.place.country.content);
        }  
     });    

     or 

     //you can get all kind of data from a latitude/longitude pair.
     new MooGeo(44.4333,26.1000,{
          onComplete: function(o) {
              $('info').set('text',o.place.name + ',' + o.place.country.content);
          }  
     });  

     //you can send the lat/lon as an array
     new MooGeo([44.4333,26.1000],{
          onComplete: function(o) {
              $('info').set('text',o.place.name + ',' + o.place.country.content);
          }  
     });  

     //you can grab simply the user's ip 
     new MooGeo('ipvisitor',{
         onComplete: function(o) {
               $('info').set('text', o.ip);
         }  
     });      

In your HTML source: 

       #HTML
       <div id="info">Loading info...</div>

Screenshots
-----------

![Screenshot](http://farm5.static.flickr.com/4138/4742591148_31857e3460_b.jpg)
![Screenshot](http://farm5.static.flickr.com/4140/4742591118_c1912f4024_b.jpg)
![Screenshot](http://farm5.static.flickr.com/4074/4741952699_330e828822_b.jpg)
![Screenshot](http://farm5.static.flickr.com/4081/4745513304_b417555ceb_b.jpg)
![Screenshot](http://farm5.static.flickr.com/4135/4744892361_5b2460e506_b.jpg)

       