import { useState, useEffect } from 'react';
import './App.css';

const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  // ✅ BUG 1 corregido: se agregó la propiedad 'categoria' que faltaba
  { id: 4, texto: 'Practicar debugging', categoria: 'general', completada: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [contador, setContador] = useState(0);

  // ✅ BUG 2 corregido: se agregó el arreglo de dependencias [].
  // Ahora el efecto solo corre una vez al montar, no en cada render.
  useEffect(() => {
    console.log('Renderizando App, contador:', contador);
  }, []);

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'todas') return true;
    // ✅ BUG 3 corregido: comparar contra booleano, no contra string
    if (filtro === 'completadas') return tarea.completada === true;
    if (filtro === 'pendientes') return tarea.completada === false;
    return true;
  });

  function agregarTarea(texto) {
    if (!texto.trim()) return;
    // ✅ BUG 4 corregido: se crea un arreglo nuevo en vez de mutar el original
    const nuevaTarea = { id: Date.now(), texto, categoria: 'general', completada: false };
    setTareas([...tareas, nuevaTarea]);
  }

  function completarTarea(id) {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: true } : tarea
    );
    setTareas(nuevasTareas);
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span>{tarea.texto}</span>
            <span className="categoria">{tarea.categoria.toUpperCase()}</span>
            <button onClick={() => completarTarea(tarea.id)}>✔</button>
          </li>
        ))}
      </ul>

      <AgregarTarea onAgregar={agregarTarea} />
      <PerfilUsuario />
    </div>
  );
}

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    onAgregar(texto);
    setTexto('');
  }

  return (
    <form onSubmit={manejarEnvio} className="form-agregar">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  // ✅ BUG 5 corregido: el error simulado ahora se captura con try/catch
  // y se refleja en pantalla en vez de quedar solo en la consola.
  function obtenerUsuario() {
    try {
      const exito = Math.random() > 0.5;
      if (!exito) {
        throw new Error('No se pudo cargar el perfil (simulado)');
      }
      setUsuario({ nombre: 'Usuario Demo' });
    } catch (err) {
      console.error('Error al obtener el usuario:', err);
      setError(err.message);
    }
  }

  if (error) {
    return <p className="perfil error">⚠️ {error}</p>;
  }

  if (!usuario) {
    return <p className="perfil">Cargando perfil...</p>;
  }

  return <p className="perfil">Perfil: {usuario.nombre}</p>;
}

export default App;





