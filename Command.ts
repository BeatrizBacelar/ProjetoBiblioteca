export class Command {
  private static instancia: Command;

  private constructor() {}

  public static obterInstancia(): Command {
    if (!this.instancia) {
      this.instancia = new Command();
    }
    return this.instancia;
  }
}