insert into doador (id_doador, nome, email, senha, dt_nascimento, cpf, telefone, tipo_sanguineo, genero, cidade, rua, numero, bairro, cep, complemento, uf) values
(1, 'Pedro', 'pedrinho@gmail.com', 'senha123', '2020-09-10', '48611558863', '11912345678', 'O+','M', 'Embu das Artes', 'Rua Elis Regina', '100', 'Jardim Indaiá', '06846560', '','SP'),
(2, 'João', 'joao@gmail.com', '123senha', '2020-10-01', '48688631155', '11912678345', '', 'M', 'São Paulo', 'Rua João Belém', '200', 'Vila Araguaia', '03735250', 'Próximo a Torre de celular','SP'),
(3, 'Bachega', 'bachega@gmail.com', 'basenha', '2020-09-24', '24688631155', '11912678343', 'AB+', 'M', 'São Paulo', 'Rua Castelo Branco', '300', 'Parque Novo Santo Amaro', '05874260', '','SP'),
(4, 'Ana', 'ana@gmail.com', '123senha', '2020-10-25', '48688631155', '11912678342', 'O-', 'F', 'São Paulo', 'Praça Florestan Fernandes', '400', 'Vila Santo Estevão', '03333025', '','SP');

insert into hospital (id_hospital, nome, email, senha, cnpj, cidade, rua, numero, bairro, cep, complemento, uf, latitude, longitude, telefone) values
(1, 'Albert Einstein', 'albert@einstein.com', 'senha123', '60765823000130', 'São Paulo', 'Av. Albert Einstein', '627', 'Jardim Leonor', '05652900', '','SP', -23.5999557, -46.7174434, '11915112334'),
(2, 'Santa Casa', 'santa@casa.com', 'senha123','10003060765823', 'São Paulo', 'R. Dr. Cesário Mota Júnior', '112', 'Vila Buarque', '01221010', '','SP', -23.5427283, -46.6520222, '11951123325');

insert into doadores_hospital (id_hospital, id_doador) values (1, 1), (1, 2), (1, 3), (2 , 1);

insert into banco_de_sangue (tipo_sangue, qtd_atual, hospital_id) values
('A+', 12.3,1),
('A-', 8.7,1),
('B+', 9.3,1),
('B-', 7.6,1),
('AB+', 13.8,1),
('AB-', 12.7,1),
('O+', 4.3,1),
('A+', 50.5,2),
('O-', 1.3,1);