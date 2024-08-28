import * as readline from 'readline';
import { CommandSingleton } from "./Command/CommandSingleton";

    const myCommand = new CommandSingleton();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (entrada: string) => {
       
        myCommand.lerComando(entrada);
    });