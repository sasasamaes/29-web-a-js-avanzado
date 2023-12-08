const axios = require('axios');

const options = {
  url: 'https://rickandmortyapi.com/api/character',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`
  }
}

axios(options)
.then((response) => {
  console.log(response.data.results[0]);
})
.catch((error) => {
  console.log(error);
});