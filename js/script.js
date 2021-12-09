const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.


const container = document.querySelector(".team-container");
const teamCard = document.querySelector(".team-card");


// faccio un ciclo for che giri su tutto l'array teams

for (let i = 0; i < team.length; i++) {

  // creo una costante che rappresenti un elemento per ogni ciclo 

  const element = team[i];
  console.log(element);

  // inserisco nell'html con += la mia stringa con ogni elemento cambiato in base al giro che compio sull'array


   container.innerHTML += 
   `
   <div class="team-card">
            <div class="card-image">
              <img
                src="img/${element.image}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${element.name}</h3>
              <p>${element.role}</p>
            </div>
          </div>
   `
}

// bonus con immagine mario.jpg, nino.jpg

const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImg = document.getElementById('image');
const button = document.getElementById("addMemberButton")

button.addEventListener("click", function () {
  let nameVal = inputName.value;
  console.log(nameVal);
  let roleVal = inputRole.value;
  console.log(roleVal);
  let imgVal = inputImg.value;
  console.log(imgVal);

  const object = 
  {
    name: nameVal,
    role: roleVal,
    image: imgVal,
  };

  team.push(object);
  console.log(team);

  container.innerHTML += 
   `
   <div class="team-card">
            <div class="card-image">
              <img
                src="img/${imgVal}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${nameVal}</h3>
              <p>${roleVal}</p>
            </div>
          </div>
   `
})