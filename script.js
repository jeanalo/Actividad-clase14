const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function ObtenerMenoresQueOcho (numeros)  {
const numerosMenores = numeros.filter(numero => numero < 8);
return numerosMenores;
}

function ObtenerMayoresOigualesQueOcho(numeros) {
const numerosMayores = numeros.filter(numero => numero > 8);
return numerosMayores;
}

function ObtenerCantidadElementos(numeros) {
    const cantidadElementos = numeros.length;
    return cantidadElementos;
}


const NumerosMenoresQueOcho = ObtenerMenoresQueOcho(fibonacci);
const NumerosMayoresOigualesQueOcho = ObtenerMayoresOigualesQueOcho(fibonacci);
const CantidadElementosFibonacci = ObtenerCantidadElementos(fibonacci);


const contenedor = document.querySelector(".container");

const parrafoMenores = document.querySelector(".contenedor p:first-child");
parrafoMenores.textContent = `Existen ${NumerosMenoresQueOcho.length} números menores que 8`;

const parrafoMayores = document.querySelector(".contenedor p:last-child");
parrafoMayores.textContent = `Existen ${NumerosMayoresOigualesQueOcho.length} números mayores o iguales que 8`;