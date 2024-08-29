import { Livro } from "../Livro";
import { Reserva } from "../Reserva";
import { Usuario } from "./Usuario";


export class AlunoGraduacao extends Usuario {
  quantidadeEmprestimos: number = 0;
  constructor(codigo: number, nome: string) {
    super(codigo, nome); 
  }

    getLimiteEmprestimos(): number {
        return 3;
    }

    public getTempoEmprestimo(): number {
        return 3;
    }

    public novoEmprestimo(): void {
      // Implementação do método
    }

}
