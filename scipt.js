const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    } 
    limpiarTextoEncriptado();
    return fraseEncriptada;
}

function limpiarTextoEncriptado (){
    document.querySelector('#texto-encriptado').value = "";
}

function btnDesencriptar(){ 
    if(campo_mensaje.value != ""){
        const texto3 = Desencriptar(campo_mensaje.value);
        campo_texto.value = texto3;
    }
    else{
        if(campo_texto.value != ""){
            const texto2 = Desencriptar(campo_texto.value);
            campo_mensaje.value = texto2;
        }
    }
}

function Desencriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada;
}

function btnCopiar (){
var contenido = document.getElementById('campo-mensaje');
contenido.select();
document.execCommand("Copy");
alert(`"${contenido.value}" se ha copiado al portapapeles.`);
}