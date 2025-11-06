// personagens
import { Personagem } from "./personagem.js";
// heroi
import { Heroi } from './heroi.js';
// missao
import { Missao } from './missao.js';
// liga
// import, export

const herois = [
    { nome: "Batman", poder: "Filantropia noturna", pontos: [80, 95, 88, 100, 60] }, 
    { nome: "Homem de Ferro", poder: "Riqueza infinita", pontos: [90, 92, 85, 70, 100] },
    { nome: "Hulk", poder: "Raiva produtiva", pontos: [60, 80, 90, 95, 100] },
    { nome: "Flash", poder: "Entrega antes do prazo", pontos: [100, 98, 95, 97, 99] }, 
    { nome: "Homem-Aranha", poder: "Procrastinação com estilo", pontos: [70, 75, 85, 60, 78, 98] }
];
let missao = new Missao (`Projeto Liga de Herois.`);
herois.forEach((heroi) => {
    let heroiObj = new Heroi(heroi.nome, heroi.poder, heroi.pontos);
    missao.adcionarHeroi(heroiObj);
    console.log(heroiObj.getResumo());
});
missao.getRelatorio();

let heroi1 = new Heroi('Clark', 'Visão de raio-x', [150, 200, 250, 300, 350]);
console.log(heroi1.getResumo());

missao.adcionarHeroi(heroi1)
missao.getRelatorio();

