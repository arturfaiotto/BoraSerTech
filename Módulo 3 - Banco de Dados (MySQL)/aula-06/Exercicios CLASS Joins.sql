-- Exercicio 1)  Crie uma query que traga só os produtos que tem categorias.
SELECT * FROM Produtos p LEFT JOIN categoria c ON p.id_categoria = c.id WHERE p.id_categoria IS NOT NULL;


-- Exercício 2) Crie uma query que traga todos os produtos, mesmo que não tenha categoria.
SELECT * FROM Produtos p LEFT JOIN categoria c ON p.id_categoria = c.id;


-- Exercício 3) Crie uma query que traga todos os produtos que tem categorias, e também traga categorias que não tem produtos.
SELECT * FROM Produtos p RIGHT JOIN categoria c ON p.id_categoria = c.id;


-- Exercício 4) Crie uma query que trás os produtos e categorias mesmo que não estejam interligados.
SELECT * FROM produtos p LEFT JOIN categoria c ON p.id_categoria = c.id

UNION

SELECT * FROM Produtos p RIGHT JOIN categoria c ON p.id_categoria = c.id;


-- Exercício 5) Crie uma query que traga todos os produtos da categoria Informática.
SELECT * FROM categoria c LEFT JOIN produtos p ON p.id_categoria = c.id WHERE c.nome LIKE "Informatica" OR c.id = 1;


-- Exercício 6) Crie uma query que traga todos os produtos da categoria Telefonia ordenado por descrição do produto.
SELECT * FROM categoria c LEFT JOIN produtos p ON p.id_categoria = c.id WHERE c.nome LIKE "Telefonia" OR c.id = 2 ORDER BY p.descricao ASC;


-- Exercício 7) Crie uma query que traga todos os produtos da categoria Games.
SELECT * FROM categoria c LEFT JOIN produtos p ON p.id_categoria = c.id WHERE c.nome LIKE "Games" OR c.id = 3;


-- Exercício 8) Crie uma query que traga todos os produtos da categoria Tv, Áudio e Vídeo.
SELECT * FROM categoria c LEFT JOIN produtos p ON p.id_categoria = c.id WHERE c.nome LIKE "Tv, Audio e Video" OR c.id = 4;


-- Exercício 9) Crie uma query que traga todos os produtos de todas as categorias ordenado pelo id da categoria.
SELECT * FROM categoria c JOIN produtos p ON p.id_categoria = c.id ORDER BY c.id ASC;


-- Exercício 10) Crie uma query que traga todos os produtos que tenham categoria ordenados por descrição.
SELECT * FROM produtos p JOIN categoria c ON c.id = p.id_categoria ORDER BY p.descricao ASC;


-- Exercício 11) Crie uma query que traga todos os produtos da categoria de informática que tenha preço menor que 400 ordenado por menor preço.
SELECT * FROM categoria c LEFT JOIN produtos p ON p.id_categoria = c.id WHERE (c.nome LIKE "Informatica" OR c.id = 1) and p.preco < 400 ORDER BY p.preco ASC;


-- Exercício 12) Crie uma query que traga todos os produtos da categoria de games que tenham preço entre 1600 e 3000 ordenado por maior preço.
SELECT * FROM categoria c LEFT JOIN produtos p ON p.id_categoria = c.id WHERE (c.nome LIKE "Games" OR c.id = 3) and p.preco BETWEEN 1600 and 3000;


-- Exercício 13) Crie uma query que traga a quantidade de produtos por categoria, exibindo o nome da categoria.
SELECT c.id, c.nome, COUNT(p.id_categoria) AS 'Qtd de Produtos' FROM categoria c JOIN produtos p ON p.id_categoria = c.id GROUP BY c.id ORDER BY COUNT(p.id_categoria) ASC;

	
-- Exercício 14) Crie uma query que traga a soma dos preços de produtos por categoria, exibindo o nome da categoria e ordene por preço.
SELECT c.id, c.nome, SUM(p.preco) AS 'Soma Preços' FROM categoria c JOIN produtos p ON p.id_categoria = c.id GROUP BY c.id, c.nome ORDER BY SUM(p.preco);


-- Exercício 15) Crie uma query que traga a média dos preços de produtos por categoria, exibindo o nome da categoria e ordene pelo maior preço.
SELECT c.id, c.nome, AVG(p.preco) AS 'Media dos Preços' FROM categoria c JOIN produtos p ON p.id_categoria = c.id GROUP BY c.id, c.nome ORDER BY AVG(p.preco) DESC;


-- Exercício 16) Crie uma query que traga o menor valor de produto por categoria, exibindo o nome da categoria, ordenado pela categoria.
SELECT c.id, c.nome, MIN(p.preco) AS 'Menor Preço' FROM categoria c JOIN produtos p ON p.id_categoria = c.id GROUP BY c.id, c.nome ORDER BY c.nome ASC;


-- Exercício 17) Crie uma query que traga o maior valor de produto por categoria, exibindo o nome da categoria, ordenado pela categoria.
SELECT c.id, c.nome, MAX(p.preco) AS 'Maior Preço' FROM categoria c JOIN produtos p ON p.id_categoria = c.id GROUP BY c.id, c.nome ORDER BY c.nome ASC;
