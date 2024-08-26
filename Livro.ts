import { Exemplar } from "./Exemplar";

export class Livro {
  meusExemplares: Exemplar[] = [];

  constructor(
    public codigo: string,
    public titulo: string,
    public editora: string,
    public autores: string[],
    public edicao: number,
    public anoPublicacao: number
  ) {
    this.meusExemplares = [];
  }
}
