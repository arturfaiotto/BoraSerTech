SELECT * FROM clientes;

USE erp_do_professor;

select valor from pedidosmanutencoes;
select sum(valor) from pedidosmanutencoes;
select AVG(valor) from pedidosmanutencoes;
select MAX(valor), MIN(valor) from pedidosmanutencoes;

select sum(valor) from pedidoscompras;
select AVG(valor) from pedidoscompras;
select MAX(valor), MIN(valor) from pedidoscompras;

SELECT COUNT(*) FROM Clientes WHERE Telefone LIKE "(96)%";
SELECT COUNT(*) FROM Clientes WHERE Telefone LIKE "%3";

SELECT * FROM Tecnicos;
SELECT * FROM Funcionarios WHERE Id IN (SELECT Funcionario FROM Tecnicos WHERE CNH IS NULL);
SELECT * FROM Funcionarios WHERE Id IN (SELECT Funcionario FROM Tecnicos WHERE CNH IS NOT NULL);

SELECT Count(*) FROM SuporteOnline WHERE Month(data) = 3;

SELECT * FROM Clientes WHERE Id IN (SELECT Cliente FROM pedidosmanutencoes);
SELECT * FROM Clientes WHERE Id NOT IN (SELECT Cliente FROM pedidosmanutencoes);

SELECT * FROM Clientes WHERE Id IN (SELECT Cliente FROM pedidoscompras);
SELECT * FROM Clientes WHERE Id NOT IN (SELECT Cliente FROM pedidoscompras);

SELECT * FROM Funcionarios WHERE Id IN (SELECT Funcionario FROM AtendentesOnline WHERE Id IN (SELECT AtendenteOnline FROM SuporteOnline WHERE month(data) = 11));