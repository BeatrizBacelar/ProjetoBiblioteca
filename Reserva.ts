

export class Reserva {
	constructor(
		private idReserva: number,
		private codigoLivro: number,
		private codigoUsuario: number,
		private dateSolicitacao: Date,
	){}
	public getcodigoUsuario(): number {
		return this.codigoUsuario;
	}
	public getcodigoLivro(): number {
		return this.codigoLivro;
	}
	public getDateSolicitacao(): Date {
		return this.dateSolicitacao;
	}
}