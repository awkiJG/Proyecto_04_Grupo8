
// Componente Botones: muestra el boton para rendirse
function Botones({ rendirse, juegoTerminado }) {
  return (
    // El boton se ejecuta con la función -"rendirse"- al llamar el evento -onClick-
    // y se deshabilita cuando el juego termina/true
    <button onClick={rendirse} disabled={juegoTerminado}>
      Me rindo
    </button>
  );
}
//exporta el componente para usarse en otras partes
export default Botones;