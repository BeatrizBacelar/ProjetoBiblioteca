export class AlunoGraduacao {
  codigoIdentificacao: string;
  nome: string;
  tempoEmprestimo: number = 3;
  limiteEmprestimo: number = 3;

  constructor(
    codigoIdentificacao: string,
    nome: string,
  ) {
    this.codigoIdentificacao = codigoIdentificacao;
    this.nome = nome;
  }


}