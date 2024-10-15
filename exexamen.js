/*
let jsonObj = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2020,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};

// Function to format the JSON into a readable string
function formatSquad(jsonObj) {
    // Header
    let formattedString = `--------------------${jsonObj.squadName.toUpperCase()}--------------------\n`;
    formattedString += `---Ciudad de origen: ${jsonObj.homeTown} // Fecha origen: ${jsonObj.formed}---\n\n`;

    // Formatting each member's information
    jsonObj.members.forEach(member => {
        formattedString += `Nombre: ${member.name}\n`;
        formattedString += `Edad: ${member.age}\n`;
        formattedString += `Identidad secreta: ${member.secretIdentity}\n`;
        formattedString += `Poderes: ${member.powers.join(", ")}\n`;
        formattedString += "--------------------\n";
    });

    return formattedString;
}

// Call the function and log the result
console.log(formatSquad(jsonObj));


 VALE, PARA EL 3 SOLO HAY QUE CONTAR LETRAS

let texto1 = "Alan b"
let texto2 = "Lana b"

let count = 0;

function numLetras(texto) {
    texto.replaceAll(' ', '')
    for (char in texto) {
        count++
    }
    return count;
}

function anagramable(texto1, texto2) {

}



let texto1 = "Alan b"
let texto2 = "Lana a"

function anagramable(texto1, texto2) {
    // Normalize by removing spaces and converting to lowercase
    let normalized1 = texto1.replaceAll(' ', '').toLowerCase();
    let normalized2 = texto2.replaceAll(' ', '').toLowerCase();
    
    // If they have different lengths, they can't be anagrams
    if (normalized1.length !== normalized2.length) {
        return false;
    }
    
    // Sort the characters and compare the two strings
    let sorted1 = normalized1.split('').sort().join('');
    let sorted2 = normalized2.split('').sort().join('');
    
    return sorted1 === sorted2;
}


console.log(texto1 + " y " + texto2 + (anagramable(texto1, texto2) ? " Son Anagramas" : " No son Anagramas")); // Output: true


// EJ 1 (2)

function myFunction() {
    let rand = Math.floor((Math.random() * 10) + 1);
    alert('Rando = ' + rand);
    let numero = prompt('Dame un numero entre el 1 y el 10');
    while (numero > 10 | numero < 1) {
        numero = prompt('Dame un numero entre el 1 y el 10');
    }
    if (rand == numero) {
        alert('¡Enhorabuena, has acertado!')
    } else {
        alert('Lo sentimos, NO has acertado.')
    }
}


// EJ 2 (2)

const letras = new Map([
    ["T", 0],
    ["R", 1],
    ["W", 2],
    ["A", 3],
    ["G", 4],
    ["M", 5],
    ["Y", 6],
    ["F", 7],
    ["P", 8],
    ["D", 9],
    ["X", 10],
    ["B", 11],
    ["N", 12],
    ["J", 13],
    ["Z", 14],
    ["S", 15],
    ["Q", 16],
    ["V", 17],
    ["H", 18],
    ["L", 19],
    ["C", 20],
    ["K", 21],
    ["E", 22]
  ]);

class NIF {
    constructor(number, letter) {
        this.number = number;
        this.letter = letter;
    }
    esCorrecto(number) {
        if (this.number.toString().length !== 7) {
            return false;
        }
        if (letras.get(this.letter) !== (this.number%23)) {
            return false;
        }
        return true;
    }

}



// EJ 3 (2)

let array = [15];

for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 15)
}

for (let j = 0; j < array.length; j++) {
        console.log("Elemento: " + j);
    for (let k = 0; k < array[j]; k++) {
        console.log("*")
    }
    
}
*/
// GPT
/*
let array = Array.from({ length: 15 }, () => Math.floor(Math.random() * 15));

for (let j = 0; j < array.length; j++) {
    console.log("Elemento: " + j);
    console.log("*".repeat(array[j]));
}
*/ 