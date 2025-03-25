import { cadaAlumno } from "./itemAlumnos.js";
/* import { grados, alumnos } from "./consultas.js"; */


function cargarTablero(grados){
    let sectionTablero = document.createElement('section');
    sectionTablero.className = "sec-tablero";

    let titGradoTab = document.createElement('h1');
    titGradoTab.className = "tit-grado-tab";
    titGradoTab.textContent = grados;
    sectionTablero.appendChild(titGradoTab);


    let divEncabezadoTab = document.createElement('div');
    divEncabezadoTab.className = "div-encabezado-tab";


    let titNombre = document.createElement('h2');
    titNombre.className = "titsEGenerales";
    titNombre.textContent = "NOMBRE";
    divEncabezadoTab.appendChild(titNombre);

    let titApe = document.createElement('h2');
    titApe.className = "titsEGenerales";
    titApe.textContent = "APELLIDO";
    divEncabezadoTab.appendChild(titApe);

    let titEstado = document.createElement('h2');
    titEstado.className = "titsEGenerales";
    titEstado.textContent = "ASISTENCIA";
    divEncabezadoTab.appendChild(titEstado);


    sectionTablero.appendChild(divEncabezadoTab);



    let divAlumno = document.createElement('div');
    divAlumno.className = "div-alumno";

/*     alumnos.forEach(cAlumno => {
        divAlumno.appendChild(cadaAlumno(cAlumno));
    }) */

    sectionTablero.appendChild(divAlumno);

    return sectionTablero;

}

export { cargarTablero }