function agregarDatos(idMaestro, idGrado, idAlumno, recFecha,recAsistencia, recObs){

    /* let recFecha = document.querySelector('.fecha-inp').value; */
    /* let idGrado = document.querySelector('.select').value; */

    console.log('fech', recFecha);
    console.log('idG', idGrado);
    console.log("alm id", idAlumno);
    console.log("ass", recAsistencia);
    console.log("ob", recObs);



    fetch('http://localhost:3000/agregarAsistencia', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          maestros_id: idMaestro,  
          grados_id: idGrado,      
          alumnos_id: idAlumno,    
          fecha: recFecha,  
          asistencia: recAsistencia,  
          
          observaciones: recObs || null  
      })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al guardar la asistencia');
      }
      return response.json();
  })
  .then(data => {
      console.log('Asistencia agregada con éxito:', data);
  })
  .catch(error => {
      console.error('Hubo un problema con la solicitud:', error);
  });
  


}

export { agregarDatos }