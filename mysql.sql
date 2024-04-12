create database ftrxs;
use ftrxs;

create table tb_admin (
      id_adm          int primary key auto_increment,
    nome_adm        varchar(50) not null,
    email_adm      varchar(25) not null,
    senha_adm        varChar(10) not null
);

insert into tb_admin (nome_adm, email_adm, senha_adm) 
values ('Admin', 'admin@gmail.com', 'senha@123');

select * from tb_admin;

create table tb_roupa (
    id_roupa    int primary key auto_increment,
    nome_roupa  varChar(30) not null,
    desc_roupa  varChar(400)not null,
    preco_roupa double not null,
    tipo_roupa  varChar(35) not null,
    cor_roupa   varChar(25) not null,
    tam_roupa   varChar(100) not null,
    material_roupa  varChar(30),
    img_roupa   varChar(200)
);

insert into tb_roupa (nome_roupa, desc_roupa, preco_roupa, tipo_roupa, cor_roupa, tam_roupa, material_roupa, img_roupa) 
values ('T-shirt', 'Uma camiseta muito maneira', '100.00', 'Camiseta', 'Vermelha', 'M', 'Algodão', null);

select * from tb_roupa;