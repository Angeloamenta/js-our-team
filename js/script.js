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
console.log(teamCard);

for (let i = 0; i < team.length; i++) {
  const element = team[i];
  console.log(element);

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