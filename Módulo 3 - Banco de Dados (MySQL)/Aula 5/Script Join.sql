USE erp_do_professor;

-- Listagem de técnicos que não possuem CHN (select dentro de select)
SELECT * 
FROM Funcionarios 
WHERE Id IN (
	SELECT Funcionario 
    FROM Tecnicos 
    WHERE CNH IS NULL
);

-- Listagem de técnicos que não possuem CHN (Inner Join)
SELECT f.id, f.nome, f.CPF, f.CTPS 
FROM funcionarios f 
	JOIN Tecnicos t ON t.funcionario = f.id 
WHERE t.cnh IS NULL;

-- Listar atendentes que já realizaram atendimento online a um cliente em novembro (SELECT com SELECT).
SELECT *
FROM Funcionarios 
WHERE Id IN (
	SELECT Funcionario 
    FROM AtendentesOnline 
    WHERE Id IN (
		SELECT AtendenteOnline 
        FROM SuporteOnline 
        WHERE month(data) = 11
    )
);

-- Listar atendentes que já realizaram atendimento online a um cliente em novembro (Inner Join)
SELECT DISTINCT ao.id, f.nome, f.cpf 
FROM Funcionarios f
	JOIN atendentesonline ao ON ao.Funcionario = f.id
    JOIN suporteonline so ON so.AtendenteOnline = ao.id
WHERE month(so.data) = 11; 



-- Left Join
SELECT c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor
FROM clientes c	
	LEFT JOIN pedidosmanutencoes pm ON pm.Cliente = c.id;
    
    
    
-- Right Join
SELECT c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor
FROM pedidosmanutencoes pm
	RIGHT JOIN clientes c ON pm.Cliente = c.id;
    
    
    
-- Full Outer Join / Union
SELECT c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor
FROM clientes c	
	LEFT JOIN pedidosmanutencoes pm ON pm.Cliente = c.id
    
UNION

SELECT c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor
FROM pedidosmanutencoes pm
	RIGHT JOIN clientes c ON pm.Cliente = c.id;
    
    
    
-- Group By
SELECT ao.id, f.nome, f.cpf, COUNT(ao.id) as 'Qtd de chamados atendidos' 
FROM funcionarios f
	JOIN atendentesonline ao ON Ao.funcionario = f.id
    JOIN suporteonline so ON so.AtendenteOnline = ao.id
GROUP BY ao.id, f.nome, f.cpf
ORDER BY count(ao.id) DESC;

-- Having
SELECT ao.id, f.nome, f.cpf, COUNT(ao.id) as 'Qtd de chamados atendidos' 
FROM funcionarios f
	JOIN atendentesonline ao ON Ao.funcionario = f.id
    JOIN suporteonline so ON so.AtendenteOnline = ao.id
GROUP BY ao.id, f.nome, f.cpf
HAVING COUNT(ao.id) > 3
ORDER BY COUNT(ao.id) DESC;


SELECT f.Id, f.nome, SUM(quantidade), COUNT(f.id)
FROM requisitcoes r
	JOIN fornecedores f ON r.Fornecedor = f.id
    GROUP BY f.id
    ORDER BY COUNT(f.id) desc
LIMIT 1;
