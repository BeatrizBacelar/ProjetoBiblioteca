import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class ObservadorCommand implements Command {

  execute(args: string[]): void {
    if (args.length < 2) {
      console.log("Insucesso! Argumentos Faltando!");
      return;
  }
    Biblioteca.obterInstancia().adicionarObserver(Number(args[0]), Number(args[1]));
  }

}