const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion:
      'Diseñamos y ejecutamos instalaciones eléctricas para viviendas nuevas y remodelaciones con seguridad RETIE.',
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales',
    descripcion:
      'Implementamos sistemas eléctricos para locales comerciales, oficinas y pequeños negocios con soluciones eficientes.',
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento preventivo',
    descripcion:
      'Revisamos tableros, tomas y circuitos para evitar fallos y garantizar el funcionamiento seguro de tu instalación.',
  },
  {
    icono: '🔌',
    titulo: 'Tableros eléctricos',
    descripcion:
      'Actualizamos y construimos tableros eléctricos con protección adecuada, breakers modernos y distribución confiable.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED',
    descripcion:
      'Ofrecemos diseño e instalación de iluminación LED para ahorro energético y ambientes más cómodos en casas y empresas.',
  },
  {
    icono: '⚙️',
    titulo: 'Plantas eléctricas y UPS',
    descripcion:
      'Instalamos sistemas de respaldo eléctricos para mantener tus equipos activos durante cortes de energía.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            VoltTec acompaña cada proyecto con soluciones eléctricas seguras, eficientes y adaptadas a hogares y pequeñas empresas.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio) => (
            <div key={servicio.titulo} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div style={{ fontSize: '2.5rem' }}>{servicio.icono}</div>
                  <h5 className="card-title fw-bold mt-2">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
