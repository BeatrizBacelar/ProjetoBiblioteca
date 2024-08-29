

export class Reserva {
	private static contadorIdReserva = 0;
	constructor(
    private codigoExemplar: number,
		private codigoLivro: number,
		private codigoUsuario: number,
		private dateSolicitacao: Date,
		private idReserva?: number | null,
	){
		this.idReserva = Reserva.gerarIdReserva();
	}

	private static gerarIdReserva(): number {
    return ++this.contadorIdReserva;
  }

	public getId(): number | null | undefined {
		return this.idReserva;
	}
	
	public getcodigoUsuario(): number {
		return this.codigoUsuario;
	}
	public getCodigoExemplar(): number {
		return this.codigoExemplar;
	}
	public getCodigoLivro(): number {
		return this.codigoLivro;
	}
	public getDateSolicitacao(): Date {
		return this.dateSolicitacao;
	}
}