// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');


console.log('download start');
request.get('https://sytantris.github.io/http-examples')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Response content type', response.headers['content-type'])
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
console.log('done');
