export class Professor {
  codigoIdentificacao: string;
  nome: string;
  tempoEmprestimo: number = 7;

  constructor(
    codigoIdentificacao: string,
    nome: string,
  ) {
    this.codigoIdentificacao = codigoIdentificacao;
    this.nome = nome;
  }

}