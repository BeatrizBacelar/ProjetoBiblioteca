import {Livro} from './Livro';
import {SistemaBiblioteca} from './SistemaBiblioteca';

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


livros.forEach((livro) => console.log(livro.titulo));