let nombre = "Elias";
let saludo = `Hola, ${nombre}`;
document.getElementById("resString").innerHTML =
    "nombre = " + nombre + " | saludo = " + saludo;
let precio = 19.99;
let cantidad = 3;
document.getElementById("resNumber").textContent =
    "precio = " + precio + " | cantidad = " + cantidad;
let estaActivo = true;
let tieneDescuento = false;
document.getElementById("resBoolean").innerHTML =
    "estaActivo = " + estaActivo + " | tieneDescuento = " + tieneDescuento;
let resultado;
document.getElementById("resUndefined").innerHTML =
    "resultado = " + resultado + " (typeof: " + typeof resultado + ")";
let seleccion = null;
document.getElementById("resNull").innerHTML =
    "seleccion = " + seleccion + " (typeof: " + typeof seleccion + ")";
let usuario = { id: 1, rol: "admin" };
let frutas = ["manzana", "pera"];

document.getElementById("resObjeto").innerHTML =
    "usuario = " + JSON.stringify(usuario);
document.getElementById("resArray").innerHTML =
    "frutas = " + JSON.stringify(frutas);
console.log({ nombre, precio, estaActivo, resultado, seleccion, usuario, frutas });