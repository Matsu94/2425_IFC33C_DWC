/* hago un array o diccionario o lo que sea con los nombres de las cartas,
   mejor diccionario para hacer numero - nombre carta, y al darle a jugar tiro una 
   función que saque 5 al azar y los meta en un array, esos 5 hay que eliminarlos de la lista
   para "eliminarlos" podríamos decirle cuando eliga un valor que vea si está en el array
   y si no está es valido para entrar, una vez mostradas las imagenes por pantalla la función
   nos dice qué tenemos de mano, par, trio, etc. . .   
*/

function repartidor() {
    const baraja = [
        "2_of_clubs.png", "2_of_hearts.png", "2_of_spades.png", "2_of_diamonds.png",
        "3_of_clubs.png", "3_of_hearts.png", "3_of_spades.png", "3_of_diamonds.png",
        "4_of_clubs.png", "4_of_hearts.png", "4_of_spades.png", "4_of_diamonds.png",
        "5_of_clubs.png", "5_of_hearts.png", "5_of_spades.png", "5_of_diamonds.png",
        "6_of_clubs.png", "6_of_hearts.png", "6_of_spades.png", "6_of_diamonds.png",
        "7_of_clubs.png", "7_of_hearts.png", "7_of_spades.png", "7_of_diamonds.png",
        "8_of_clubs.png", "8_of_hearts.png", "8_of_spades.png", "8_of_diamonds.png",
        "9_of_clubs.png", "9_of_hearts.png", "9_of_spades.png", "9_of_diamonds.png",
        "10_of_clubs.png", "10_of_hearts.png", "10_of_spades.png", "10_of_diamonds.png",
        "jack_of_clubs.png", "jack_of_hearts.png", "jack_of_spades.png", "jack_of_diamonds.png",
        "queen_of_clubs.png", "queen_of_hearts.png", "queen_of_spades.png", "queen_of_diamonds.png",
        "king_of_clubs.png", "king_of_hearts.png", "king_of_spades.png", "king_of_diamonds.png",
        "ace_of_clubs.png", "ace_of_hearts.png", "ace_of_spades.png", "ace_of_diamonds.png"
    ];


    let mano = [];
    let n = 5;
    for (let j = 0; j < n; j++) {
        let a = Math.floor(Math.random() * baraja.length);
        if (!mano.includes(a)) {
            mano.push(a)
        } else {
            n++
        }
    }

    let cartas = "";
    for (let i = 0; i < mano.length; i++) {
        cartas += `<img src="cards/${baraja[mano[i]]}">`
    }

    document.getElementById("mano").innerHTML = cartas;
}

