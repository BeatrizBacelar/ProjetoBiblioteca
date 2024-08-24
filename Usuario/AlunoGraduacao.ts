import { Usuario } from "./Usuario";

export class AlunoGraduacao extends Usuario {
  codigoIdentificacao: string;
  nome: string;
  tempoEmprestimo: number = 3;
  limiteEmprestimo: number = 3;

  constructor(
    codigoIdentificacao: string,
    nome: string,
  ) {
    super();
    this.codigoIdentificacao = codigoIdentificacao;
    this.nome = nome;
  }


}