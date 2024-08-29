import { Emprestimo } from "../Emprestimo/Emprestimo";
import { Livro } from "../Livro";
import { Reserva } from "../Reserva";
export class Usuario {
	private emprestimos: Emprestimo[] = [];
    minhasReservas: Reserva[] = [];
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

    public adicionarReserva(reserva: Reserva): void {
		this.minhasReservas.push(reserva);
	}

    public getTempoEmprestimo(): number { return 0;}

    public getMinhasReservas(): Reserva[] {
        return this.minhasReservas;
    }

    public getReservaById(idLivro: number): Reserva | undefined {
        return this.minhasReservas.find(res => res.getCodigoLivro() === idLivro);
    }

    public removeReserva(idReserva: number | undefined | null) {
        this.minhasReservas.filter(res => res.getId() === idReserva);
    }

    getInfoEmprestimo() {
        this.emprestimos.forEach(emp => console.log(`Titulo: ${emp.getCodigoLivro()} Data: ${emp.getDataEmprestimo()} Status: ${emp.getStatus()} Devolucao: ${emp.getDataDevolucao()} \n`))
    }

    getInfoReservas() {
        this.minhasReservas.forEach(res => console.log(`Titulo Reservado: ${res.getCodigoLivro()} Data: ${res.getDateSolicitacao()} \n`))
    }

    public getInfoUsuario() {
        console.log(`Emprestimos: ${this.getInfoEmprestimo()} \n Reservas: ${this.getInfoReservas()} `)
    }
}