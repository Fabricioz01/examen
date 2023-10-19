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

async function insertar(elementos: IRequest[]) {
  for (const elemento of elementos) {
    const nuevoElemento = await prisma.iRequest.create({
      data: {
        url: elemento.url,
        returnType: elemento.returnType,
        format: elemento.format,
        status: elemento.status,
        parameters: {
          create: elemento.parameters,
        },
      },
    });
    console.log(`Elemento guardado en la db: ${nuevoElemento.id}`);
  }
}

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

insertar(arregloDeDatos)
  .catch((error) => {
    console.error("Error al insertar elementos en la base de datos:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

