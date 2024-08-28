import { Reserva } from "../Reserva";

export abstract class Usuario {
    constructor(public codigo: number, public nome: string) {}
    abstract getMinhasReservas(): Reserva[];
    abstract getLimiteEmprestimos(): number;
    abstract getTempoEmprestimo(): number;
}