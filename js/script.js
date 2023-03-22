// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// MYSCRIPT
const ourTeam = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name:'Angela',
        surname:'Caroll',
        role:'Chief Editor',
        image:'../img/angela-caroll-chief-editor.jpg'
    },
    {
        name:'Walter',
        surname:'Gordon',
        role:'Office Manager',
        image:'../img/walter-gordon-office-manager.jpg'
    },
    {
        name:'Angela',
        surname:'Lopez',
        role:'Social Media Manager',
        image:'../img/angela-lopez-social-media-manager.jpg'
    },
    {
        name:'Scott',
        surname:'Estrada',
        role:'Developer',
        image:'../img/scott-estrada-developer.jpg'
    },
    {
        name:'Barbara',
        surname:'Ramos',
        role:'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg'
    },
];

console.log(ourTeam);

// CREO UN CICLO FOR PER AVERE LA POSSIBILTà DI STAMPARE GLI OGGETTI SINGOLARMENTE
let rowHtml = '';

for (let i = 0; i < ourTeam.length; i++) {
    console.log('object:' + ourTeam[i].name);
    console.log(ourTeam[i]);

    const teamPeople = ourTeam[i];
    const template = 
                    `<div class="col-4 d-flex flex-wrap justify-content-center">
                        <div class="card w-75 mb-5">
                            <div class="card-head">
                                <img src="../img/${teamPeople.image}">
                                <div class="square"></div>
                            </div>
                            <div class="card-body">
                                <h4>${teamPeople.role}</h4>
                                <h5 class="text-uppercase">${teamPeople.name} ${teamPeople.surname}</h5>    
                            </div>
                        </div>
                    </div>`
    console.log(template);
    rowHtml += template;
}

let row = document.querySelector('.row');
console.dir(row);
row.innerHTML = rowHtml;