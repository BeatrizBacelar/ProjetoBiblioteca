import { Usuario } from "./Usuario";

export class Professor extends Usuario {
	notificacao: string;
    getLimiteEmprestimos(): number {
        return Infinity; // Sem limite para professores
    }

    getTempoEmprestimo(): number {
        return 7;
    }
}
