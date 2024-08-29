import { Reserva } from "../Reserva";
import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
  private listaReservas: Array<Reserva> = [];

  public listarReservas(): Array<Reserva> {
    return this.listaReservas;
  }
  public novaReserva(reserva: Reserva): void {
    this.listaReservas.push(reserva);
  }
  public excluiReserva(idReserva: number): void {
	// Implementação do método
	if(idReserva < 0){
		throw new Error("Id da reserva inválido.");
 	 }
}
}