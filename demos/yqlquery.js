//let's build following constructor for YQL
function YQLQuery(query,callback,format) {
     this.query = query;
     this.callback = callback || function(){};
     this.format = format || 'xml';
     this.fetch = function() {
           if(!this.query || !this.callback) {
                    throw new Error("YQLQuery.fetch(): Parameters may be undefined!"); 
           } 

           var scriptEl = document.createElement('script'),
               uid = 'yql'+ +new Date(),
               encodedQuery = encodeURIComponent(this.query),
               instance = this;

            YQLQuery[uid] = function(json) {
               instance.callback(json);
               delete YQLQuery[uid];
               document.body.removeChild(scriptEl);  
            };

            scriptEl.src = 'http://query.yahooapis.com/v1/public/yql?q='+
                            encodedQuery + '&format='+this.format+'&callback=YQLQuery.' + uid+
                           '&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
            if(window.console){console.log(decodeURIComponent(encodedQuery));}
            document.body.appendChild(scriptEl);         
     };          
};