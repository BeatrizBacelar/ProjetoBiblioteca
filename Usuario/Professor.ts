import { Usuario } from "./Usuario";

export class Professor extends Usuario implements Observer {
	qteNotificado: number = 0;

	update(): void {
		this.qteNotificado++;
	}
	private notificacao?: number | null;
    public getNotificacao(): number | null | undefined{
		return this.notificacao;
	}
    public novaNotificacao(notificacao: number): void {
		this.notificacao = notificacao;
	}
    public novoEmprestimo(): void {
		// Implementação do método
	}
}
