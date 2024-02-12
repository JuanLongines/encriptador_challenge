const caja_texto=document.querySelector("#caja_texto");
const avisoVacio=document.querySelector(".aviso_vacio");
const mensajeEncriptadoJs=document.querySelector(".mensaje_encriptado");
let textoEncriptado='';
console.log('avisoVacio',avisoVacio)
const encriptacionMapa = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptacionMapa = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

comprobarSiMensajeExiste();
function encriptarTexto(){
    textoEncriptado= caja_texto.value.split('').map(char => encriptacionMapa[char] || char).join('');

    console.log(textoEncriptado);
    comprobarSiMensajeExiste();
    console.log('avisoVacio',avisoVacio);
}

function comprobarSiMensajeExiste(){
    console.log('condition',textoEncriptado!=null &&
        textoEncriptado!=='')
    if (textoEncriptado!=null &&
        textoEncriptado!==''){
        console.log('condition',textoEncriptado!=null &&
            textoEncriptado!=='')
        avisoVacio.style.display='none';
        mensajeEncriptadoJs.style.display='block';
        mensajeEncriptadoJs.innerHTML=textoEncriptado;
    }
}

function copiarTextoEncriptado(){
    var mensajeEncriptadoCopiar = document.querySelector('.mensaje_encriptado');
    mensajeEncriptadoCopiar.focus();
    mensajeEncriptadoCopiar.select();
    document.execCommand('copy');

}

var copyTextareaBtn = document.querySelector('.btn_copiar');

copyTextareaBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('.mensaje_encriptado');
    var text = copyTextarea.textContent;
    var tempTextarea = document.createElement('textarea');
    //tempTextarea.style.position = 'absolute';
    //tempTextarea.style.left = '-9999px';
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(tempTextarea);

});