export class Exemplar {
  constructor(
    private codigo: number,
    private codigoLivro: number,
    private status: string,
    private idEmprestimo?: number | null
  ) {}
  public getCodigo(): number {
    return this.codigo;
  }
  public getStatus(): string {
    return this.status;
  }
  public getIdEmprestimo(): number | undefined | null {
    return this.idEmprestimo;
  }
  public getIdCodigoLivro(): number {
    return this.codigoLivro;
  }
  public setIdEmprestimo(idEmprestimo: number): void {
    this.idEmprestimo = idEmprestimo;
  }
  public setStatus(status: string) {
    this.status = status;
  }
}
