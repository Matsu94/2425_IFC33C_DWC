let notas = [];
let resultadosEncontrados = [];

function busqueda(notas, listaCanciones, resultadosEncontrados) {
    
    let largo = notas.length;

    for (let i = 0; i <= listaCanciones.length; i++) {
        for (let j = 0; j <= listaCanciones[i].notas.length - largo; j++) {
            let valido = 0;
            let k = j;

            while (valido <= largo && notas[valido] === listaCanciones[i].notas[k]) {
                k++
                valido++                    
            }
        }

        if (valido == largo) {
            resultadosEncontrados.push(listaCanciones[i].cancion)
        }   break;
        
    }
}

let keys = document.getElementsByClassName("key");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function() {
        let nota = this.querySelector(".key").innerHTML;
        notas.push(nota);
        busqueda(notas, listaCanciones, resultadosEncontrados);
        document.getElementById("notas").innerHTML = notas.join(" ");
        document.getElementById("resultats").innerHTML = resultadosEncontrados.join("<br>");
    });
}

let listaCanciones = [
            {cancion:"La Balanguera", notas:["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"]},
            {cancion:"Happy Birthday", notas:["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"]}
]



/* A VER, OPCIONES, METER LAS NOTAS EN UN ARRAY, PASARLO A STRING Y 
   CHECKEAR REGEX CON LAS CANCIONES DE LA LISTA PASADAS A REGEX, SI SALE 
   RESULTADO GUARDAMOS NOMBRE EN ARRAY DE RESULTADOS Y HACEMOS AOUTPUT DE 
   RESULTADOS. PODRÍAMOS GUARDAR LAS NOTAS DIRECTAMENTE COM STRING Y 
   AHORRARNOS UNA CONVERSIÓN 
   OTRA SERÍA COMPARAR ARRAY NOTAS CON SECCIONES DE ARRAYS DE NOTAS DE 
   CANCIONES, COMPARAMOS PRIMERA NOTA Y SI SALE COMPARAMOS LA SIGUIENTE 
   DE CADA UNO EN PLAN N - I DND N = NOTAS.LENGTH, ESTE PARECÍA MAS JODIDO
   ANTES DE ESCRIBIRLO 

   JAER, CON LO TOCADA DE HVS QUE FUERON LOS BUCLES (Y CREO SE PODRÍAN MEJORAR)
   ME HABRÍA QUEDADO CON LA PRIMER OPCION, HACER STRING, PASAR NOTAS DE CANCIONES 
   A STRING TMB Y TIRARLE UN REGEX T.T 
        if (notas[0] = listaCanciones.notas[i]) {
            
            
        }*/ 