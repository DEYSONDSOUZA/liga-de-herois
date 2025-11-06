// exportacao nomeada
export class Personagem {
    constructor(nome, poder) {
        this.nome = nome;
        this.poder = poder;
    }
    getInfor(){
        return `meu nome é: ${this.nome} e meu poder é: ${this.poder}`;
    }
}