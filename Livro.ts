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

  public registrarEmprestimo(codigoExemplar: number | any) {
    this.exemplares.filter(exemplar => exemplar.getCodigo() !== codigoExemplar);
  }

  static encontrarLivroPorCodigo(codigo: number, livros: Livro[]): Livro | undefined {
    return livros.find(livro => livro.getCodigo() === codigo);
  }

  setExemplar(exemplar: Exemplar) {
    this.exemplares.push(exemplar);
  }

  public getExemplar(codigoLivro: number): any {
    console.log(this.exemplares)
    return this.exemplares.find(ex => ex.getIdCodigoLivro() === codigoLivro && ex.getStatus() === 'disponivel');
  }

  public getUsersReserva() {
    this.reservas.forEach(res => console.log(`Reserva: ${res.getId()} Usuário: ${res.getcodigoUsuario()} \n`))
  }

  public getInfoExemplar() {
    this.exemplares.forEach(ex => console.log(`Codigo Exemplar: ${ex.getCodigo()} Status: ${ex.getStatus()} \n`))
  }

  public getInfoLivro() {
    console.log(`Titulo: ${this.titulo} \n Qte reservas: ${this.reservas.length} \n
    ${this.getUsersReserva()} ${this.getInfoExemplar()} `)
  }

  

}
