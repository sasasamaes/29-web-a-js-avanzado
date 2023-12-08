const request = require('request');

const config = {
  'method': 'get',
  'url': 'https://rickandmortyapi.com/api/character',
  'headers': {}
}

request(config,(error, response) => {
  if(error) throw new Error(error);
  const body = JSON.parse(response.body);
  console.log(body.results[0]);
})
