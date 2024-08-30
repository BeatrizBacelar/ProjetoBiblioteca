import { Livro } from "../Livro";
import { Usuario } from "../Usuario/Usuario";
import { IVerificadorEmprestimo } from "./IVerificadorEmprestimo";

export class VerificadorProfessor implements IVerificadorEmprestimo {

  verificarEmprestimo(usuario: Usuario, livro: Livro): Boolean {
    const devedor = usuario.getEmprestimos().find(emp => emp.getDataDevolucao() < new Date());
    if (livro.getExemplar(livro.getCodigo()) && !devedor) {
      return true;
    }
    return false;
  }

}