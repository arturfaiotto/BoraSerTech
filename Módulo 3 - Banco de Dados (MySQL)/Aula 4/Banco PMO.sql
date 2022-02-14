CREATE DATABASE PMO
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE PMO;

CREATE TABLE Empregados (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    CPF CHAR(15) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Salario CHAR(7) NOT NULL,
    Sexo CHAR(10) NOT NULL,
    DataNascimento DATE,
    Supervisor INT NOT NULL,

    CONSTRAINT PK_Empregados PRIMARY KEY (Id)
    CONSTRAINT FK_Empregados_Empregados FOREIGN KEY (Supervisor) REFERENCES Empregados(Id)
);

CREATE TABLE Dependentes (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Parentesco VARCHAR(255) NOT NULL,
    Sexo CHAR(10) NOT NULL,
    DataNascimento DATE,
    Empregado INT NOT NULL,

    CONSTRAINT PK_Empregados PRIMARY KEY (Id),
    CONSTRAINT FK_Dependentes_Empregados FOREIGN KEY (Empregado) REFERENCES Empregados(Id),
);

CREATE TABLE Departamentos (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Numero CHAR(5) NOT NULL,

    CONSTRAINT PK_Departamentos PRIMARY KEY (Id)    
);

CREATE TABLE Localidades (
    Id INT NOT NULL AUTO_INCREMENT,
    Endereco VARCHAR(255) NOT NULL,
    
    CONSTRAINT PK_Localidades PRIMARY KEY (Id)    
);

CREATE TABLE DepartamentosLocalidades (
    Id INT NOT NULL AUTO_INCREMENT,
    Endereco VARCHAR(255) NOT NULL,
    Departamento INT NOT NULL,
    Localidade INT NOT NULL,
    
    CONSTRAINT PK_DepartamentosLocalidades PRIMARY KEY (Id),
    CONSTRAINT FK_DepartamentosLocalidades_Departamento FOREIGN KEY (Departamento) REFERENCES Departamentos(Id),
    CONSTRAINT FK_DepartamentosLocalidades_Localidades FOREIGN KEY (Localidade) REFERENCES Localidades(Id)   
);

CREATE TABLE DepartamentoEmpregados (
    Id INT NOT NULL AUTO_INCREMENT,
    DataInicioGerencia DATE NOT NULL,
    DataFimGerencia DATE NOT NULL,
    EhGerente BOOLEAN,
    Empregado INT NOT NULL,
    Departamento INT NOT NULL,

    CONSTRAINT PK_DepartamentoEmpregados PRIMARY KEY (Id),
    CONSTRAINT FK_DepartamentoEmpregados_Empregados FOREIGN KEY (Empregado) REFERENCES Empregados(Id),
    CONSTRAINT FK_DepartamentoEmpregados_Departamentos FOREIGN KEY (Departamento) REFERENCES Departamentos(Id)
);

CREATE TABLE Projetos (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    Departameto INT NOT NULL,
    Localidade INT NOT NULL,

    CONSTRAINT PK_Projetos PRIMARY KEY (Id),
    CONSTRAINT FK_Projetos_Departamentos FOREIGN KEY (Departamento) REFERENCES Departamentos(Id),
    CONSTRAINT FK_Projetos_Localidade FOREIGN KEY (Localidade) REFERENCES Localidades(Id)
);

CREATE TABLE ProjetosEmpregados (
    Id INT NOT NULL AUTO_INCREMENT,
    HorasTrabalhadasSemanal VARCHAR(255) NOT NULL,
    Projeto INT NOT NULL,
    Empregado INT NOT NULL,
    Supervisor INT NOT NULL,

    CONSTRAINT PK_Projetos PRIMARY KEY (Id),
    CONSTRAINT FK_ProjetosEmpregados_Projeto FOREIGN KEY (Projeto) REFERENCES Projeto(Id),
    CONSTRAINT FK_ProjetosEmpregados_Empregados FOREIGN KEY (Empregado) REFERENCES Empregados(Id),
    CONSTRAINT FK_ProjetosEmpregados_Empregados FOREIGN KEY (Supervisor) REFERENCES Empregados(Id)
);