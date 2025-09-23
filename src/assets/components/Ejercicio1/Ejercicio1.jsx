import { useState } from "react";

function Ejercicio1() {
    // Estados para manejar el progama
    const [numeroSecreto, setNumeroSecreto] = useState(
        Math.floor(Math.random() * 100) + 1);
    const [numeroUsuario, setNumeroUsuario] = useState("");
    const [intentos, setIntentos] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");
    const [juegoTerminado, setJuegoTerminado] = useState(false);

}

export default Ejercicio1;