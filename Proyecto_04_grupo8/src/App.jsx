import Ejercicio1 from './assets/components/Ejercicio1'
import './App.css'

const nombres = [];
let nombre;

do {
  nombre = prompt("Ingresa un nombre (o cancelar para terminar):");
  if (nombre) {
    nombres.push(nombre);
  }
} while (nombre);

function App() {
  return (
    <div>
      {nombres.map((n, index) => (
        <Ejercicio1 key={index} nombre={n} />
      ))}
    </div>
  );
}

export default App;