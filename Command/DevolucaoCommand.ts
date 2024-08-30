import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class DevolucaoCommand implements Command {

  execute(args: string[]): void {
    if (args.length < 2) {
      console.log("Insucesso! Argumentos Faltando!");
      return;
  }
    Biblioteca.obterInstancia().devolver(Number(args[0]), Number(args[1]));
  }

}