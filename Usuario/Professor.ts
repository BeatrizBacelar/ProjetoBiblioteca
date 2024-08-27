import { Usuario } from "./Usuario";

class Professor extends Usuario {
    getLimiteEmprestimos(): number {
        return Infinity; // Sem limite para professores
    }

    getTempoEmprestimo(): number {
        return 7;
    }
}
