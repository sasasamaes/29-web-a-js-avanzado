fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.results[0])
    //Dom manipulation
    data.results.map((character) => {
      const container = document.getElementById('container')
      const img = document.createElement('img')
      img.src = character.image
      container.appendChild(img)
    })
    
  })
  .catch((error) => {
    console.log(error)
  })
