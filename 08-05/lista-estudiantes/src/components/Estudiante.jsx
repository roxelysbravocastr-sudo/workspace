function Estudiante(props) {
  const esAdulto = props.edad >= 18;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      backgroundColor: esAdulto ? '#e8f5e9' : '#fff3e0'
    }}>
      <p><strong>Nombre:</strong> {props.nombre}</p>
      <p><strong>Edad:</strong> {props.edad} años {esAdulto ? '✓ Mayor de edad' : '(Menor de edad)'}</p>
      <p><strong>Carrera:</strong> {props.carrera}</p>
    </div>
  );
}

export default Estudiante;