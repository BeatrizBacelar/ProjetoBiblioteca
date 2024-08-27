export class CommandSingleton {
  private static instancia: CommandSingleton;

  private constructor() {}

  public static obterInstancia(): CommandSingleton {
    if (!this.instancia) {
      this.instancia = new CommandSingleton();
    }
    return this.instancia;
  }

  
}