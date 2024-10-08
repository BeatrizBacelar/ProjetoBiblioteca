import { Livro } from "../Livro";
import { Usuario } from "../Usuario/Usuario";


export interface IVerificadorEmprestimo {

  verificarEmprestimo(usuario: Usuario, livro: Livro) : Boolean;
  verificarReserva(usuario: Usuario, livro: Livro) : Boolean;
}