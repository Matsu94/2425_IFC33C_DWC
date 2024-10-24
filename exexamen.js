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

let array = new Array(15);

for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 15)
}

for (let j = 0; j < array.length; j++) {
        console.log("Elemento: " + j);
    for (let k = 0; k < array[j]; k++) {
        console.log("*")
    }
    
}
// GPT

let array = Array.from({ length: 15 }, () => Math.floor(Math.random() * 15));

for (let j = 0; j < array.length; j++) {
    console.log("Elemento: " + j);
    console.log("*".repeat(array[j]));
}


// ITERACIONES DE LO QUE SEA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
let n = 10;
let a = [10, 2, 3, 4, 5, -6, 7, 8, 9, -1]
let s = "Texto random con estacios"

// Print all even numbers from 0 – 10
/*
for (let i = 0; i < n/2 + 1; i++) {
    console.log(2*i)
}

// Print a table containing multiplication tables

for (let i = 0; i <= n; i++) {
    console.log("Tabla del " + i + ":\n")
    for (let j = 0; j <= 10; j++) {
        console.log(j + " * " + i + " = " + j*i)        
    }
    console.log("")
}

// Create a length converter function m to km

function converter(value) {
    console.log(value + "m son " + value/1000 + "km")
}

converter(2000)


// Calculate the sum of numbers within an array

let suma = 0;
let suma2 = 0;

for (let i = 0; i < a.length; i++) {
    suma += a[i] 
}

console.log(suma)

let ar = new Array(n);
for (let j = 0; j < ar.length; j++) {
    ar[j] = Math.floor(Math.random() * (n+1));
    suma2 += ar[j];
}

let array = Array.from({ length: n }, () => Math.floor(Math.random() * (n+1)));

console.log(ar + "\n" + suma2);

// Create a function that reverses an array

function inverter(array) {

    let arrayInverso = new Array(array.length); // EN JS TMB PUEDO PONER SOLO = [] NO IMPORTA ESPECIFICAR 
                                                // LARGO PARA LLENAR DE MANERA DIFERENTE A HABITUAL
    for (let i = 0; i < array.length; i++) {
        arrayInverso[array.length -1 - i] = array[i];
    }

    return arrayInverso;
}

console.log(inverter(a))


// Sort an array from lowest to highest

console.log(a.sort(function(a, b){return a - b}));

// Create a function that filters out negative numbers

function siemprePositivo(array) {

    let arrayPos = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPos.push(array[i]);
        }
    }

    return arrayPos;
}

console.log(siemprePositivo(a));

// Remove the spaces found in a string

let trimmed = s.replaceAll(" ", "")

console.log(trimmed);

// Return a Boolean if a number is divisible by 10

console.log(n%10 === 0);

// Return the number of vowels in a string

console.log("Hay " + s.match(/a|e|i|o|u/gi).length + " vocales.")

// Create a function that finds the maximum number in an array

function mayor(array) {
    let m = array[0]
    for (let i = 0; i < array.length; i++) {
        if (m < array[i]) {
            m = array[i]
        }
    }
    console.log("El valor más alto (en terminnos no absolutos) del array " + a + " es: " + m)
}

mayor(a);

// Check if a string is a palindrome

let pli = "kayaks";
let pl = "acurrucas";

function evaluadorPali(string) {
    let low = string.toLowerCase();
    let pali = true;

    if (low.length % 2 === 0) {
        for (let i = 0; i < low.length/2; i++) {
            if (low[i] !== low[low.length-i-1]) {
                pali = false;
                break;
            }            
        }
    } else {
        for (let i = 0; i < (low.length -1)/2; i++) {
            if (low[i] !== low[low.length-i-1]) {
                pali = false;
                break;
            }            
        }
    }
    console.log(pali)
    console.log(pali ? "Es palindromo" : "No es palindromo");
}

evaluadorPali(pl);

Tasques cícliques
Les famílies Galmés, Duran i Sastre volen planificar les tasques setmanals que
han de fer a les seves respectives cases per repartir-les equitativament entre els
seus membres.	
La família Galmés consta de: pare, mare, fill i filla i les seves tasques són: posar
la rentadora, fer la cuina neta i fer el bany net.	
La família Duran consta de: pare, mare, fill i filla i només vol repartir dues
tasques setmanals: planxar i fer el bany net.	
Finalment, la família Sastre consta de: pare, mare, fill, filla gran i filla petita i vol
repartir 5 tasques: posar la rentadora, fer la cuina neta, netejar la casa, planxar i fer
el bany net.	
La família Galmés vol una planificació anual de les seves tasques (52 setmanes).	
La família Duran, en canvi, vol una planificació mensual de 4 setmanes.	
La família Sastre, vol una planificació de 12 setmanes, és a dir, trimestral.	
Creeu un algorisme (només un) que resolgui qualsevol d'aquestes casuístiques
(o d'altres futures) i que mostri per pantalla la solució proporcionada per tal que,
cada setmana, el programa digui quina tasca ha de fer cada membre de la família.


let tasquesG = ["rentadora", "cuina", "bany"]
let tasquesD = ["planxar", "bany"]
let tasquesS = ["rentadora", "cuina", "bany", "casa", "planxar"]

let galmes = ["pare", "mare", "fill", "filla"]
let duran = ["pare", "mare", "fill", "filla"]
let sastre = ["pare", "mare", "fill", "fillag", "fillap"]

let n = 52;

function repartidor(ints, arrayt, arrayf) {
    
    for (let i = 0; i < ints; i++) {

        let f = [];
        let t = [];
        let u = arrayt.length;
        let p = u

        for (let j = 0; j < u; j++) {
            let a = Math.floor(Math.random() * arrayf.length);
            if (!f.includes(a)) {
                f.push(a)
            } else {
                u++
            }
        }
        for (let j = 0; j < p; j++) {
            let a = Math.floor(Math.random() * arrayt.length);
            if (!t.includes(a)) {
                t.push(a)
            } else {
                p++
            }
        }
        let semana = "";
        for (let l = 0; l < t.length; l++) {
            semana+= (" " + arrayf[f[l]] + " " + arrayt[t[l]] + " |")            
        }
        console.log(`Semana ${i+1}:` + semana)
    }

}

repartidor(4, tasquesD, duran)



// GPT EN BASE A MIS ERRORES

let tasquesG = ["rentadora", "cuina", "bany"];
let tasquesD = ["planxar", "bany"];
let tasquesS = ["rentadora", "cuina", "bany", "casa", "planxar"];

let galmes = ["pare", "mare", "fill", "filla"];
let duran = ["pare", "mare", "fill", "filla"];
let sastre = ["pare", "mare", "fill", "fillag", "fillap"];

function repartidor(ints, arrayt, arrayf) {
    let tasksPerWeek = arrayt.length;  // Number of tasks to assign each week

    // Loop for each week
    for (let i = 0; i < ints; i++) {
        let f = [];  // Assigned family members for the week
        let t = [];  // Assigned tasks for the week
        
        // Assign a family member for each task
        for (let j = 0; j < tasksPerWeek; j++) {
            let memberIndex;
            do {
                memberIndex = Math.floor(Math.random() * arrayf.length);
            } while (f.includes(memberIndex));  // Retry if the member is already assigned
            
            f.push(memberIndex);
        }
        
        // Assign a unique task for each family member
        for (let j = 0; j < tasksPerWeek; j++) {
            let taskIndex;
            do {
                taskIndex = Math.floor(Math.random() * arrayt.length);
            } while (t.includes(taskIndex));  // Retry if the task is already assigned
            
            t.push(taskIndex);
        }

        // Construct the output for the current week
        let semana = "";
        for (let l = 0; l < t.length; l++) {
            semana += (` ${arrayf[f[l]]} ${arrayt[t[l]]} |`);
        }
        console.log(`Semana ${i + 1}:` + semana);
    }
}

repartidor(12, tasquesS, sastre);  // Example: Assign tasks for 2 weeks



*/
// GPT SOLO CON EL ENUNCIADO [LA CAGÓ PRIMERO Y DSPS SIMPLEMENTE HIZO QUE ROTASEN LOS FAMILIARES]

// Family tasks
let tasquesG = ["rentadora", "cuina", "bany"]; // 3 tasks for Galmés
let tasquesD = ["planxar", "bany"]; // 2 tasks for Duran
let tasquesS = ["rentadora", "cuina", "bany", "casa", "planxar"]; // 5 tasks for Sastre

// Family members
let galmes = ["pare", "mare", "fill", "filla"]; // Galmés family
let duran = ["pare", "mare", "fill", "filla"]; // Duran family
let sastre = ["pare", "mare", "fill", "fillag", "fillap"]; // Sastre family

// Function to assign tasks cyclically
function repartidor(weeks, familyMembers, familyTasks) {
    let numMembers = familyMembers.length;
    let numTasks = familyTasks.length;

    // Ensure there are enough family members for the tasks
    if (numTasks > numMembers) {
        console.log("Error: Not enough family members for all tasks.");
        return;
    }

    for (let i = 0; i < weeks; i++) {
        console.log(`Setmana ${i + 1}:`);

        // For each week, assign tasks cyclically but without duplicates
        let assignedMembers = [];
        let assignedTasks = [];
        
        for (let j = 0; j < numTasks; j++) {
            let memberIndex = (i + j) % numMembers; // Rotate family members
            let taskIndex = j % numTasks; // Rotate tasks

            // Assign a unique task to a unique member per week
            console.log(`${familyMembers[memberIndex]} -> ${familyTasks[taskIndex]}`);
            assignedMembers.push(familyMembers[memberIndex]);
            assignedTasks.push(familyTasks[taskIndex]);
        }
        console.log("--------------------------");
    }
}

// Galmés family, 52 weeks
repartidor(52, galmes, tasquesG);

// Duran family, 4 weeks
repartidor(4, duran, tasquesD);

// Sastre family, 12 weeks (quarterly)
repartidor(12, sastre, tasquesS);
