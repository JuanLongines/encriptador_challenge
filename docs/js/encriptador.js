const caja_texto=document.querySelector("#caja_texto");
const avisoVacio=document.querySelector(".aviso_vacio");
const mensajeEncriptadoJs=document.querySelector(".mensaje_encriptado");
const botonCopiarJs=document.querySelector(".btn_copiar");
const copyTextareaBtn = document.querySelector('.btn_copiar');

let textoEncriptado='';

function encriptar(textoEncriptado){
    let matriz=[
        ["e","enter"],
        ["o","ober"],
        ["u","ufat"],
        ["i","imes"],
        ["a","ai"]
    ]
    textoEncriptado=textoEncriptado.toLowerCase();

    for (let i=0; i<matriz.length; i++) {
        if (textoEncriptado.includes(matriz[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }

    return textoEncriptado;
}

function desencriptar(textoDesencriptado){
    let matriz=[
        ["u","ufat"],
        ["o","ober"],
        ["e","enter"],
        ["i","imes"],
        ["a","ai"]
    ]
    textoDesencriptado=textoDesencriptado.toLowerCase();

    for (let i=0; i<matriz.length; i++) {
        if (textoDesencriptado.includes(matriz[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }

    return textoDesencriptado;
}


comprobarSiMensajeExiste();
function encriptarTexto(){
    textoEncriptado= encriptar(caja_texto.value);
    comprobarSiMensajeExiste();
    caja_texto.value='';
}

function desencriptarTexto(){
    textoEncriptado= desencriptar(caja_texto.value);
    comprobarSiMensajeExiste();
    caja_texto.value='';
}

function comprobarSiMensajeExiste(){
    if (textoEncriptado!=null &&
        textoEncriptado!==''){
        avisoVacio.style.display='none';
        mensajeEncriptadoJs.style.display='block';
        mensajeEncriptadoJs.innerHTML=textoEncriptado;
        botonCopiarJs.style.display='block';
    }else{
        avisoVacio.style.display='block';
        textoEncriptado='';
        mensajeEncriptadoJs.innerHTML=textoEncriptado;
        mensajeEncriptadoJs.style.display='none';
        botonCopiarJs.style.display='none';

    }
}

function copiarTextoEncriptado(){
    var mensajeEncriptadoCopiar = document.querySelector('.mensaje_encriptado');
    mensajeEncriptadoCopiar.focus();
    mensajeEncriptadoCopiar.select();
    document.execCommand('copy');

}




copyTextareaBtn.addEventListener("click", async (event) => {
    var copyTextarea = document.querySelector('.mensaje_encriptado');
    var text = copyTextarea.textContent;
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    try {
        await navigator.clipboard.writeText(text);
        console.log('Copying to clipboard was successful!');
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(tempTextarea);
});

