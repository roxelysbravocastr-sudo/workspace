const url =
 

const headers = {
  apikey:,
  Authorization:"
   ,
  "Content-Type": "application/json",
};

async function crearEstudiante() {

  const nuevoEstudiante = {
    nombre: "Andres",
    edad: 21,
    email: "andres@mail.com",
    curso_id: 1,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      ...headers,
      Prefer: "return=representation",
    },
    body: JSON.stringify(nuevoEstudiante),
  });

  const data = await response.json();

  console.table(data);
}

crearEstudiante();