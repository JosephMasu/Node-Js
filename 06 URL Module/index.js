import {URL} from 'url';

const myURL = new URL("https://wwww.example.com:8080/p/a/t/h?query=string#hash");

// console.log(myURL.hash);
// console.log(myURL.host);
// console.log(myURL.port);
// console.log(myURL.hash);
// console.log(myURL.href);
// console.log(myURL.protocol);
// console.log(myURL.search);
console.log(myURL.searchParams);


