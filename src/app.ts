import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface IRequest {
  id: number;
  url: string;
  returnType: string;
  format: string;
  status: string;
  parameters: IParameter[];
}

export interface IParameter {
  id: number;
  name: string;
  type: string;
  comment: string;
  requestID: number;
}

// Eliminar 
function eliminarElemento(arr: IRequest[], id: number): IRequest[] {
  const elementoAEliminar = arr.find((elemento) => elemento.id === id);
  if (elementoAEliminar) {
    elementoAEliminar.status = 'Ya no se encuentra entre nososotros';
  }
  return arr.filter((elemento) => elemento.id !== id);
}

// Array
const arregloDeDatos: IRequest[] = [
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




