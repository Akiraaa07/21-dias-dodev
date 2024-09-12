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
}

//Criando método construtor = function
