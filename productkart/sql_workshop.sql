create table product(
	id  int,
	name varchar(30),
	price int,
	rating double precision
);

select * from product;

insert into product(id,name,price,rating) values(1,'pixel',60000,4.1);
insert into product(id,name,price,rating) values(2,'samsung',25000,3.9);
insert into product(id,name,price,rating) values(3,'mi',12000,3.5);
insert into product(id,name,price,rating) values(4,'moto',24000,4.0);
insert into product(id,name,price,rating) values(5,'vivo',19000,3.0);
insert into product(id,name,price,rating) values(6,'poco',12000,3.4);

create table product_backup(
	id int,
	name varchar(100),
	price int ,
	rating double precision,
	DELETED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create trigger product_delete 
after delete on product 
for each row 
execute function backup_deleted_product();


CREATE OR REPLACE FUNCTION backup_deleted_product()
returns trigger as $$
begin 
insert into product_backup (id,name,price,rating,deleted_at)
values(OLD.id, old.name, old.price,old.rating,CURRENT_TIMESTAMP);
RETURN OLD;
END;$$ LANGUAGE plpgsql;


delete from product where name='poco';

select * from product_backup;
select * from product;

update product set price= 55000 where name='pixel';





