import { Livro } from "./Livro";

export class Exemplar {
    constructor(public codigo: number, public livro: Livro | undefined, public disponivel: boolean) {}
}