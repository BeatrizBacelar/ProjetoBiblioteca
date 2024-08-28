import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class ReservaCommand implements Command {
  
  execute(args: String[]): void {
    if (args.length < 3) {
      console.log("Insucesso! Argumentos Faltando!");
      return;
  }
  Biblioteca.obterInstancia().reservar(Number(args[1]), Number(args[2]));

  }

}