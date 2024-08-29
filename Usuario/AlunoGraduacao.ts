import { Reserva } from "../Reserva";
import { Usuario } from "./Usuario";


export class AlunoGraduacao extends Usuario {
  minhasReservas: Reserva[] = [];
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

    getMinhasReservas(): Reserva[] {
      return this.minhasReservas;
    }
}
