import Estudiante from "./Estudiante";

function Lista() {
  const estudiantes = [
    { nombre: "Carlos", edad: 21, carrera: "Ingeniería en Sistemas" },
    { nombre: "Ana", edad: 19, carrera: "Administración de Empresas" },
    { nombre: "Luis", edad: 23, carrera: "Ingeniería Civil" },
    { nombre: "María", edad: 17, carrera: "Contabilidad" },
    { nombre: "Pedro", edad: 20, carrera: "Derecho" },
  ];

  // Filtrar solo mayores de edad
  const mayoresDeEdad = estudiantes.filter(est => est.edad >= 18);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #2196F3', paddingBottom: '10px' }}>
        Estudiantes Mayores de Edad ({mayoresDeEdad.length})
      </h2>
      {mayoresDeEdad.map((est, index) => (
        <Estudiante
          key={index}
          nombre={est.nombre}
          edad={est.edad}
          carrera={est.carrera}
        />
      ))}
    </div>
  );
}

export default Lista;