export class Livro {
  codigo: string;
  titulo: string;
  editora: string;
  autores: string[];
  edicao: number;
  anoPublicacao: number;

  constructor(
    codigo: string,
    titulo: string,
    editora: string,
    autores: string[],
    edicao: number,
    anoPublicacao: number
  ) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.editora = editora;
    this.autores = autores;
    this.edicao = edicao;
    this.anoPublicacao = anoPublicacao;
  }

}