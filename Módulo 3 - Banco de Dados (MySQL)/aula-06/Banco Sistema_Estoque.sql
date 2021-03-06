CREATE DATABASE sistema_estoque
DEFAULT CHARACTER SET utf8 
DEFAULT COLLATE utf8_general_ci;

USE sistema_estoque;

CREATE TABLE Categoria (
  Id INT NOT NULL,  
  Nome VARCHAR(255) NOT NULL,
  Ativa CHAR(14) NOT NULL,

  CONSTRAINT PK_Categoria PRIMARY KEY (Id)
);

CREATE TABLE Produtos (
  Id INT NOT NULL,
  Id_categoria INT,
  Descricao VARCHAR(255) NOT NULL,
  Preco DECIMAL(6,2) NOT NULL,
  URL_imagem VARCHAR(255),
  

  CONSTRAINT PK_Produtos PRIMARY KEY (Id),
  CONSTRAINT FK_Produtos_Categoria FOREIGN KEY (Id_categoria) REFERENCES Categoria(Id)
);

INSERT INTO Categoria (Id, Nome, Ativa) VALUES (1, "Informatica", "[v]");
INSERT INTO Categoria (Id, Nome, Ativa) VALUES (2, "Telefonia", "[v]");
INSERT INTO Categoria (Id, Nome, Ativa) VALUES (3, "Games", "[v]");
INSERT INTO Categoria (Id, Nome, Ativa) VALUES (4, "Tv, Audio e Video", "[v]");
INSERT INTO Categoria (Id, Nome, Ativa) VALUES (5, "Impressao e Imagem", "[v]");

INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (1, 1, "SSD 128GB", 300, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (2, 1, "SSD 256GB", 500, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (3, 1, "KIT TECLADO E MOUSE", 600, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (4, 3, "PLAYSTATION 3", 1500, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (5, 2, "SAMSUNG A51", 2500, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (6, 4, "TELEVISAO LG 55", 3000, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (7, 3, "PLAYSTATION 3 1TB", 1500, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (8, 2, "SAMSUNG S9", 2500, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (9, 2, "IPHONE 8", 2500, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (10, 2, "IPHONE 9", 3000, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (11, 2, "IPHONE X", 4000, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (12, 4, "TELEVISAO SAMSUNG 3200", 1000, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (13, 4, "TELEVISAO SAMSUNG 4800", 3000, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (14, 3, "PLAYSTATION 4 1TB", 2800, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (15, 3, "PLAYSTATION 5 1TB", 5000, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (16, 1, "Teclado Gamer Razer", 250, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (17, 1, "Fone de Ouvido HyperX", 170, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (18, 1, "Mouse Gamer Razer", 90, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (19, 1, "Mouse Gamer Razer 2400", 200, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (20, null, "Mouse Gamer", 280, NULL);
INSERT INTO Produtos (Id, Id_categoria, Descricao, Preco, URL_imagem) VALUES (21, null, "Teclado Gamer", 390, NULL);