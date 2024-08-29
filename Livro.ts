import { Exemplar } from "./Exemplar";
import { Reserva } from "./Reserva";
import { Usuario } from "./Usuario/Usuario";

export class Livro {
  private exemplares: Exemplar[];
  private reservas: Reserva[];
  private observadores: Usuario[] = [];

  constructor(
    private codigo: number,
    private titulo: string,
    private editora: string,
    private autores: string[],
    private edicao: number,
    private anoPublicacao: number
  ) {
    this.exemplares = [];
    this.reservas = [];
  }
  public getTitulo(): string {
    return this.titulo;
  }
  public getCodigo(): number {
    return this.codigo;
  }
  public getReservas(): Reserva[] {
    return this.reservas;
  }
  public getExemplares(): Exemplar[] {
    return this.exemplares;
  }

  static encontrarLivroPorCodigo(codigo: number, livros: Livro[]): Livro | undefined {
    return livros.find(livro => livro.getCodigo() === codigo);
  }

  setExemplar(exemplar: Exemplar) {
    this.exemplares.push(exemplar);
  }
  

}
