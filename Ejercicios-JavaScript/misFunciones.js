/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function conversorUnidades(id, valor){
    if(isNaN(valor)){
        document.lasUnidades.unid_yarda.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_metro.value = "";
        alert("Se ingresó un valor inválido en " + id);
    }
    else{
        if(id=="metro"){
            document.lasUnidades.unid_yarda.value = valor*1.094;
            document.lasUnidades.unid_pie.value = valor*3.28084;
            document.lasUnidades.unid_pulgada.value = valor*39.3701;
        }
        if(id=="yarda"){
            document.lasUnidades.unid_metro.value = valor/1.094;
            document.lasUnidades.unid_pie.value = valor*3;
            document.lasUnidades.unid_pulgada.value = valor*36;
        }
        if(id=="pie"){
            document.lasUnidades.unid_metro.value = valor/3.28084;
            document.lasUnidades.unid_yarda.value = valor/3;
            document.lasUnidades.unid_pulgada.value = valor*12;
        }
        if(id=="pulgada"){
            document.lasUnidades.unid_metro.value = valor/39.3701;
            document.lasUnidades.unid_yarda.value = valor/36;
            document.lasUnidades.unid_pie.value = valor/12;
        }
    }
}
