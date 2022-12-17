// En base a la api de Breaking Bad (https://breakingbadapi.com/),  vamos a 
// desarrollar una página dinámicamente en la que visualizar una galería con 
// las imagenes y los nombres de los personajes de la serie. Para ellos es 
// necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

// Si te fijas en la respuesta de la api, la imagen está en la propiedad 
// 'img' y el título en la propiedad 'name'.

const BB_URL = 'https://breakingbadapi.com';

const searchUrl = `${BB_URL}/api/characters?`  

const BBContainer = document.querySelector("#BB-container");
let BBData;

const renderBB = () => {
    const BBTemplate = `
      <div class="BBClass">
      <span>ID: ${BBData.id}</span>
      <h3>${BBData.name}</h3>
      <img src="${BBData.image}" alt="${BBData.name}" />
      </div>`;

      BBContainer.innerHTML += BBTemplate;
};
  
fetch(searchUrl)
  .then((res) => res.json())
  .then((response) => {
    BBData = {
      name: response.name,
      nickname: response.nickname,
      image: response.img,
    };

    renderBB();
  });