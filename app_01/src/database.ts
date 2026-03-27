import { Livro } from './livro';

export const biblioteca: Livro[] = [
    {
        id: 1, 
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899,
        disponivel: true
    }, {
        id: 2,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        ano: 1988,
        disponivel: false,
        categoria: "Ficção"
    }
]
