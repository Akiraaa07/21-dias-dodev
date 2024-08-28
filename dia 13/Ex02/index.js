class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidadeMaxima;
        this.Aceleracao = aceleracao;
    }

    tempoSegundos(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao);
        return resultado;
    }
}

class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor 

    constructor(nome, tipo, distancia){
        this.Nome = nome;
        this.Tipo = tipo;
        this.Distancia = distancia;
        this.Vencedor = "";
        this.Participantes = [];
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].tempoSegundos(this.Distancia);
        let vencedor = this.Participantes[0];

        for (let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].tempoSegundos(this.Distancia);
            if(tempo < menorTempo){
                menorTempo = tempo;
                vencedor = this.Participantes[index];
            }
        }
        return this.Vencedor = vencedor;
    }
    exibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome);
    }
}

let corrida = new Corrida("Civic", "Fórmula 1", 50000);

corrida.Participantes.push(new Carro("Up", 120, 160, 5));
corrida.Participantes.push(new Carro("Lancer", 210, 200, 9));
corrida.Participantes.push(new Carro("G63", 300, 220, 10));

corrida.DefinirVencedor();
corrida.exibirVencedor();
