"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Eliminar 
function eliminarElemento(arr, id) {
    const elementoAEliminar = arr.find((elemento) => elemento.id === id);
    if (elementoAEliminar) {
        elementoAEliminar.status = 'Ya no se encuentra entre nososotros';
    }
    return arr.filter((elemento) => elemento.id !== id);
}
// Array
const arregloDeDatos = [
    {
        id: 1,
        url: "https://uleam.com",
        returnType: "JSON",
        format: "GET",
        status: "Pendiente",
        parameters: [
            {
                id: 1,
                name: "uleam",
                type: "string",
                comment: "sin comentarios",
                requestID: 1,
            },
        ],
    },
];
const idAEliminar = 1;
// Ejecucion
const nuevoArreglo = eliminarElemento(arregloDeDatos, idAEliminar);
console.log(nuevoArreglo);
