import { Usuario } from "./Usuario";

export class AlunoPosGraduacao extends Usuario {

    constructor(codigo: number, nome: string) {
        super(codigo, nome); 
    }

    getLimiteEmprestimos(): number {
        return 4;
    }

    getTempoEmprestimo(): number {
        return 5;
    }
}
