export class AlunoPosGraduacao {
  codigoIdentificacao: string;
  nome: string;
  tempoEmprestimo: number = 5;
  limiteEmprestimo: number = 4;

  constructor(
    codigoIdentificacao: string,
    nome: string,
  ) {
    this.codigoIdentificacao = codigoIdentificacao;
    this.nome = nome;
  }

}