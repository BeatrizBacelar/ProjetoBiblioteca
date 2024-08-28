import { Livro } from "./Livro";
import { Usuario } from "./Usuario/Usuario";

export class Reserva {

  dataReserva: Date = new Date(); 
  usuario: Usuario = {} as Usuario; 
  livro: Livro = {} as Livro; 

  constructor(dataReserva: Date, usuario: Usuario, livro: Livro) {
    this.dataReserva = dataReserva;
    this.usuario = usuario;
    this.livro = livro;
  }
}