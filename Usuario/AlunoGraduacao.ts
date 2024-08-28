import { Aluno } from "../Aluno";

export class AlunoGraduacao extends Aluno {
    public getLimiteEmprestimos(): number {
        return 3;
    }

    public getTempoEmprestimo(): number {
        return 3;
    }
	public novoEmprestimo(): void {
		// Implementação do método
	}
}
