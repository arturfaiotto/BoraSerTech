CREATE DATABASE Frota
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Frota;

CREATE TABLE Funcionarios (
    Id INT NOT NULL AUTO_INCREMENT,
    Numero CHAR(10) NOT NULL,
    Nome VARCHAR(255) NOT NULL,
    Funcao VARCHAR(100) NOT NULL,
    CPF CHAR(13) NOT NULL,
    CTPF CHAR(15) NOT NULL,

    CONSTRAINT PK_Funcionarios PRIMARY KEY (Id)
);

CREATE TABLE FuncionariosAdministrativos (
    Id INT NOT NULL AUTO_INCREMENT,
    CodigoBancario CHAR(10) NOT NULL,
    Funcionario INT NOT NULL,

    CONSTRAINT PK_FuncionariosAdministrativos PRIMARY KEY (Id),
    CONSTRAINT FK_FuncionariosAdministrativos_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Mecanicos (
    Id INT NOT NULL AUTO_INCREMENT,
    NumeroArmario CHAR(10) NOT NULL,
    Funcionario INT NOT NULL,

    CONSTRAINT PK_Mecanicos PRIMARY KEY (Id),
    CONSTRAINT FK_Mecanicos_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Cobradores (
    Id INT NOT NULL AUTO_INCREMENT,
    NumeroViagensMes CHAR(3) NOT NULL,
    AcumuloVendaPassagens CHAR(3) NOT NULL,
    Funcionario INT NOT NULL,

    CONSTRAINT PK_Cobradores PRIMARY KEY (Id),
    CONSTRAINT FK_Cobradores_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Motoristas (
    Id INT NOT NULL AUTO_INCREMENT,
    CNH CHAR(10) NOT NULL,
    Categoria CHAR(3) NOT NULL,
    DataObtencao DATE,
    Validade DATE,
    Funcionario INT NOT NULL,

    CONSTRAINT PK_Motoristas PRIMARY KEY (Id),
    CONSTRAINT FK_Motoristas_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Onibus (
    Id INT NOT NULL AUTO_INCREMENT,
    Placa CHAR(7) NOT NULL,
    Chassi CHAR(15) NOT NULL,
    CapacidadePassageiros CHAR(3) NOT NULL,
    AnoFabricacao DATE,

    CONSTRAINT PK_Onibus PRIMARY KEY (Id)
);

CREATE TABLE Viagens (
    Id INT NOT NULL AUTO_INCREMENT,
    DataHora VARCHAR(15) NOT NULL,
    CidadePartida VARCHAR(15) NOT NULL,
    CidadeDestino VARCHAR(15) NOT NULL,
    NumeroPassageiros CHAR(3) NOT NULL,
    Motorista INT NOT NULL,
    Cobrador INT NOT NULL,

    CONSTRAINT PK_Viagens PRIMARY KEY (Id),
    CONSTRAINT FK_Viagens_Motoristas FOREIGN KEY (Motorista) REFERENCES Motoristas(Id),
    CONSTRAINT FK_Viagens_Cobradores FOREIGN KEY (Cobrador) REFERENCES Cobradores(Id)
);

CREATE TABLE OnibusViagens (
    Id INT NOT NULL AUTO_INCREMENT,
    Liberado CHAR(3) NOT NULL,
    DataLiberado DATE,
    Mecanico INT NOT NULL,
    Viagem INT NOT NULL,
    Onibus INT NOT NULL,

    CONSTRAINT PK_OnibusViagens PRIMARY KEY (Id),
    CONSTRAINT FK_OnibusViagens_Mecanicos FOREIGN KEY (Mecanico) REFERENCES Mecanicos(Id),
    CONSTRAINT FK_OnibusViagens_Viagem FOREIGN KEY (Viagem) REFERENCES Viagens(Id),
    CONSTRAINT FK_OnibusViagens_Onibus FOREIGN KEY (Onibus) REFERENCES Viagens(Id)
);