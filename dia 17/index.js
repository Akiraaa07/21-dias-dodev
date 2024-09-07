class Hotel{
    Id
    Nome
    Categoria
    Endereco
    Telefone

    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva{
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida

    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida){
        this.Id = id;
        this.IdHotel = idHotel; 
        this.NomeResponsavel = nomeResponsavel;
        this.DiaEntrada =  diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1


function cadastrarHotel(){
    let nome = prompt("Digite o nome do hotel: ");
    let categoria = prompt("Digite a categoria do hotel: ");
    let endereco = prompt("Digite o endereço do hotel: ");
    let telefone = prompt("Digite o telefone do hotel: ");
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++;
    hoteis.push(hotel)
}