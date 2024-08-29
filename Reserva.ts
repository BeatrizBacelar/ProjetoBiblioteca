

export class Reserva {
	constructor(
    private codigoLivro: number,
		private codigoUsuario: number,
		private dateSolicitacao: Date,
		private idReserva?: number | null,
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