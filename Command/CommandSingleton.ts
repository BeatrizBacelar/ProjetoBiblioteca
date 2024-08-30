import { Command } from "./Command";
import { ConsultaLivroCommand } from "./ConsultaLivroCommand";
import { ConsultaUsuarioCommand } from "./ConsultaUsuarioCommand";
import { DevolucaoCommand } from "./DevolucaoCommand";
import { EmprestimoCommand } from "./EmprestimoCommand";
import { ReservaCommand } from "./ReservaCommand";

export class CommandSingleton {
  private static instancia: CommandSingleton;
  private commandMap: Map<string, Command>;

  constructor() {
      // Inicializa o mapa com os comandos disponíveis
      this.commandMap = new Map<string, Command>();
      this.commandMap.set('res', new ReservaCommand());
      this.commandMap.set('emp', new EmprestimoCommand());
      this.commandMap.set('dev', new DevolucaoCommand());
      this.commandMap.set('liv', new ConsultaLivroCommand());
      this.commandMap.set('usu', new ConsultaUsuarioCommand());
      this.commandMap.set('dev', new DevolucaoCommand());
      // this.commandMap.set('obs', new DevolucaoCommand());
  }

  public static obterInstancia(): CommandSingleton {
    if (!this.instancia) {
      this.instancia = new CommandSingleton();
    }
    return this.instancia;
  }

  public lerComando(commandoTerminal: string) {
    const [comando, ...args] = commandoTerminal.split(' ');

    const command: Command | undefined = this.commandMap.get(comando);

    if (!command) {
        return 'Comando não reconhecido';
    }
    command.execute(args);
}

  
}