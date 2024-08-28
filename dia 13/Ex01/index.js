class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }

    exibirInformacoes(){
        console.log("Tipo: " + this.Tipo);
        console.log("Processador: " + this.Processador);
        console.log("Video: " + this.Video);
        console.log("Armazenamento: " + this.Armazenamento);
        console.log("MemoriaRam: " + this.MemoriaRam);
        console.log("Ssd: " + this.Ssd);
    }
}

const meuComputador = new Computador("Pc gamer", "Intel(R) Core(TM) i7-9700K ", "Dedicado", 1000, 16, true);
meuComputador.exibirInformacoes();