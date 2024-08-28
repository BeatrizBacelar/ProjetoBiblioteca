import { Usuario } from "./Usuario";

export class AlunoPosGraduacao extends Usuario {
    public getLimiteEmprestimos(): number {
        return 4;
    }

    public getTempoEmprestimo(): number {
        return 5;
    }
	public novoEmprestimo(): void {
		// Implementação do método
	}
}
