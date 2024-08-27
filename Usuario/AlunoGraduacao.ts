import { Usuario } from "./Usuario";


export class AlunoGraduacao extends Usuario {

  constructor(codigo: number, nome: string) {
    super(codigo, nome); 
  }

    getLimiteEmprestimos(): number {
        return 3;
    }

    getTempoEmprestimo(): number {
        return 3;
    }
}
