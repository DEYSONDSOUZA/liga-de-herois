export class Missao{
    constructor(titulo){
        this.titulo = titulo;   
        this.herois = [];
    };
    adcionarHeroi(heroi){
        this.herois.push(heroi);
    };
    forcaDaEquipe(){
        let total = this.herois.reduce((contador, heroi) => {
            return contador + heroi.calcularMediaDePontos();
        },0);
        return total;
    };
    getRelatorio(){
        console.log(`Missão: ${this.titulo}`);
        console.log(`Força total: ${this.forcaDaEquipe()}`);
    }

}