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
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++;
    hoteis.push(hotel);
}

function cadastrarReserva(){
    let IdHotel
    let existe = false;
    do{
        idHotel = parseInt(prompt("Digite o id do hotel: "));
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length
                existe = true
            }else if(i == hoteis.length - 1){
                console.log("id de hotel não cadastrado!");
            }
        }
    }while(!existe)

    let nome = prompt("Digite o nome do responsavel: ");
    let diaEntrada = parseInt(prompt("Digite o dia de entrada: "));
    let diaSaida 
    do{
        diaSaida = parseInt(prompt("Digite o dia de saída: "));
        if(diaSaida < diaEntrada){ 
            console.log("Você deve escolher um dia de saida maior do que o dia de entrada!");
        }
    }while(diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function procurarReservasPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.IdHotel){
            console.log("Hotel: ", hoteis[i].Nome);
            console.log("Responsável: ", reserva.NomeResponsavel);
            console.log("Dia Entrada: ", reserva.DiaEntrada);
            console.log("Dia Saída: ", reserva.DiaSaida);
        }
    })
}

function procurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva - 1].idHotel
    console.log("Hotel", hoteis[idHotel - 1].Nome);
    console.log("Endereço", hoteis[idHotel - 1].Endereco);
    console.log("Dia Entrada", reservas[idReserva - 1].DiaEntrada)
    console.log("Dia Saída", reservas[idReserva - 1].DiaSaida)
}