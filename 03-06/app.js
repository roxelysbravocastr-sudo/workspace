const url = "https://rickandmortyapi.com/api/character";

const headers = {
  "Content-Type": "application/json",
};

async function obtenerPersonaje(id) {
  try {
    console.log("Consultando API...");

    const response = await fetch(`${url}/${id}`, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Respuesta de la API:");
    console.log(data);

    console.table(data);
  } catch (error) {
    console.log("Error:");
    console.log(error);
  }
}

async function obtenerPagina(numeroPagina) {
  try {
    console.log(`Consultando página ${numeroPagina}...`);

    const response = await fetch(`${url}?page=${numeroPagina}`, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Personajes de la página:");
    console.log(data);

    // Mostrar solo los personajes en formato tabla
    console.table(data.results);
  } catch (error) {
    console.log("Error:");
    console.log(error);
  }
}

obtenerPersonaje(1);
obtenerPagina(2);
