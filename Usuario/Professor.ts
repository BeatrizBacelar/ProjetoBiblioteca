import { Usuario } from "./Usuario";

export class Professor extends Usuario {

  constructor(codigo: number, nome: string) {
    super(codigo, nome); 
  }
    getLimiteEmprestimos(): number {
        return Infinity; // Sem limite para professores
    }

    getTempoEmprestimo(): number {
        return 7;
    }
}
