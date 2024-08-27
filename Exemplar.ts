import { Livro } from "./Livro";


export class Exemplar {
    constructor(public codigo: number, public livro: Livro, public disponivel: boolean) {}
}