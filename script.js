import { Telefone, Cliente, Endereco, Empresa } from "ri4-modulo";

let end1 = new Endereco('SP', 'São Paulo', 'Rua A', 01);
let end2 = new Endereco('SP', 'São José dos Campos, 'Rua B', 02);
let end3 = new Endereco('MG', 'Santa Luzia', 'Rua C', 03);
let end4 = new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', 04);
let end5 = new Endereco('RJ', 'Rio de Janeiro', 'Rua D', 05);
let end6 = new Endereco('RJ', 'Santo Antônio de Pádua', 'Rua E', 06);

let tel1 = new Telefone(11, 999998888);
let tel2 = new Telefone(12, 988887777);
let tel3 = new Telefone(31, 977776666);
let tel4 = new Telefone(31, 966665555);

let cli1 = new Cliente('Paula Moreira', '123.456.789-10', end1);
let cli2 = new Cliente('João Silva', '213.546.879-10', end2);
let cli3 = new Cliente('Joana Castro', '132.465.798-10', end3);
let cli4 = new Cliente('Mauro Fagundes', '321.654.987-10', end4);
let cli5 = new Cliente('Caio Castro', '231.564.897-10', end5);

cli1.addTelefone(tel1);
cli1.addTelefone(tel2);

cli2.addTelefone(tel3);
cli2.addTelefone(tel4);

cli3.addTelefone(tel2);
cli3.addTelefone(tel4);

cli4.addTelefone(tel1);
cli4.addTelefone(tel3);

cli5.addTelefone(tel2);
cli5.addTelefone(tel4);


let emp1 = new Empresa('IFood Soluções em Tecnologia LTDA', 'IFood', '12.345.678/0001-90', end6);

emp1.addCliente(cli1);
emp1.addCliente(cli2);
emp1.addCliente(cli3);
emp1.addCliente(cli4);
emp1.addCliente(cli5);

emp1.addTelefone(tel3);
emp1.addTelefone(tel2);

console.log(emp1.detalhes())
