class Biblioteca {
    private emprestimos: Map<number, Emprestimo[]> = new Map();
    private reservas: Map<number, Reserva[]> = new Map();

    // Emprestar livro
    emprestar(usuario: Usuario, livro: Livro): string {
        // Aplicar regras de negócio específicas aqui, usando polimorfismo
        return `${usuario.nome} emprestou ${livro.titulo}`;
    }

    // Outros métodos para reserva, devolução, etc.
}
