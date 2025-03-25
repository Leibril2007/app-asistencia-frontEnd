
function cadaAlumno(data){
    
    let divBase = document.createElement('div');
    divBase.className = "c-alumno";

    let alumno = document.createElement('p');
    alumno.className = "nombre-alumno";
    alumno.textContent = data;

    let baseInputs = document.createElement('div');
    baseInputs.className = "base-inputs";

    let pSi = document.createElement('p');
    pSi.textContent = "Si";
    baseInputs.appendChild(pSi);

    let inpSi = document.createElement('input');
    inpSi.type = 'checkbox';
    baseInputs.appendChild(inpSi);

    let pNo = document.createElement('p');
    pNo.textContent = "No";
    baseInputs.appendChild(pNo);

    let inpNo = document.createElement('input');
    inpNo.type = 'checkbox';
    baseInputs.appendChild(inpNo);

    divBase.appendChild(baseInputs);

    divBase.appendChild(alumno);


    return divBase;
}

export { cadaAlumno }