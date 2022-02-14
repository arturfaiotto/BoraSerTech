CREATE DATABASE Manutencao
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Manutencao;

CREATE TABLE Fornecedores (
    CNPJ CHAR(15) NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Telefone CHAR(15) NOT NULL,

    CONSTRAINT PK_Fornecedores PRIMARY KEY (CNPJ)
);

CREATE TABLE Clientes (
    CPF CHAR(15) NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Telefone CHAR(15) NOT NULL,

    CONSTRAINT PK_Fornecedores PRIMARY KEY (CPF)
);

CREATE TABLE Produtos (
    Codigo CHAR(10) NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    QuantidadeAtual VARCHAR(4) NOT NULL,
    QuantidadeMinima VARCHAR(4) NOT NULL,

    CONSTRAINT PK_Produtos PRIMARY KEY (Codigo)
);

CREATE TABLE ForcedoresProdutos (
    Fornecedor CHAR NOT NULL,
    Produto CHAR NOT NULL,

    CONSTRAINT FK_ForcedoresProdutos_Fornecedores FOREIGN KEY (Fornecedor) REFERENCES Fornecedores(CNPJ),
    CONSTRAINT FK_ForcedoresProdutos_Produto FOREIGN KEY (Produto) REFERENCES Produtos(Codigo)
);

CREATE TABLE Funcionarios (
    Matricula CHAR(15) NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Salario CHAR(7) NOT NULL,

    CONSTRAINT PK_Fornecedores PRIMARY KEY (Matricula)
);

CREATE TABLE Atendimentos (
    Id INT NOT NULL AUTO_INCREMENT,
    DataHora DATE,
    Cliente CHAR NOT NULL,
    Funcionario CHAR NOT NULL,
    Atendimento INT NOT NULL,

    CONSTRAINT PK_Atendimento PRIMARY KEY (Id),
    CONSTRAINT FK_Atendimentos_Clientes FOREIGN KEY (Cliente) REFERENCES Clientes(CPF),
    CONSTRAINT FK_Atendimentos_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Matricula),
    CONSTRAINT FK_Atendimentos_Atendimentos FOREIGN KEY (Atendimento) REFERENCES Atendimentos(Id)
);

CREATE TABLE Servicos (
    Codigo CHAR(10) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    TempoMedio VARCHAR(4) NOT NULL,
    DataHora DATE,
    Atendimento INT NOT NULL,

    CONSTRAINT PK_Servicos PRIMARY KEY (Codigo),
    CONSTRAINT FK_Servicos_Atendimentos FOREIGN KEY (Atendimento) REFERENCES Atendimentos(Id)
);

CREATE TABLE ProdutosServicos (
    TempoGasto CHAR(4) NOT NULL,
    QuantidadeProduto CHAR(4) NOT NULL,
    Servico CHAR NOT NULL,
    Produto CHAR NOT NULL,

    CONSTRAINT FK_Servicos_Servicos FOREIGN KEY (Servico) REFERENCES Servicos(Codigo),
    CONSTRAINT FK_Servicos_Produtos FOREIGN KEY (Produto) REFERENCES Produtos(Codigo)
);

CREATE TABLE Preventivos (
    Codigo INT NOT NULL,
    DataProx DATE NOT NULL,

    CONSTRAINT PK_Preventivos PRIMARY KEY (Codigo)
);

CREATE TABLE Corretivos (
    Codigo INT NOT NULL,
    Motivo VARCHAR(255) NOT NULL,

    CONSTRAINT PK_Corretivos PRIMARY KEY (Codigo)
);

CREATE TABLE FuncionariosServicos (
    Resultado VARCHAR(255) NOT NULL,
    DataHora DATE NOT NULL,
    Servico CHAR NOT NULL,
    Funcionario CHAR NOT NULL,

    CONSTRAINT FK_FuncionariosServicos_Servicos FOREIGN KEY (Servico) REFERENCES Servicos(Codigo),
    CONSTRAINT FK_FuncionariosServicos_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Matricula)
);