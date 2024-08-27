export class SistemaBiblioteca {
    private static instance: SistemaBiblioteca;

    private constructor() {}

    public static getInstance(): SistemaBiblioteca {
        if (!SistemaBiblioteca.instance) {
            SistemaBiblioteca.instance = new SistemaBiblioteca();
        }
        return SistemaBiblioteca.instance;
    }

    public processarComando(comando: string) {
        const [cmd, ...args] = comando.split(" ");
        // Processar comandos como 'emp', 'dev', 'res', 'obs'
    }
}