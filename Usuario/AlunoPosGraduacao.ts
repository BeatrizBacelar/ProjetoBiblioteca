import { Usuario } from "./Usuario";

export class AlunoPosGraduacao extends Usuario {
  codigoIdentificacao: string;
  nome: string;
  tempoEmprestimo: number = 5;
  limiteEmprestimo: number = 4;

  constructor(
    codigoIdentificacao: string,
    nome: string,
  ) {
    super();
    this.codigoIdentificacao = codigoIdentificacao;
    this.nome = nome;
  }

}