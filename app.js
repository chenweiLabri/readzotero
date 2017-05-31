var request = require('request');

var key = 'ZNIZRdkgmTYKpSb80kmK6X44';

request('https://api.zotero.org/groups/121453/collections/ZNIZRdkgmTYKpSb80kmK6X44/items/top?v=3', function (error, response, body) {
    console.log(body);
});
