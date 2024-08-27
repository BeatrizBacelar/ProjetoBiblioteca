import { Exemplar } from './Exemplar';
import {Livro} from './Livro';
import {SistemaBiblioteca} from './SistemaBiblioteca';
import { AlunoGraduacao } from './Usuario/AlunoGraduacao';
import { AlunoPosGraduacao } from './Usuario/AlunoPosGraduacao';
import { Professor } from './Usuario/Professor';
import { Usuario } from './Usuario/Usuario';


const livros: Livro[] = [
  new Livro(
    "100",
    "Engenharia de Software",
    "AddisonWesley",
    ["Ian Sommervile"],
    6,
    2000
  ),
  new Livro(
    "101",
    "UML – Guia do Usuário",
    "Campus",
    ["Grady Booch", "James Rumbaugh","Ivar Jacobson"],
    7,
    2000
  ),
  new Livro(
    "200",
    "Code Complete",
    "Microsoft Press",
    ["Steve McConnell "],
    2,
    2014
  ),
  new Livro(
    "201",
    "Agile Software Development, Principles, Patterns, and Practices",
    "Prentice Hall",
    ["Robert Martin"],
    1,
    2002
  ),
  new Livro(
    "300",
    "Refactoring: Improving the Design of Existing Code",
    "AddisonWesley Professional",
    ["Martin Fowler"],
    1,
    1999
  ),
  new Livro(
    "301",
    "Software Metrics: A Rigorous and Practical Approach",
    "CRC Press",
    ["Norman Fenton",
    "James Bieman"],
    3,
    2014
  ),
  new Livro(
    "400",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "AddisonWesley Professional",
    ["Erich Gamma",
      "Richard Helm", "Ralph Johnson", "John Vlissides"],
    1,
    1994
  ),
  new Livro(
    "401",
    "UML Distilled: A Brief Guide to the Standard Object Modeling Language",
    "AddisonWesley Professional",
    ["Martin Fowler"],
    3,
    2003
  ),
];

const exemplares: Exemplar[] = [
  new Exemplar(1, Livro.encontrarLivroPorCodigo('100', livros), true),
  new Exemplar(2, Livro.encontrarLivroPorCodigo('100', livros), true),
  new Exemplar(3, Livro.encontrarLivroPorCodigo('101', livros), true),
  new Exemplar(4, Livro.encontrarLivroPorCodigo('200', livros), true),
  new Exemplar(5, Livro.encontrarLivroPorCodigo('201', livros), true),
  new Exemplar(6, Livro.encontrarLivroPorCodigo('300', livros), true),
  new Exemplar(7, Livro.encontrarLivroPorCodigo('300', livros), true),
  new Exemplar(8, Livro.encontrarLivroPorCodigo('400', livros), true),
  new Exemplar(9, Livro.encontrarLivroPorCodigo('400', livros), true)
];

const usuarios: Usuario[] = [
  new AlunoGraduacao(123, 'Joao da Silva'),
  new AlunoPosGraduacao(456, 'Luiz Fernando Rodrigues'),
  new AlunoGraduacao(789, 'Pedro Paulo'),
  new Professor(100, 'Carlos Lucena'),
];

exemplares.forEach(exemplar => {
  const livro = exemplar.livro;
  if (livro) {
    livro.setExemplar(exemplar);
  }
});

livros.forEach((livro) => {
  console.log(`Livro: ${livro.codigo}, Exemplares: ${livro.meusExemplares.length}`);
});

usuarios.forEach((user) => {
  console.log(`Nome: ${user.nome}, Emprestimo: ${user.getLimiteEmprestimos()}`);
});

