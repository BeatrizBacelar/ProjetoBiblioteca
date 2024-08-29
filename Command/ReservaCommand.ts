import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class ReservaCommand implements Command {
  
  execute(args: string[]): void {
    if (args.length < 2) {
      console.log("Insucesso! Argumentos Faltando!");
      return;
  }
    Biblioteca.obterInstancia().reservar(Number(args[0]), Number(args[1]));
  }

}