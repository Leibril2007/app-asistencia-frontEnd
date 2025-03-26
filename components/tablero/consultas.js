async function camposGrados() {
    try {
      const response = await fetch('http://localhost:3000/grados');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}


async function consultarMaestos() {
  
  try {
    const response = await fetch('http://localhost:3000/maestros');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }

}

async function consultarAlumnos() {
  
  try {
    const response = await fetch('http://localhost:3000/alumnos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }

}


function gradosBackend(idGradoSel) {
  console.log("valor parametro", idGradoSel);

  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/comparacionGrados/${idGradoSel}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data); 
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error);
      });
  });
}



export { camposGrados, consultarMaestos, consultarAlumnos, gradosBackend };