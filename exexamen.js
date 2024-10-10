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


/* VALE, PARA EL 3 SOLO HAY QUE CONTAR LETRAS

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

*/


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
