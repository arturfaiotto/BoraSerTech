CREATE DATABASE Faculdade
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Faculdade;

CREATE TABLE Endereco (
    Id INT NOT NULL AUTO_INCREMENT,
    Rua VARCHAR(150) NOT NULL,
    Cidade VARCHAR(150) NOT NULL,
    Bairro VARCHAR(150) NOT NULL,
    Numero CHAR(5) NOT NULL,
    Estado VARCHAR(150) NOT NULL,

    CONSTRAINT PK_Endereco PRIMARY KEY (id)
);

CREATE TABLE Departamento (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Numero CHAR(10) NOT NULL,
    Telefone CHAR(15) NOT NULL,

    CONSTRAINT PK_Departamento PRIMARY KEY (id)
);

CREATE TABLE Professor (
    Matricula INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Titulo VARCHAR(100) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    Endereco INT NOT NULL,
    Departamento INT NOT NULL,
    
    CONSTRAINT PK_Departamento PRIMARY KEY (Matricula),
    CONSTRAINT FK_Departamento_Endereco FOREIGN KEY (Endereco) REFERENCES Endereco(Id),
    CONSTRAINT FK_Departamento_Departamento FOREIGN KEY (Departamento) REFERENCES Departamento(Id)
);

CREATE TABLE Estudante (
    Matricula INT NOT NULL AUTO_INCREMENT,
    PrimeiroNome VARCHAR(255) NOT NULL,
    SegundoNome VARCHAR(255) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    DataNascimento DATE,
    Endereco INT NOT NULL,

    CONSTRAINT PK_Estudante PRIMARY KEY (Matricula),
    CONSTRAINT FK_Estudante_Endereco FOREIGN KEY (Id) REFERENCES Endereco(Id)
);

CREATE TABLE Disciplina (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    Numero CHAR(10) NOT NULL,
    CargaHorariaSemanal CHAR(4) NOT NULL,
    Departamento INT NOT NULL,
    Professor INT NOT NULL,
  
    CONSTRAINT PK_Disciplina PRIMARY KEY (Id),
    CONSTRAINT FK_Disciplina_Departamento FOREIGN KEY (Departamento) REFERENCES Departamento(id),
    CONSTRAINT FK_Disciplina_Professor FOREIGN KEY (Professor) REFERENCES Professor(Matricula)
);

CREATE TABLE AlunoDisciplina (
    Id INT NOT NULL AUTO_INCREMENT,
    Aprovado CHAR(8) NOT NULL,
    Reproado CHAR(8) NOT NULL,
    Matriculado CHAR(3) NOT NULL,
    Nota CHAR(3) NOT NULL,
    Frequencia CHAR(3) NOT NULL,
    Disciplina INT NOT NULL,
    Estudante INT NOT NULL,

    CONSTRAINT PK_AlunoDisciplina PRIMARY KEY (Id),
    CONSTRAINT FK_AlunoDisciplina_Disciplina FOREIGN KEY (Disciplina) REFERENCES Disciplina(Id),
    CONSTRAINT FK_AlunoDisciplina_Estudante FOREIGN KEY (Estudante) REFERENCES Estudante(Matricula),
);