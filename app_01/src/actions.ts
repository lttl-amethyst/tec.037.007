import { Livro } from  './livro';
import { biblioteca } from './database';

//buscar livro
export function buscarLivroPorId(id: number): Livro | undefined {
    return biblioteca.find(livro => livro.id == id);
}