import { Usuario } from "./Usuario";

export class Professor extends Usuario {
  codigoIdentificacao: string;
  nome: string;
  tempoEmprestimo: number = 7;

  constructor(
    codigoIdentificacao: string,
    nome: string,
  ) {
    super();
    this.codigoIdentificacao = codigoIdentificacao;
    this.nome = nome;
  }

}