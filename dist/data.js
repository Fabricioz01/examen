"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertar(elementos) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const elemento of elementos) {
            const nuevoElemento = yield prisma.iRequest.create({
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
    });
}
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
insertar(arregloDeDatos)
    .catch((error) => {
    console.error("Error al insertar elementos en la base de datos:", error);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
