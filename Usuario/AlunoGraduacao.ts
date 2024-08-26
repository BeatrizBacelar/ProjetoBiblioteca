import { Usuario } from "./Usuario";

class AlunoGraduacao extends Usuario {
    getLimiteEmprestimos(): number {
        return 3;
    }

    getTempoEmprestimo(): number {
        return 3;
    }
}
