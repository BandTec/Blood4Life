insert into doador (id_doador, nome, email, senha, dt_nascimento, cpf, telefone, tipo_sanguineo, genero) values
(1, 'Pedro', 'pedrinho@gmail.com', 'senha123', '2020-09-10', '48611558863', '11912345678', 'O+','M'),
(2, 'João', 'joao@gmail.com', '123senha', '2020-10-01', '48688631155', '11912678345', '', 'M'),
(3, 'Bachega', 'bachega@gmail.com', 'basenha', '2020-09-24', '24688631155', '11912678343', 'AB+', 'M'),
(4, 'Ana', 'ana@gmail.com', '123senha', '2020-10-25', '48688631155', '11912678342', 'O-', 'F');

insert into hospital (id_hospital, nome, cnpj, cidade, rua, bairro, cep, complemento, uf, telefone) values
(1, 'Albert Einstein', '60765823000130', 'São Paulo', 'R. Albert Einstein', 'Jardim Leonor', '05652000', 'Palácio dos Bandeirantes','SP', '1121511233'),
(2, 'Santa Casa', '10003060765823', 'São Paulo', 'R. Jardim São Francisco', 'Alexandre Artrot', '02056500', '','SP', '1115112332');

insert into doadores_hospital (id_hospital, id_doador) values (1, 1), (1, 2), (1, 3), (2 , 1);
