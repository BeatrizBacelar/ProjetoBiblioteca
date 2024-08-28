import { Livro } from "./Livro";
import { Usuario } from "./Usuario/Usuario";

export class Reserva {

  dataReserva: Date;
  usuario: Usuario;
  livro: Livro;

  constructor(dataReserva: Date, usuario: Usuario, livro: Livro) {}
}