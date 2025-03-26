function agregarMaestro(){

    let recuperarUser = document.querySelector(".inp-u-r").value;
    let recuperarEmail = document.querySelector(".inp-e-r").value;
    let recuperarPass = document.querySelector(".inp-p-r").value;
    


    fetch('http://localhost:3000/agregarMaestro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: recuperarUser,
          email: recuperarEmail,
          password: recuperarPass
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al guardar el usuario');
        }
        return response.json();
      })
      .then(data => {
        console.log('Usuario agregado con éxito:', data);
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
      });      
    
}

export { agregarMaestro }