const textArea=document.querySelector('.textarea');
const mensaje=document.querySelector('.mensaje');
const imageContainer=document.querySelector('.image_container');
const bttnEncriptar=document.querySelector('.btn-encriptar');
const bttnDesencriptar=document.querySelector('.btn-desencriptar');
const bttnCopiar = document.querySelector('.btn-copiar');
const showCopiar = document.querySelector('.btn ');



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

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado=desencriptar(textArea.value);
    mensaje.value=textoDesencriptado;
}

bttnEncriptar.addEventListener("click", (event) => {
    btnEncriptar();
    textArea.value='';
    imageContainer.style.display='none';
    mensaje.style.display='block';
    showCopiar.style.display='block';
});

bttnDesencriptar.addEventListener("click", (event) => {
    btnDesencriptar();
    textArea.value='';
    imageContainer.style.display='none';
    mensaje.style.display='block';
    showCopiar.style.display='block';
});


bttnCopiar.addEventListener("click", async (event) => {
    console.log('click copiar')
    let text = mensaje.value;
    const tempTextarea = document.createElement('textarea');
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

