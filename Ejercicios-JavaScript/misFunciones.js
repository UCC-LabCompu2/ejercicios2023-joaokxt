/**
 * Permite convertir unidades entre metros, yardas, pies y pulgadas
 * @method conversorUnidades
 * @param {string} id - Id de los elementos en HTML
 * @param {number} valor - Valor ingresado por usuario
 */

function conversorUnidades(id, valor){
    let metros, yardas, pies, pulgadas;
    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)){
        yardas = "";
        pies = "";
        pulgadas = "";
        metros = "";
        alert("Se ingresó un valor inválido en " + id);
    }
    else{
        if(id=="metro"){
            metros = valor;
            yardas = valor*1.094;
            pies = valor*3.28084;
            pulgadas = valor*39.3701;
        }
        if(id=="yarda"){
            metros = valor/1.094;
            yardas = valor;
            pies = valor*3;
            pulgadas = valor*36;
        }
        if(id=="pie"){
            metros = valor/3.28084;
            yardas = valor/3;
            pies = valor;
            pulgadas = valor*12;
        }
        if(id=="pulgada"){
            metros = valor/39.3701;
            yardas = valor/36;
            pies = valor/12;
            pulgadas = valor;
        }
    }
    document.lasUnidades.unid_metro.value = Math.round(metros*100)/100;
    document.lasUnidades.unid_pie.value = pies.toFixed(2);
    document.lasUnidades.unid_pulgada.value = pulgadas.toFixed(2);
    document.lasUnidades.unid_yarda.value = Math.round(yardas*100)/100;
}

/**
 * Permite convertir grados sexagesimales a radianes y viceversa
 * @method conversorAngulos
 * @param {string} id - Id del elemento en HTML
 */
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

/**
 * Mostrar u ocultar divs
 * @method mostrar_ocultar
 * @param {string} valor
 */
function mostrar_ocultar(valor){
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Blanquea el campo al ingresar un valor no numérico
 * @method verLetra
 * @param {string} id
 * @param value
 */
let verLetra = (id, value) => {
    if(isNaN(value)){
        document.getElementById(id).value = " ";
    }
}
/**
 * Suma 2 valores ingresador por usuario
 * @method sumar
 */
let sumar = () => {
    let num1, num2, res;
    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;
    res = Number(num1) + Number(num2);
    document.getElementById("totalS").innerHTML = res;
}
/**
 * Resta 2 valores ingresador por usuario
 * @method restar
 */
let restar = () => {
    let num1, num2, res;
    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;
    res = Number(num1)-Number(num2);
    document.getElementById("totalR").value = res;
}
/**
 * Multiplica 2 valores ingresador por usuario
 * @method multiplicar
 */
let multiplicar = () => {
    let num1, num2, res;
    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;
    res = Number(num1)*Number(num2);
    document.getElementById("totalM").value = res;
}
/**
 * Divide 2 valores ingresador por usuario
 * @method dividir
 */
let dividir = () => {
    let num1, num2, res;
    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;
    res = Number(num1)/Number(num2);
    document.getElementById("totalD").value = res;
}

/**
 * Genera URL para enviar datos de primeraWeb a segundaWeb
 * @method generarURL
 */
let generarURL = () => {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementsByName("unidades")[0].value;
    const urlNueva = `segundaWeb.html#${distancia}#${unidad}`;
    window.open(urlNueva, "_self");
}

/**
 * Recibe datos en segundaWeb que están en el link generado por generarURL()
 * @method cargarValores
 */
let cargarValores = () => {
    let urlNueva = window.location.href;
    urlNueva = urlNueva.split('#');
    const distancia = urlNueva[1];
    const unidad = urlNueva[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarDatosLS = () => {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", unidad);
    window.open("web2.html");
}

let tomarDatosLS = () => {
    const cantidad = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${cantidad} ${unidad}`;
}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const margen = 10;
    ctx.fillStyle = "#000000";
    ctx.arc(anchoMax/2, alturaMax/2, 100, 0, 2*Math.PI);
    ctx.fillRect(0+margen, alturaMax-100-margen, 200, 100);
    ctx.fill();
    ctx.stroke();
}

var bandera;
let dibujar = (event) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}

let limpiarCanvas = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}

let dibujarCuadriculado = () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //Dibuja lineas horizontales
    for(var i=0; i<600;){
        ctx.moveTo(0,i);
        ctx.lineTo(1000,i);
        ctx.strokeStyle = "#D8D8D8";
        ctx.stroke();
        i=i+20;
    }
    //Dibuja lineas verticales
    for(var i=0; i<1000;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,600);
        ctx.strokeStyle = "#D8D8D8";
        ctx.stroke();
        i=i+20;
    }

    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.lineTo(1000,300);
    ctx.strokeStyle = "#FA5858";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(500,0);
    ctx.lineTo(500,600);
    ctx.strokeStyle = "#FA5858";
    ctx.stroke();
}

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    //Dibujar img solo cuando este cargada
    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}