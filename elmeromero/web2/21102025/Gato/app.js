let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let juegoActivo = true;

const celdas = document.querySelectorAll('.celda');
const infoDisplay = document.getElementById('info');
const botonReiniciar = document.getElementById('reiniciar');

const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function manejarClickCelda(event) {
    const celdaClicada = event.target;
    const indice = parseInt(celdaClicada.getAttribute('data-indice'));

    if (tablero[indice] !== '' || !juegoActivo) {
        return;
    }

    tablero[indice] = jugadorActual;
    
    // <--- CORRECCIÓN CLAVE AQUÍ --->
    celdaClicada.setAttribute('data-content', jugadorActual); 
    celdaClicada.textContent = jugadorActual; // Insertar el símbolo en el DOM
    // <--- -------------------- --->

    verificarResultado();

    if (juegoActivo) {
        cambiarJugador();
    }
}

function verificarResultado() {
    let hayGanador = false;

    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];

        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            hayGanador = true;
            break;
        }
    }

    if (hayGanador) {
        infoDisplay.textContent = `¡Jugador ${jugadorActual} ha ganado! 🎉`;
        juegoActivo = false;
        return;
    }

    const hayEmpate = !tablero.includes('');
    if (hayEmpate) {
        infoDisplay.textContent = '¡Empate! 🤝';
        juegoActivo = false;
        return;
    }
}

function cambiarJugador() {
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    infoDisplay.textContent = `Turno del Jugador ${jugadorActual}`;
}

function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    jugadorActual = 'X';
    juegoActivo = true;
    infoDisplay.textContent = 'Turno del Jugador X';

    celdas.forEach(celda => {
        celda.removeAttribute('data-content');
        celda.textContent = ''; // Limpiar el contenido de la celda
    });
}

celdas.forEach(celda => {
    celda.addEventListener('click', manejarClickCelda);
});

botonReiniciar.addEventListener('click', reiniciarJuego);