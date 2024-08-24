import { Usuario } from "../Usuario/Usuario";

export interface IVerificadorEmprestimo {

  verificarEmprestimo(usuario: Usuario);
}