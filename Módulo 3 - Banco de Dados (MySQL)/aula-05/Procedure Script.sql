DELIMITER //

CREATE PROCEDURE ListarNomesClientes(
	id INT,
    nome VARCHAR(250)
)
BEGIN
	SELECT c.id, c.nome 
    FROM clientes c
    WHERE (id IS NULL OR c.id = id) 
    AND ( nome IS NULL OR c.nome LIKE CONCAT("%", nome, "%"));
END // 

DELIMITER ;

CALL ListarNomesClientes(4, null)


DELIMITER //

CREATE PROCEDURE ListarClientesQtdPedidos(
	Id INT,
    Nome VARCHAR(200)
)
BEGIN
	SELECT c.id, c.nome, COUNT(pc.cliente) as 'Quantidade de Pedidos'
    FROM clientes c JOIN pedidoscompras pc 
    ON id IS NULL OR c.id = pc.Cliente
    WHERE (id IS NULL OR c.id = id) 
    AND (nome IS NULL OR c.nome LIKE CONCAT("%", nome, "%"))
    GROUP BY pc.Cliente;
END // 

DELIMITER ;

CALL ListarClientesQtdPedidos(null, "Maciel");

SELECT * FROM pedidoscompras;
