import { Reserva } from "../Reserva";
import { Usuario } from "./Usuario";

export class AlunoPosGraduacao extends Usuario {
    minhasReservas: Reserva[] = [];
    constructor(codigo: number, nome: string) {
        super(codigo, nome); 
    }

    getLimiteEmprestimos(): number {
        return 4;
    }

    getTempoEmprestimo(): number {
        return 5;
    }

    getMinhasReservas(): Reserva[] {
        return this.minhasReservas;
    }
}
