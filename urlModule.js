const url = require('url');
const address = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
const parseInfo = url.parse(address, true);

/*The parse method returns an object containing url properties*/
console.log(parseInfo.host);
console.log(parseInfo.pathname);
console.log(parseInfo.search);

/*The query property returns an object with all the querystring parameters as properties:*/
const query = parseInfo.query;
console.log(query.month);
console.log(query.year);

