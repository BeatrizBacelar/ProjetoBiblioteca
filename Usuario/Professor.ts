import { Reserva } from "../Reserva";
import { Usuario } from "./Usuario";

export class Professor extends Usuario {
	notificacao: string;
	minhasReservas: Reserva[] = [];
	constructor(codigo: number, nome: string) {
		super(codigo, nome); 
	}
    public getLimiteEmprestimos(): number {
        return Infinity; // Sem limite para professores
    }

    public getTempoEmprestimo(): number {
        return 7;
    }

    public getMinhasReservas(): Reserva[] {
      return this.minhasReservas;
    }
}
