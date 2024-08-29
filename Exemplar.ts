export class Exemplar {
  constructor(
    private codigo: number,
    private status: string,
    private idEmprestimo: string
  ) {}
  public getCodigo(): number {
    return this.codigo;
  }
  public getStatus(): string {
    return this.status;
  }
  public getIdEmprestimo(): string {
    return this.idEmprestimo;
  }
  public setIdEmprestimo(idEmprestimo: string): void {
    this.idEmprestimo = idEmprestimo;
  }
}
