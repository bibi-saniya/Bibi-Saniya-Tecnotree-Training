const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.w3schools.com/spaces/index.html';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(body);
    const links = $('a').map(function() {
      return $(this).text();
    }).get();
    fs.writeFile('links.txt', links.join('\n'), function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Data saved to file');
      }
    });
  } else {
    console.error('Error fetching data');
  }
});
