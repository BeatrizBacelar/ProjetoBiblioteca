import { Usuario } from "./Usuario";

export class Professor extends Usuario {
	private notificacao: number;
    public getNotificacao(): number {
		return this.notificacao;
	}
    public novaNotificacao(notificacao: number): void {
		this.notificacao = notificacao;
	}
    public novoEmprestimo(): void {
		// Implementação do método
	}
}
