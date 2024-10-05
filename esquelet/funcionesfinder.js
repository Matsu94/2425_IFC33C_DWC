let notas = [];

let resultadosEncontrados = [];

function busqueda(notas, listaCanciones) {
    let largo = notas.length;
    for (let i = 0; i <= listaCanciones.length; i++) {
        for (let j = 0; j <= listaCanciones[i].notas.length; j++) {
            if (notas[i] ===  listaCanciones.notas[j]) {
                
            }            
        }
        
    }
}

document.getElementsByClassName("key").addEventListener("click", function() {
    notas.push(innerHTML);
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