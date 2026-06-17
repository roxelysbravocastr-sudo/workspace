const razones = [
  {
    icono: '🏆',
    titulo: 'Técnicos certificados',
    descripcion:
      'Nuestro equipo trabaja bajo la norma RETIE y se mantiene actualizado en buenas prácticas de seguridad.',
  },
  {
    icono: '🕒',
    titulo: 'Respuesta rápida',
    descripcion:
      'Atendemos emergencias y consultas con tiempos de respuesta rápidos para que tu servicio no se detenga.',
  },
  {
    icono: '🛡️',
    titulo: 'Garantía de servicio',
    descripcion:
      'Brindamos garantía en mano de obra y acompañamiento técnico en cada proyecto realizado.',
  },
  {
    icono: '💡',
    titulo: 'Materiales de calidad',
    descripcion:
      'Usamos equipos y componentes certificados para asegurar instalaciones duraderas y confiables.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Técnicos de VoltTec trabajando"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>
            <p className="text-muted mb-3">
              VoltTec lleva más de 15 años en el mercado atendiendo hogares y comercios de Medellín y sus alrededores.
              Entregamos soluciones eléctricas seguras, con atención personalizada y control de calidad en cada paso.
            </p>
            <p className="text-muted mb-4">
              Nuestros servicios se adaptan a clientes residenciales, empresariales e industriales ligeros, siempre con
              compromiso profesional y cumplimiento normativo.
            </p>

            <ul className="list-unstyled">
              {razones.map((razon) => (
                <li key={razon.titulo} className="d-flex gap-3 mb-3">
                  <span style={{ fontSize: '1.5rem' }}>{razon.icono}</span>
                  <div>
                    <strong>{razon.titulo}</strong>
                    <p className="text-muted mb-0 small">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
