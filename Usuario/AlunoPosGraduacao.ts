import { Aluno } from "./Aluno";
import { Reserva } from "../Reserva";

export class AlunoPosGraduacao extends Aluno {
  minhasReservas: Reserva[];
  public getLimiteEmprestimos(): number {
    return 4;
  }

  public getTempoEmprestimo(): number {
    return 5;
  }
  public novoEmprestimo(): void {
    // Implementação do método
  }

  getMinhasReservas(): Reserva[] {
    return this.minhasReservas;
  }
}
