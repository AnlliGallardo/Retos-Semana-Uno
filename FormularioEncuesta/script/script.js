let formulario = document.querySelector('form');
let listarDatos = document.getElementById('listarDatos');
let datos = [];

const enviarDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let edad = document.getElementById('edad').value;
    let check1 = document.getElementById('check1').value;
    let check2 = document.getElementById('check2').value;
    let check3 = document.getElementById('check3').value;
    let check4 = document.getElementById('check4').value;
    let check5 = document.getElementById('check5').value;
    let s = document.getElementById('s').value;
    let n = document.getElementById('n').value;
    let ps = document.getElementById('ps').value;
    
    let caract = document.getElementById('caract').value;
   

    let registro = {
        nombre,
        correo,
        edad,
        caract,
        check1,
        check2,
        check3,
        check4,
        check5,
        s,
        n,
        ps
    }

    datos.unshift(registro);
    localStorage.setItem('datos',JSON.stringify(datos));
    
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    enviarDatos();
})


function limpiar {
    formulario.innerHTML = '';
}