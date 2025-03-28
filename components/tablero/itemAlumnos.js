import { agregarDatos } from "./funcionAsistencia.js";
import { idMaestro, idGrado, idAlumno, recAsistencia, recObs, recFecha } from "../login/login.js";

function cadaAlumno(data, idGradoSel){
    
    let divBase = document.createElement('div');
    divBase.className = "c-alumno";

    let clave = document.createElement('p');
    clave.className = "clave-alumno";
    clave.textContent = data.clave;
    divBase.appendChild(clave);

    let alumno = document.createElement('p');
    alumno.className = "nombre-alumno";
    alumno.textContent = data.nombre;


    let baseInputs = document.createElement('div');
    baseInputs.className = "base-inputs";

    /* CHECKBOX */

    let pSi = document.createElement('p');
    pSi.className = "tit-si-no";
    pSi.textContent = "Si";
    baseInputs.appendChild(pSi);

    let inpSi = document.createElement('input');
    inpSi.className = "inp-check check-si";
    inpSi.type = 'checkbox';
    baseInputs.appendChild(inpSi);

    let pNo = document.createElement('p');
    pNo.className = "tit-si-no";
    pNo.textContent = "No";
    baseInputs.appendChild(pNo);
    
    let inpNo = document.createElement('input');
    inpNo.className = "inp-check check-no";
    inpNo.type = 'checkbox';
    
    baseInputs.appendChild(inpNo);





    /* OBSERVACIONES */

    let titObs = document.createElement('p');
    titObs.className = "tit-obs";
    titObs.textContent = "Observaciones:";
    divBase.appendChild(titObs);



    //MANDAR OBSERVACIONES

    let textAObs = document.createElement('input');
    textAObs.className = "textA-Obs";
    divBase.appendChild(textAObs);



    let btnGuardar = document.createElement('div');
    btnGuardar.className = "btn-guardar";
    btnGuardar.textContent = "Guardar";

    divBase.appendChild(btnGuardar);


    btnGuardar.addEventListener("click", function() {
        let recFecha = document.querySelector('.fecha-inp').value;
        console.log("fecha verificar", recFecha);
        
    
        let checkBoxSi = inpSi;
        let checkBoxNo = inpNo;
    
        let valorCheck = null;
    
        if (checkBoxSi.checked) {
            valorCheck = true;  
            console.log("valor", valorCheck);
        } else if (checkBoxNo.checked) {
            valorCheck = false; 
            console.log("valor no", valorCheck);
        }

        let avFeca = document.querySelector('.msj-fecha-alum');
        if (avFeca) {
            avFeca.remove();          
        }
    

        if(recFecha === ""){
            let avFecah = document.createElement('p');
            avFecah.className = "msj-fecha-alum";
            avFecah.textContent = "Ingrese la fecha por favor";
            divBase.appendChild(avFecah);

        } else {            

            let msjHecho = document.createElement('p');
            msjHecho.className = "msj-hecho-alum";
            msjHecho.textContent = "Guardado con éxito";
            divBase.appendChild(msjHecho);
        }


        let recObs = textAObs.value;
        console.log("rec", recObs);
        

        if(recObs === ""){
            recObs = document.querySelector('.textA-Obs').value;
            console.log("observacion", recObs);

        }



        agregarDatos(idMaestro, idGradoSel, data.id, recFecha, valorCheck, recObs);
        

    });
           


    divBase.appendChild(baseInputs);
    

    divBase.appendChild(alumno);
    


    return divBase;
}

export { cadaAlumno }