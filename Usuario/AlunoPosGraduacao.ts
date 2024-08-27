
class AlunoPosGraduacao extends Usuario {
    getLimiteEmprestimos(): number {
        return 4;
    }

    getTempoEmprestimo(): number {
        return 5;
    }
}
