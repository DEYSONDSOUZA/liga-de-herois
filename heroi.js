// extentendo a classe Personagem
import { Personagem } from './personagem.js';
export class Heroi extends Personagem {
    constructor(nome, poder, pontos){
        super(nome, poder);
        this.pontos = pontos;
    };
    //calcularMediaDePontos
    calcularMediaDePontos(){
        let pontosOrdenados = [];
        if(this.pontos){
            pontosOrdenados = this.pontos.sort((a, b) =>{
                return a - b;
            });
        }
        let pontosValidos = pontosOrdenados.slice(1, 4);
        let soma = pontosValidos.reduce((contador, ponto) => {
            return contador =+ ponto
        },0)

        return soma / pontosValidos.length;

    };
    //classificacao
    classificar(){
        let media = this.calcularMediaDePontos();
        if(media <= 100){
            return `Iniciante.`;
        }else if(media <= 300){
            return `Intermediario.`;
        }return `Lendário.`;
    }
    //getResumo
    getResumo(){
        return `${this.getInfor()} e minha media de pontos é: ${this.calcularMediaDePontos()} - ${this.classificar()}`
    };
    
}