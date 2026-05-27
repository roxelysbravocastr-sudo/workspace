const url =
 

const headers = {
  apikey: ,
  Authorization:
    ,
  "Content-Type": "application/json",
};

async function eliminarEstudiante() {

  try {

    console.log("Eliminando estudiante...");

    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });

    console.log("Estudiante eliminado correctamente");

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }

}

eliminarEstudiante();