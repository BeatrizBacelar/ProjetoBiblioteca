import { Reserva } from "./Reserva";
import { Usuario } from "./Usuario/Usuario";

export class Aluno extends Usuario{
	private listaReservas: Array<Reserva>;

	private listarReservas(): Array<Reserva>{
		return this.listaReservas;
	}
	private novaReserva(reserva: Reserva): void{
		this.listaReservas.push(reserva);
	}
}