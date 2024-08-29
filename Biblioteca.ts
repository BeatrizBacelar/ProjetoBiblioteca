import { CommandSingleton } from "./Command/CommandSingleton";
import { Emprestimo } from "./Emprestimo/Emprestimo";
import { Exemplar } from "./Exemplar";
import { Livro } from "./Livro";
import { Reserva } from "./Reserva";
import { AlunoGraduacao } from "./Usuario/AlunoGraduacao";
import { AlunoPosGraduacao } from "./Usuario/AlunoPosGraduacao";
import { Professor } from "./Usuario/Professor";
import { Usuario } from "./Usuario/Usuario";

export class Biblioteca {
    private emprestimos: Map<number, Emprestimo[]> = new Map();
    private reservas: Map<number, Reserva[]> = new Map();
    commandManager = CommandSingleton.obterInstancia();
    private static instancia: Biblioteca;
    livros: Livro[] = [];
    exemplares: Exemplar[] = [];
    usuarios: Usuario[] = [];

    public static obterInstancia(): Biblioteca {
        if (!this.instancia) {
          this.instancia = new Biblioteca();
          this.instancia.instanciaDados();
        }
        return this.instancia;
      }
    
    encontrarUsuarioPorId(codigo: number) : Usuario | null {
        return this.usuarios.find(usuario => usuario.getCodigo() === codigo) || null;
    }

    encontrarLivroPorId(codigo: number) : Livro | undefined {
        return this.livros.find(livro => livro.getCodigo() === codigo)
    }

    instanciaDados() {
        this.livros = [
            new Livro(100, "Engenharia de Software", "AddisonWesley", ["Ian Sommervile"], 6, 2000),
            new Livro(101, "UML – Guia do Usuário", "Campus", ["Grady Booch", "James Rumbaugh", "Ivar Jacobson"], 7, 2000),
            new Livro(200, "Code Complete", "Microsoft Press", ["Steve McConnell"], 2, 2014),
            new Livro(201, "Agile Software Development, Principles, Patterns, and Practices", "Prentice Hall", ["Robert Martin"], 1, 2002),
            new Livro(300, "Refactoring: Improving the Design of Existing Code", "AddisonWesley Professional", ["Martin Fowler"], 1, 1999),
            new Livro(301, "Software Metrics: A Rigorous and Practical Approach", "CRC Press", ["Norman Fenton", "James Bieman"], 3, 2014),
            new Livro(400, "Design Patterns: Elements of Reusable Object-Oriented Software", "AddisonWesley Professional", ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"], 1, 1994),
            new Livro(401, "UML Distilled: A Brief Guide to the Standard Object Modeling Language", "AddisonWesley Professional", ["Martin Fowler"], 3, 2003)
          ];
          
          this.exemplares  = [
            new Exemplar(1, 100, 'disponivel'),
            new Exemplar(2, 100, 'disponivel',),
            new Exemplar(3, 101, 'disponivel',),
            new Exemplar(4, 200, 'disponivel',),
            new Exemplar(5, 201, 'disponivel',),
            new Exemplar(6, 300, 'disponivel',),
            new Exemplar(7, 300, 'disponivel',),
            new Exemplar(8, 400, 'disponivel',),
            new Exemplar(9, 400, 'disponivel',)
          ];
          
          this.usuarios = [
            new AlunoGraduacao(123, 'Joao da Silva'),
            new AlunoPosGraduacao(456, 'Luiz Fernando Rodrigues'),
            new AlunoGraduacao(789, 'Pedro Paulo'),
            new Professor(100, 'Carlos Lucena'),
          ];
          
          this.exemplares.forEach(exemplar => {
            const livro = this.encontrarLivroPorId(exemplar.getIdCodigoLivro());
            if (livro) {
              livro.setExemplar(exemplar);
            }
          });
    }

    // Emprestar livro
    emprestar(usuario: Usuario, livro: Livro): string {
        // Aplicar regras de negócio específicas aqui, usando polimorfismo
        return `${usuario.getNome()} emprestou ${livro.getTitulo()}`;
    }

    // Outros métodos para reserva, devolução, etc.
    reservar(codigo: number, codigoLivro: number): string | undefined {
        const usuario: Usuario | null = this.encontrarUsuarioPorId(codigo);
        const livro: Livro | undefined = this.encontrarLivroPorId(codigoLivro);
        if (usuario && livro) {
            const reservasDoUsuario = this.reservas.get(usuario.getCodigo()) || [];
            
        // Verifica se o usuário já reservou 3 livros (colocar em command)
            if (reservasDoUsuario.length >= 3) {
                return `Reserva falhou: O usuário ${usuario.getNome()} já possui 3 livros reservados.`;
            }
    
            // Verifica se o livro já foi reservado pelo usuário (colocar em command)
            const reservaExistente = reservasDoUsuario.find(reserva => reserva.getcodigoLivro() === livro.getCodigo());
            if (reservaExistente) {
            return `Reserva falhou: O usuário ${usuario.getNome()} já reservou o livro "${livro.getTitulo()}".`;
            }
    
            // Registra a nova reserva
            const novaReserva = new Reserva(livro.getCodigo(), usuario.getCodigo(), new Date,);
            console.log(novaReserva)
            reservasDoUsuario.push(novaReserva);
            this.reservas.set(usuario.getCodigo(), reservasDoUsuario);
    
            //(colocar em command)
            return `Reserva bem-sucedida: O usuário ${usuario.getNome()} reservou o livro "${livro.getTitulo()}".`;
        }
    }

    // Método para obter reservas de um usuário específico
    getReservasPorUsuario(codigoUsuario: number): Reserva[] {
        return this.reservas.get(codigoUsuario) || [];
    }  

}
