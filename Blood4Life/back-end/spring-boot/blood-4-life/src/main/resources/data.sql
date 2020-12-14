insert into doador (id_doador, nome, email, senha, dt_nascimento, cpf, telefone, tipo_sanguineo, genero, cidade, rua, numero, bairro, cep, complemento, uf, latitude, longitude) values
(1, 'Pedro', 'pedrinho@gmail.com', 'senha123', '1999-09-10', '48611558863', '11912345678', 'O+','M', 'São Paulo', 'Rua Sarita Cyrillo', '45', 'Jardim Paulista', '01435060', '','SP', -23.580047060941173, -46.66755170297028),
(2, 'João', 'joao@gmail.com', 'senha123', '1996-10-01', '48688631155', '11912678345', '', 'M', 'São Paulo', 'Rua João Belém', '200', 'Vila Araguaia', '03735250', 'Próximo a Torre de celular','SP', -23.50938157221406, -46.521065304819544),
(3, 'Bachega', 'bachega@gmail.com', 'senha123', '2000-09-24', '24688631155', '11912678343', 'AB+', 'M', 'São Paulo', 'Rua Castelo Branco', '300', 'Parque Novo Santo Amaro', '05874260', '','SP', -23.4999557, -46.7574434),
(4, 'Ana', 'ana@gmail.com', 'senha123', '2001-10-25', '48688631155', '11912678342', 'O-', 'F', 'São Paulo', 'Praça Florestan Fernandes', '400', 'Vila Santo Estevão', '03333025', '','SP', -23.6099557, -46.8174434),
(5, 'Rany', 'rany@gmail.com', 'senha123', '1993-06-16', '48688631155', '11912479342', 'A-', 'M', 'São Paulo', 'R. Bela Cintra', '336', 'Consolação', '01415000', '','SP', -23.55235005603952, -46.655835331440436),
(6, 'Daniel', 'daniel@gmail.com', 'senha123', '2000-09-24', '48688631155', '11912838342', 'A+', 'M', 'São Paulo', 'Alameda Min. Rocha Azevedo', '366', 'Jardim Paulista', '01410000', '','SP', -23.561164073879358, -46.659563833511406);

insert into hospital (id_hospital, nome, email, senha, cnpj, cidade, rua, numero, bairro, cep, complemento, uf, latitude, longitude, telefone) values
(1, 'Albert Einstein', 'albert@einstein.com', 'senha123', '60765823000130', 'São Paulo', 'Av. Albert Einstein', '627', 'Jardim Leonor', '05652900', '','SP', -23.5999557, -46.7174434, '11915112334'),
(2, 'Santa Casa', 'santa@casa.com', 'senha123','62779145000190', 'São Paulo', 'Rua Dr. Cesário Mota Júnior', '112', 'Vila Buarque', '01221010', '','SP', -23.540561400611374, -46.645956661791864, '11951123325'),
(3, 'SacreCoeur NotreDame Intermédica', 'sacrecoeur@notredame.com', 'senha123','10003060765823', 'São Paulo', 'Rua Antônio Carlos', '122', 'Consolação', '01309010', '','SP', -23.55647372879475, -46.6562664609468, '1126326000'),
(4, 'Incor - Hospital das Clínicas FMUSP', 'incor@fmusp.com', 'senha123','50644053000113', 'São Paulo', 'Av. Dr. Enéas Carvalho de Aguiar', '44', 'Cerqueira César', '05403900', '','SP', -23.556080337586266, -46.66665197453997, '1126615000'),
(5, 'Centro Medico Santa Isabel', 'centro@santaisabel.com', 'senha123','60922168005226', 'São Paulo', 'Rua Dona Veridiana', '311', 'Higienópolis', '01238010', '','SP', -23.54194332460826, -46.65033791495701, '1121767700'),
(6, 'Hospital Samaritano', 'hospital@samaritano.com', 'senha123','60544244000167', 'São Paulo', 'Rua Conselheiro Brotero', '1486', 'Higienópolis', '01232010', '','SP', -23.537020408809006, -46.657286312984404, '1128275000'),
(7, '9 de Julho', 'hospital@novedejulho.com', 'senha123','60884855000316', 'São Paulo', 'Rua Peixoto Gomide', '545', 'Cerqueira César', '01409002', '','SP', -23.55827571419523, -46.65545910757314, '1131479999');

insert into doadores_hospital (id_hospital, id_doador) values (1, 1), (1, 2), (1, 3), (2 , 1);

insert into banco_de_sangue (tipo_sangue, qtd_atual, hospital_id) values
('A+', 12.3, 1),
('A-', 8.7, 1),
('B+', 9.3, 1),
('B-', 7.6, 1),
('AB+', 13.8, 1),
('AB-', 12.7, 1),
('O+', 4.3, 1),
('O-', 1.3, 1),

('A+', 8.7, 2),
('A-', 9.3, 2),
('B+', 12.7, 2),
('B-', 1.3, 2),
('AB+', 4.3, 2),
('AB-', 7.6, 2),
('O+', 13.8, 2),
('O-', 12.3, 2),

('A+', 12.3, 3),
('A-', 8.7, 3),
('B+', 9.3, 3),
('B-', 1.6, 3),
('AB+', 3.8, 3),
('AB-', 2.7, 3),
('O+', 4.3, 3),
('O-', 11.3, 3),

('A+', 8.3, 4),
('A-', 9.7, 4),
('B+', 4.3, 4),
('B-', 11.6, 4),
('AB+', 12.0, 4),
('AB-', 7.7, 4),
('O+', 6.6, 4),
('O-', 11.3, 4),

('A+', 10.0, 5),
('A-', 8.0, 5),
('B+', 9.0, 5),
('B-', 7.0, 5),
('AB+', 13.0, 5),
('AB-', 12.0, 5),
('O+', 8.5, 5),
('O-', 8.0, 5),

('A+', 22.3, 6),
('A-', 18.7, 6),
('B+', 11.3, 6),
('B-', 7.8, 6),
('AB+', 13.8, 6),
('AB-', 12.7, 6),
('O+', 4.3, 6),
('O-', 1.3, 6),

('A+', 0.0, 7),
('A-', 10.2, 7),
('B+', 16.3, 7),
('B-', 2.1, 7),
('AB+', 15.2, 7),
('AB-', 13.2, 7),
('O+', 7.1, 7),
('O-', 3.2, 7);