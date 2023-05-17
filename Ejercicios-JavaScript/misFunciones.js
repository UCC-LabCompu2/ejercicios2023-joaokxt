/**
 * Permite convertir unidades entre metros, yardas, pies y pulgadas
 * @method conversorUnidades
 * @param {string} id - Id de los elementos en HTML
 * @param {number} valor - Valor ingresado por usuario
 */

function conversorUnidades(id, valor){
    let metros, yardas, pies, pulgadas;
    if(isNaN(valor)){
        yardas = "";
        pies = "";
        pulgadas = "";
        metros = "";
        alert("Se ingresó un valor inválido en " + id);
    }
    else{
        if(id=="metro"){
            metros=valor;
            yardas = valor*1.094;
            pies = valor*3.28084;
            pulgadas = valor*39.3701;
        }
        if(id=="yarda"){
            metros = valor/1.094;
            yardas=valor;
            pies = valor*3;
            pulgadas = valor*36;
        }
        if(id=="pie"){
            metros = valor/3.28084;
            yardas = valor/3;
            pies=valor;
            pulgadas = valor*12;
        }
        if(id=="pulgada"){
            metros = valor/39.3701;
            yardas = valor/36;
            pies = valor/12;
            pulgadas=valor;
        }
    }
    document.lasUnidades.unid_metro.value = metros;
    document.lasUnidades.unid_yarda.value = yardas;
    document.lasUnidades.unid_pie.value = pies;
    document.lasUnidades.unid_pulgada.value = pulgadas;
}

function conversorAngulos(id){
    if(id=="grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = gr*(Math.PI/180);
    }
    if(id=="radianes"){
        let rad = document.getElementById("radianes").value;
        document.getElementById("grados").value = rad*(180/Math.PI);
    }
}

function mostrar_ocultar(valor){
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}