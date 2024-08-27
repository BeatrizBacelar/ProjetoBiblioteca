import { Livro } from "./Livro";
import { Usuario } from "./Usuario/Usuario";

export class Reserva {

  dataReserva: string;
  usuario: Usuario;
  livro: Livro;
}