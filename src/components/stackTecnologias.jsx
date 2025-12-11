function stackTecnologias() {
  const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "Figma", "NodeJs", "Express", "MongoDB"];

  const getColor = (tech) => {
    if (tech === "JavaScript") return "gold";
    if (tech === "React") return "#61dafb";
    if (tech === "Node.js") return "lightgreen";
    return "#ddd";
  };

  return (
    <section className="section">
      <h2 style={{marginBottom: "20px"}}>Stack Tecnológico</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: "8px 12px",
              borderRadius: "20px",
              backgroundColor: getColor(tech),
              fontWeight: "bold"
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default stackTecnologias;
