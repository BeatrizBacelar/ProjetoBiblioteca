import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class NotificacaoCommand implements Command {

  execute(args: string[]): void {
    if (args.length < 1) {
      console.log("Insucesso! Argumentos Faltando!");
      return;
  }
    Biblioteca.obterInstancia().obterQuantidadeNotificacao(Number(args[0]));
  }

}