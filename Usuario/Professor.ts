import { Usuario } from "./Usuario";

export class Professor extends Usuario implements Observer {
	private qteNotificado: number = 0;

	update(): void {
		this.qteNotificado++;
	}

    public getNotificacao(): number | null | undefined{
		return this.qteNotificado;
	}
    public novoEmprestimo(): void {
		// Implementação do método
	}
}
