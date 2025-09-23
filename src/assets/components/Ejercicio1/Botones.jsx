function Botones({ rendirse, juegoTerminado }) {
  return (
    <button onClick={rendirse} disabled={juegoTerminado}>
      Me rindo
    </button>
  );
}


export default Botones;