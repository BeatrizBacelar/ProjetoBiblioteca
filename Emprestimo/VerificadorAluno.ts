import { Livro } from "../Livro";
import { Usuario } from "../Usuario/Usuario";
import { IVerificadorEmprestimo } from "./IVerificadorEmprestimo";

export class VerificadorAluno implements IVerificadorEmprestimo {

  verificarReserva(usuario: Usuario, livro: Livro): Boolean {
    const qteReserva = usuario.getMinhasReservas().length < 3;
    if (qteReserva){
      return true;
    }
    return false;
  }

  verificarEmprestimo(usuario: Usuario, livro: Livro): Boolean {
    const devedor = usuario.getEmprestimos().find(emp => emp.getDataDevolucao() < new Date());
    const emprestimoAtual = usuario.getEmprestimoById(livro.getCodigo());
    const atingiuMaximo = usuario.getEmprestimos().length >= usuario.getLimiteEmprestimos();
    const reservaExistente = usuario.getMinhasReservas().find(reserva => reserva.getCodigoLivro() === livro.getCodigo());
    const exemplares = livro.getExemplares().filter(ex => ex.getIdCodigoLivro() === livro.getCodigo() && ex.getStatus() === 'disponivel');
    if (livro.getExemplar(livro.getCodigo()) &&
        !devedor &&
        !atingiuMaximo &&
        !emprestimoAtual){
        if ((reservaExistente && livro.getReservas().length >= exemplares.length) ||
        livro.getReservas().length < exemplares.length){
          return true;
        } 
    }
    return false;
  }
}