const externalUrl = 'https://dog.ceo/api/breeds/image/random'
const axios = require('axios');

var dogs = [];
let count = 0;

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

    createdog: (req, res) => {
        let newDog = {...req.body, id: count}
        dogs.push(newDog)
        count++
        res.send(dogs)
    },
    getdogs: (req, res) => {
        res.send(dogs)
    },
    update: (req, res) => {
        dogs.forEach((response, i) =>
        {
            if(+response.id === +req.params.id)
            {
               response.dogname = req.body.dogname
            };
        });

        res.send(dogs);
    },
    delete: (req, res) =>
    {
        let index = null;
        dogs.forEach((response, i) =>
        {
            if(+response.id === +req.params.id)
            {
                index = i;
            };
        });
        
        dogs.splice(index, 1);
        res.status(200).send(dogs);

//     listnames: (req, res) =>
//     {
//         // let index = names.length+1;
//         let inputIndex = 1;
//         for (var i = 0; i<names.length; i++)
//         {
//             if (names[i].id !== inputIndex)
//             {    
//                inputIndex = names[i-1].id + 1;
//                break;
//             }
//             else
//             {
//                 inputIndex++;
//             }
//         }
//         //console.log(inputIndex);
//         const { name } = req.body;
//         let response =
//         {
//             id: inputIndex,
//             answer: name
//         };
//         names.splice(i, 0, response);
        
//         res.status(200).send(names);
// }
}
}
