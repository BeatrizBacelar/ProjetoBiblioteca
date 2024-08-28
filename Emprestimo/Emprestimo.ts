export class Emprestimo {
	constructor(
		private idEmprestimo: number,
		private codigoLivro: number,
		private codigoExemplar: number,
		private codigoUsuario: number,
		private dataEmprestimo: Date,
		private dataDevolucao: Date,
		private status: string	

	){}
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