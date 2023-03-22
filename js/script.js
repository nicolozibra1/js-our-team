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
        image: '../img/wayne-barnett-founder-ceo.jpg',
        description: 'Wayne is our Founder and CEO, with over 20 years of experience in the industry. He is a visionary leader who inspires our team to push the boundaries and deliver exceptional results.'
    },
    {
        name:'Angela',
        surname:'Caroll',
        role:'Chief Editor',
        image:'../img/angela-caroll-chief-editor.jpg',
        description:'Angela is a determined and competent woman, with extensive experience as a Chief Editor. Thanks to her ability to effectively manage teamwork and make quick and accurate decisions, she has been able to bring multiple editorial projects to success.'
    },
    {
        name:'Walter',
        surname:'Gordon',
        role:'Office Manager',
        image:'../img/walter-gordon-office-manager.jpg',
        description:'Walter is a precise and reliable Office Manager with great attention to detail. Thanks to his ability to organize and coordinate the work of employees, the office runs smoothly and always achieves its goals.'
    },
    {
        name:'Angela',
        surname:'Lopez',
        role:'Social Media Manager',
        image:'../img/angela-lopez-social-media-manager.jpg',
        description:'Angela is a skilled and creative Social Media Manager, with a talent for crafting engaging content and growing brand awareness. Her strategic approach and knowledge of social media trends have led to impressive results for her clients.'
    },
    {
        name:'Scott',
        surname:'Estrada',
        role:'Developer',
        image:'../img/scott-estrada-developer.jpg',
        description:'Scott is a talented and innovative Developer, with a strong passion for coding and problem-solving. His technical skills and attention to detail have contributed to the successful launch of several complex software projects.'
    },
    {
        name:'Barbara',
        surname:'Ramos',
        role:'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg',
        description:'Barbara is a skilled and creative Graphic Designer, with an eye for detail and a passion for visual storytelling. Her designs are both aesthetically pleasing and effective in communicating the intended message.'
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
                        <div class="card w-75 mb-4">
                            <div class="card-head">
                                <img src="../img/${teamPeople.image}">
                                <div class="square"></div>
                            </div>
                            <div class="card-body">
                                <h4>${teamPeople.role}</h4>
                                <h5 class="text-uppercase">${teamPeople.name} ${teamPeople.surname}</h5>
                                <p>${teamPeople.description}</p>    
                            </div>
                        </div>
                    </div>`
    console.log(template);
    rowHtml += template;
}

let row = document.querySelector('.row');
console.dir(row);
row.innerHTML = rowHtml;