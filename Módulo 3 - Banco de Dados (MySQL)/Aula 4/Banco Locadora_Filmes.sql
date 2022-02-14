CREATE DATABASE LocadoraFilmes
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE LocadoraFilmes;

CREATE TABLE Filmes (
	Id INT NOT NULL AUTO_INCREMENT,
    Titulo VARCHAR(100) NOT NULL,
	Genero VARCHAR(20) NOT NULL,
    Estudio VARCHAR(100),
    AnoProducao INT(4) NOT NUll,
    PaisOrigem VARCHAR(15) NOT NUll,
    Idioma VARCHAR(15) NOT NUll,
    Duracao CHAR(3),
	
    CONSTRAINT PK_Filmes PRIMARY KEY (Id)	
);

CREATE TABLE Atores (
	Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    PaisNascimento VARCHAR(100) NOT NULL,
    DataNascimento VARCHAR(100) NOT NULL,
    
    CONSTRAINT PK_Atores PRIMARY KEY (Id)
);

CREATE TABLE FilmesAtores (
	Id INT NOT NULL AUTO_INCREMENT,
    Papel VARCHAR(100) NOT NULL,
    EhEstrela VARCHAR(100) NOT NULL,
	Filme INT NOT NULL,
    Ator INT NOT NULL,
	    
    CONSTRAINT PK_FilmesAtores PRIMARY KEY (Id),
    CONSTRAINT FK_FilmesAtores_Filmes FOREIGN KEY(Filme) REFERENCES Filmes(Id),
    CONSTRAINT FK_FilmesAtores_Atores FOREIGN KEY(Ator) REFERENCES Atores(Id)
);

CREATE TABLE Fitas (
	Numero CHAR(10) NOT NULL,
    DataCompra DATE,
    Filme INT NOT NULL,
    
    CONSTRAINT PK_Fitas PRIMARY KEY (Numero),
    CONSTRAINT FK_Fitas_Filmes FOREIGN KEY(Filme) REFERENCES Filmes(Id)
);

CREATE TABLE Clientes (
	NumeroAssociado CHAR(10) NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    
    CONSTRAINT PK_Clientes PRIMARY KEY (NumeroAssociado)
);

CREATE TABLE Funcionarios (
	Matricula CHAR(10) NOT NULL,
	Nome VARCHAR(100) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    Salario DECIMAL(6,2),
    
    CONSTRAINT PK_Funcionarios PRIMARY KEY (Matricula)
);

CREATE TABLE Administrativo (
	Codigo CHAR(10) NOT NULL,
    Funcionario CHAR,
    
    CONSTRAINT PK_Administrativo PRIMARY KEY (Codigo),
    CONSTRAINT FK_Administrativo_Funcionarios FOREIGN KEY(Funcionario) REFERENCES Funcionarios(Matricula)
);

CREATE TABLE Atendentes (
	Codigo CHAR(10) NOT NULL,
	Funcionario CHAR,
    
    CONSTRAINT PK_Atendentes PRIMARY KEY (Codigo),
    CONSTRAINT FK_Atendentes_Funcionarios FOREIGN KEY(Funcionario) REFERENCES Funcionarios(Matricula)
);

CREATE TABLE Alugueis (
	DataAluguel DATE,
    Atendente CHAR,
    Cliente CHAR,
    Fita CHAR,
    
    CONSTRAINT FK_Alugueis_Atendentes FOREIGN KEY(Atendente) REFERENCES Atendentes(Codigo),
    CONSTRAINT FK_Alugueis_Clientes FOREIGN KEY(Cliente) REFERENCES Clientes(NumeroAssociado),
    CONSTRAINT FK_Alugueis_Fitas FOREIGN KEY(Fita) REFERENCES Fitas(Numero)
);