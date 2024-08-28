import { Emprestimo } from "../Emprestimo/Emprestimo";
export class Usuario {
	private emprestimos: Emprestimo[] = [];
    constructor(private codigo: number, private nome: string) {
		this.emprestimos = [];
	}
	
	public getCodigo(): number {
		return this.codigo;
	}
	public getNome(): string {
		return this.nome;
	}
	public listarEmprestimos(): Emprestimo[] {
		return this.emprestimos;
	}
	public adicionarEmprestimo(emprestimo: Emprestimo): void {
		this.emprestimos.push(emprestimo);
	}
}