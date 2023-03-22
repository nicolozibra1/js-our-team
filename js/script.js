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
        image:'../img/barbara-ramos-graphic-designer.jpg'
    },
];

console.log(ourTeam);

// CREO UN CICLO FOR PER AVERE LA POSSIBILTà DI STAMPARE GLI OGGETTI SINGOLARMENTE
for (let i = 0; i < ourTeam.length; i++) {
    console.log('object:' + ourTeam[i].name);
    console.log(ourTeam[i]);
}