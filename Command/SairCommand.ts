import { Biblioteca } from "../Biblioteca";
import { Command } from "./Command";

export class SairCommand implements Command {

  execute(): void {
    console.log("Encerrando o sistema...");
    process.exit(0); 
  }
   
  }
