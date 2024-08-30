export class Emprestimo {
	private static contadorIdEmprestimo = 0;
	constructor(
		private codigoLivro: number,
		private codigoExemplar: number | any,
		private codigoUsuario: number,
		private dataEmprestimo: Date,
		private dataDevolucao: Date,
		private status: string,
		private idEmprestimo?: number,
	){
		this.idEmprestimo = Emprestimo.gerarIdEmprestimo();
	}
	private static gerarIdEmprestimo(): number {
    return ++this.contadorIdEmprestimo;
  }
	public getCodigoExemplar(): number {
		return this.codigoExemplar;
	}
	public getCodigoLivro(): number {
		return this.codigoLivro;
	}
	public getDataEmprestimo(): Date {
		return this.dataEmprestimo;
	}
	public getStatus(): string {
		return this.status;
	}
	public setStatus(status: string): void {
		this.status = status;
	}
	public getDataDevolucao(): Date {
		return this.dataDevolucao;
	}
	public setDataDevolucao(dataDevolucao: Date): void {
		this.dataDevolucao = dataDevolucao;
	}
}