import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class ConsultaUsuarioCommand implements Command {

  execute(args: string[]): void {
    if (args.length < 1) {
      console.log("Insucesso! Argumentos Faltando!");
      return;
  }
    Biblioteca.obterInstancia().consultarUsuario(Number(args[0]));
  }

}