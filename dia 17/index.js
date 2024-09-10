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
    let idHotel;
    let existe = false;
    do{
        idHotel = parseInt(prompt("Digite o id do hotel: "));
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                existe = true
                break;
        }
    }
        if(!existe){
            console.log("Id de hotel não cadastrado!");
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

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
    idReserva++
    reservas.push(reserva);
}

function procurarReservaPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel === reserva.IdHotel) {
            const hotel = hoteis.find(hotel => hotel.Id === reserva.IdHotel);
            if (hotel) {
                console.log("Hotel: ", hotel.Nome);
                console.log("Responsável: ", reserva.NomeResponsavel);
                console.log("Dia Entrada: ", reserva.DiaEntrada);
                console.log("Dia Saída: ", reserva.DiaSaida);
            }
        }
    });
}

function procurarHotelPelaReserva(idReserva) {
    const reserva = reservas.find(reserva => reserva.Id === idReserva);
    if (reserva) {
        const hotel = hoteis.find(hotel => hotel.Id === reserva.IdHotel);
        if (hotel) {
            console.log("Hotel", hotel.Nome);
            console.log("Endereço", hotel.Endereco);
            console.log("Dia Entrada", reserva.DiaEntrada);
            console.log("Dia Saída", reserva.DiaSaida);
        }
    } else {
        console.log("Reserva não encontrada!");
    }
}

function procurarReservaPeloNome(nome){
    reservas.forEach(reserva => {
        if(nome === reserva.NomeResponsavel){
            const hotel = hoteis.find(hotel => hotel.Id === reserva.IdHotel);
            if (hotel) {
                console.log("Id da reserva: " + reserva.Id);
                console.log("Hotel: " + hotel.Nome);
            } else {
                console.log("Hotel não encontrado!");
            }
        }
    });
}

function procurarHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome);
        }
    }
    return hoteisProcurados
}

function atualizarTelefone(idHotel, telefone) {
    const hotel = hoteis.find(hotel => hotel.Id === idHotel);
    if (hotel) {
        hotel.Telefone = telefone;
        console.log("Número de telefone atualizado!!");
    } else {
        console.log("Hotel não encontrado!");
    }
}

let continuar = true

do{
    let opcao = prompt("Escolha uma opção: \n1 - Cadastrar Hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" +
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis pela categoria" +
        "\n7 - Atualizar telefone de um hotel \n8 - Encerrar programa")

    switch (opcao) {
        case 1:
            cadastrarHotel()
            break;
        case 2:
            cadastrarReserva()
            break;
        case 3:
            procurarReservaPeloHotel(prompt("Digite o id do hotel: "));
            break;
        case 4:
            procurarHotelPelaReserva(prompt("Digite o id da reserva: "));
            break;
        case 5:
            procurarReservaPeloNome(prompt("Digite o nome do responsavel pela reserva: "));
            break;
        case 6:
            let hoteisProcurados = procurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar: ")));
            console.log(hoteisProcurados);
            break;
        case 7:
            let IdHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar: "));
            let telefone = prompt("Digite o novo telefone: ");
            atualizarTelefone(IdHotel, telefone);
            break;
        case 8:
            console.log("Programa Encerrado com sucesso!")
            continuar = false
            break;
        default:
            console.log("Opção Inválida!!!")
            break;
    }
} while(continuar)