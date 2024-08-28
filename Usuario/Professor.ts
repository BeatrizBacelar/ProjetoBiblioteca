import { Reserva } from "../Reserva";
import { Usuario } from "./Usuario";

export class Professor extends Usuario {
  minhasReservas: Reserva[] = [];
  constructor(codigo: number, nome: string) {
    super(codigo, nome); 
  }
    getLimiteEmprestimos(): number {
        return Infinity; // Sem limite para professores
    }

    getTempoEmprestimo(): number {
        return 7;
    }

    getMinhasReservas(): Reserva[] {
      return this.minhasReservas;
    }
}
