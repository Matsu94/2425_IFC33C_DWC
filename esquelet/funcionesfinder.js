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

document.getElementsByClassName("key").addEventListener("click", function() {
    notas.push(this.innerHTML);
});

let listaCanciones = [
            {cancion:"La Balanguera", notas:["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LAS", "LAS"]},
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
        if (notas[0] = listaCanciones.notas[i]) {
            
            
        }*/ 