const externalUrl = 'https://dog.ceo/api/breeds/image/random'
const axios = require('axios');

// var titles =
// [ 
//     {
//         id: 1,
//         title: "Sir "
//     },
//     {
//         id: 2,
//         title: "Mr. "
//     },
//     {
//         id: 3,
//         title: "Lord "
//     },
//     {
//         id: 4,
//         title: "Lady "
//     },
//     {
//         id: 5,
//         title: "Madam "
//     },
//     {   
//         id: 6,
//         title: "Ms. "
//     },
//     {
//         id: 7,
//         title: "Princess "
//     },
//     {
//         id: 8,
//         title: "Admiral "
//     },
//     {
//         id: 9,
//         title: "Snoop "
//     },
//     {
//         id: 10,
//         title: "Chad "
//     }
// ];

var names =
[ 
    {
        id: 1,
        name: "Butters"
    },
    {
        id: 2,
        name: "Snowy"
    },
    {
        id: 3,
        name: "Toaster Face"
    },
    {
        id: 4,
        name: "Dog"
    },
    {
        id: 5,
        name: "Doofus"
    },
    {   
        id: 6,
        name: "Scratch-Master 3000"
    },
    {
        id: 7,
        name: "Buddy"
    },
    {
        id: 8,
        name: "Cat"
    },
    {
        id: 9,
        name: "Ungoliant"
    },
    {
        id: 10,
        name: "Chad"
    }
];

module.exports = 
{
    getdog: (req, res) => {
        
        axios.get(`${externalUrl}`).then(response => {
            res.send(response.data);
        });
    
    },

    getname: (req, res) => {
        res.status(200).send(names);
    },

    listnames: (req, res ) => {

    }
}
    
