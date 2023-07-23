document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('n_bar').classList.toggle('show');
    document.getElementById('menu-toggle').style.display = 'none';
    document.getElementById('back-button').style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('n_bar').classList.toggle('show');
    document.getElementById('back-button').style.display = 'none';
    document.getElementById('menu-toggle').style.display = 'block';
});

console.log("test");

alert("Hola vieja");

//let num1=prompt("Ingresar numero:");
let num1=parseFloat(prompt("Ingresar numero:"));
let num2=parseFloat(prompt("Ingresar numero:"));
let suma = num1 + num2;
alert("Valor de usuario: " + suma);