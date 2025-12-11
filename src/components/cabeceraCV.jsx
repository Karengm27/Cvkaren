function CabeceraCV({ nombre, cargo, contacto, foto }) {
  return (
    <header className="cabecera">
      <div>
        <h1>{nombre}</h1>
        <h2>{cargo}</h2>
        <p>{contacto}</p>
      </div>

      <img src={foto} alt="foto" className="avatar" style={{width: "150px"}} />
    </header>
  );
}

export default CabeceraCV;

