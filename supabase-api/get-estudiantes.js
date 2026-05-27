const url =
 

const headers = {
  apikey: ,
  Authorization:
    
  "Content-Type":,
};

async function obtenerEstudiantes() {
  try {

    console.log("Consultando API...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.table(data);

  } catch (error) {

    console.log(error);

  }
}

obtenerEstudiantes();