abstract class Usuario {
    constructor(public codigo: number, public nome: string) {}
    abstract getLimiteEmprestimos(): number;
    abstract getTempoEmprestimo(): number;
}