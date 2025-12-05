function Experiencia() {
  const experiencias = [
    { cargo: "Front-End Jr", empresa: "TechSoft", año: 2023, descripcion: "Desarrollo de interfaces con React." },
    { cargo: "Proyecto Freelance", empresa: "Landing Page", año: 2023, descripcion: "Diseño de sitio web moderno." },
    { cargo: "UI Developer", empresa: "Pixel Studio", año: 2022, descripcion: "Optimización visual y accesibilidad." },
    { cargo: "Proyecto Dashboard", empresa: "React Admin", año: 2022, descripcion: "Dashboard con gráficos y tablas." },
    { cargo: "Diseño Web", empresa: "Creative Lab", año: 2021, descripcion: "Maquetación responsive con CSS." },
    { cargo: "Proyecto Ecommerce", empresa: "Online Store", año: 2021, descripcion: "Carrito funcional con React." },
    { cargo: "Prácticas", empresa: "CodeHouse", año: 2020, descripcion: "Soporte en desarrollo web." },
    { cargo: "Proyecto Personal", empresa: "Portafolio", año: 2020, descripcion: "Mi portafolio en React." },
    { cargo: "Proyecto CRUD", empresa: "Users Manager", año: 2023, descripcion: "CRUD con estados y props." },
    { cargo: "Rediseño Web", empresa: "Studio UX", año: 2024, descripcion: "Rediseño completo y animaciones." }
  ];

  return (
    <section className="section">
      <h2>Experiencia</h2>

      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo} – {exp.empresa} ({exp.año})</h3>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
