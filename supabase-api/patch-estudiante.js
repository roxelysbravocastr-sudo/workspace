const url =
 

const headers = {
  apikey: ,
  Authorization:
   ,
  "Content-Type":,
};

async function actualizarEstudiante() {

  try {

    console.log("Actualizando estudiante...");

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        ...headers,
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        nombre: "Carlos",
        edad: 25,
        email: "carlos@mail.com",
      }),
    });

    const data = await response.json();

    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }

}

actualizarEstudiante();