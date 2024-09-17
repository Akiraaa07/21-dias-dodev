class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true

    constructor(titulo, autor, editora, anodepublicacao){
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoDePublicacao = anodepublicacao;
    }
}

let livros = [];

//Criando Objetos
livros.push(new Livro("Livro01", "Sonia", "Editora A", 1960));
livros.push(new Livro("Livro02", "Igor", "Editora B", 2004));
livros.push(new Livro("Livro03", "Caio", "Editora C", 2007));
livros.push(new Livro("Livro04", "Yuri", "Editora D", 2014));
livros.push(new Livro("Livro05", "Wilson", "Editora E", 1985));

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoLivros = []

    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome;
        this.Endereco = endereco;
        this.Telefone = telefone;
        this.AcervoLivros = acervo;
    }

    //Criando método construtor = function
    buscarLivroPeloTitulo(titulo){
        let livroEncontrado = false;
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo){
                console.log(livro)
                livroEncontrado = true;
            }
        });
        if(!livroEncontrado) {
            console.log("Livro não encontrado!!")
        }
    }

    emprestarLivro(titulo){
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                if (livro.Disponibilidade) {
                    livro.Disponibilidade = false;
                    console.log(`Livro '${titulo}' emprestado com sucesso.`);
                    emprestado = true
                } else {
                    console.log(`Livro '${titulo}' não está disponível.`);
                }
            }
        });
        if(!emprestado) {
            console.log("Livro não encontrado ou já emprestado");
        }
    }

    devolverLivro(titulo) {
        let devolvido = false;
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                livro.Disponibilidade = true;
                console.log(`Livro '${titulo}' devolvido com sucesso.`);
                devolvido = true;
            }
        });
        if (!devolvido) {
            console.log("Livro não encontrado");
        }
    }
}

let biblioteca = new Biblioteca("Biblioteca do Japa", "Rua 2", "123456", livros);

biblioteca.buscarLivroPeloTitulo("Livro02");
biblioteca.emprestarLivro("Livro03");
biblioteca.devolverLivro("Livro03");