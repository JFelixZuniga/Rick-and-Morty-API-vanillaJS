import API from "./api.js";

const api = new API();

const $characterContainer = document.querySelector("#character-container");
// const characterTemplate = `
//     <article class="character">
//       <div class="character-grid">
//         <h2>Rick Sanchez</h2>
//         <img src="" alt="">
//       </div>
//     </article>
//   `;

class Character {
  constructor({ name, image }) {
    this.name = name;
    this.image = image;
    this.render();
  }
  build() {
    return `
    <article class="character">
      <div class="character-grid">
        <h2>${this.name}</h2>
        <img src=${this.image} alt="">
      </div>
    </article>
  `;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}

//initApp será el personaje inicial con el que arrancamos
async function initApp(initCharacterId) {
  const CharacterData = await api.getCharacter(initCharacterId);
  console.log(CharacterData )
  // const rick = new Character(CharacterData);
}

initApp(1);

// console.log(api.getCharacter(2))
