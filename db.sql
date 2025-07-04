drop table if exists employee;
CREATE TABLE if not exists employee (
                                        id bigserial primary key ,
                                        name text,
                                        age int,
                                        address text,
                                        created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active bool default true
                             );

alter table employee add column company_id bigint;

drop table if exists company;
CREATE TABLE if not exists company (
                                       id bigserial primary key ,
                                       name text,
                                       address text,
                                       created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active bool default true
                             );

insert into company(name) values ('pdf'), ('f8'), ('f88');


insert into employee(name, age, address)
values ('test 4', 21, 'HCM'),
       ('test 5', 20, 'Ha noi');

alter table employee add column active bool default true;
alter table employee drop column active;
alter table employee rename column name to fullname;
alter table employee add column fullname text;
alter table employee drop column fullname;

alter table employee add constraint employee_pkey primary key (id);
alter table employee drop constraint employee_pkey;

update employee set address = 'thanh oai, ha noi' where id = 2;
update employee set address = 'tp.hcm' where id < 2;

delete from employee where id = 3;
update employee set fullname = concat(name, id) where true;

select
    employee.id,
    employee.name  as name,
    employee.age, address,
    company.name as company_name
--     jsonb_build_object(
--         'id', company.id, 'name', company.name
--     ) as company
from employee
         right outer join company on company.id = employee.company_id;

select
    employee.id,
    employee.name  as name,
    employee.age, address,
    company.name as company_name
from company
         left join employee on company.id = employee.company_id;

alter table employee add column province_id bigint;
alter table employee drop address;


drop table if exists province;
CREATE TABLE if not exists province (
                                        id bigserial primary key ,
                                        name text,
                                        active bool default true
);

insert into province(name) values ('Ha Noi'), ('Ho Chi Minh');

update employee set province_id = 1 where true;
update employee set province_id = 2 where id = 1 or  id = 2;
update employee set province_id = 2 where id in (1, 2);
update employee set province_id = 1 where id in (1, 2) and age = 21;






select
    employee.id,
    employee.name  as name,
    employee.age,
    jsonb_build_object(
            'id', company.id, 'name', company.name
    ) as company,
    jsonb_build_object(
            'id', province.id, 'name', province.name
    ) as province
from employee
         left join company on company.id = employee.company_id
         left join province on province.id = employee.province_id;


alter table company add column province_id bigint;
update company set province_id = 1 where true;



select
    employee.id,
    employee.name  as name,
    employee.age,
    company.name as company_name,
    province.name as company_address
from employee
         left join company on company.id = employee.company_id
         left join province on company.province_id = province.id;

explain
select
    employee.id,
    employee.name  as name,
    employee.age,
    company.name as company_name,
    province.name as company_address
from employee
         join company on company.id = employee.company_id
         left join province on company.province_id = province.id;


select
    employee.id,
    employee.name  as name,
    employee.age,
    jsonb_build_object(
            'id', company.id, 'name', company.name
    ) as company
from employee
         left join company on company.id = employee.company_id;


alter table employee add column salary int;

-- get total salary
select company_id, sum(salary) as total_salary
from employee
group by company_id
order by total_salary, company_id desc ;

select company_id, sum(salary) as total_salary
from employee
where employee.salary != 5000
group by company_id
order by total_salary, company_id desc ;
select company_id, sum(salary) as total_salary
from employee
group by company_id
having sum(salary) != 1000
order by total_salary, company_id desc;


-- get employees of company
-- company.id, company.name, employee_ids
select company.id, company.name, json_agg(employee.name) as employee_names
from company
         join employee on employee.company_id = company.id
group by company.id, company.name;
-- company.id, company.name, employee_names
-- company.id, company.name, employees[{id, name}]

select
    c.id,
    c.name,
    json_agg(
            jsonb_build_object(
                    'id', e.id,
                    'name', e.name,
                    'province',
                    case
                        when p.id is not null
                            then jsonb_build_object('id', p.id, 'name', p.name)
                        else null
                        end
            )
    ) as employees
from company c
         left join employee e on e.company_id = c.id
         left join province p on c.province_id = p.id
where e.active and c.active
group by c.id, c.name;


select employee.id,
       case when employee.id > 2 then true else false end as gt_2,
       employee.id > 2 gt_2_2
from employee;



-- subquery
explain
select *
from employee
         join company on company.id = employee.company_id
where company.active and employee.active and company.name = 'fpt'

    explain
select *
from employee
         join company on company.id = employee.company_id and company.name = 'fpt'
where company.active and employee.active;

explain
select * from employee where employee.company_id in (select id from company where name = 'fpt');

explain analyse
with company_ids as (select id, name
                     from company
                     where active and name = 'fpt')
select * from employee where employee.company_id in (select id from company_ids);





delete from company where true;

insert into company(name) values ('f8');

select setval('company_id_seq', 1, false);

truncate table company restart identity ;

drop table company;
drop table employee;
drop table province;

drop table if exists employee cascade ;
create table if not exists employee (
                                        id bigserial primary key ,
                                        name text,
                                        code text,
                                        position text,
                                        age int,
                                        created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE
                             );

drop table if exists "order" cascade ;
create table if not exists "order" (
                                       id bigserial primary key ,
                                       employee_id bigint ,
                                       total_amount int,
                                       created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE,
                             constraint fk_employee foreign key(employee_id) references employee(id) on delete set null
    );

insert into employee(name, code, age, position)
values ('Dung', 'ddt', 20, 'director'),
       ('son', 'sonnh', 30, 'ceo'),
       ('giang', 'giangvd', 30, 'cto');

insert into "order" (employee_id, total_amount)
values (1, 1000000),
       (1, 2000000),
       (1, 2000000);

select "order".id, employee.name
from "order"
         left join employee on "order".employee_id = employee.id;

-- select * from pg_stat_activity;
-- SHOW max_connections;
start transaction ;

update employee set name = 'tdung' where id = 1;

select * from employee;
insert into employee (name, code) values ('Trung ruoi', 'trungdt');

update "order" set employee_id = 2 where id = 2;

-- delete from employee where id = 2;

-- update "order" set employee_id = 2 where id = 1;
select * from "order";
-- delete from "order" where employee_id = 2;

commit;
rollback ;



create database bigdb;

drop index idx_arrival_arrival_date;
drop index idx_arrival_detail_arrival_id;

create index idx_arrival_detail_arrival_id on arrival_detail(arrival_id);

select count(id) from arrival_detail;

explain
select * from arrival_detail where arrival_id  < 50;

select pg_relation_size('arrival') / 1024 / 1024;
delete from arrival where true;
update arrival set active = false where true;

vacuum analyse  arrival;

explain
select * from arrival;




DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
SELECT lo_unlink(l.oid)
FROM pg_largeobject_metadata l;


DROP TABLE IF EXISTS "user";
CREATE TABLE IF NOT EXISTS "user" (
                                      id bigserial PRIMARY KEY,
                                      full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    gender VARCHAR(10),
    date_of_birth DATE,
    country_code VARCHAR(2),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE
                             );

DROP TABLE IF EXISTS "category";
CREATE TABLE IF NOT EXISTS "category" (
                                          id SERIAL PRIMARY KEY,
                                          name VARCHAR(100) UNIQUE,
    parent_id bigint,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE
                             );

DROP TABLE IF EXISTS product;
CREATE TABLE IF NOT EXISTS product (
                                       id SERIAL PRIMARY KEY,
                                       name VARCHAR(255),
    price DECIMAL(10,2),
    category_id bigint,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE
                             );

DROP TABLE IF EXISTS "order";
CREATE TABLE IF NOT EXISTS "order" (
                                       id SERIAL PRIMARY KEY,
                                       user_id bigint,
                                       status VARCHAR(20), -- e.g.  'pending', 'completed', 'cancelled'
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE
                             );

DROP TABLE IF EXISTS order_item;
CREATE TABLE IF NOT EXISTS order_item (
                                          id bigserial primary key,
                                          order_id bigint,
                                          product_id bigint,
                                          quantity bigint,
                                          price_at_purchase DECIMAL(10,2),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
                             deleted_by bigint,
                             active boolean DEFAULT TRUE
                             );



INSERT INTO "user" (full_name, email, gender, date_of_birth, country_code)
SELECT
    'User ' || s,
    'user' || s || '@example.com',
    CASE WHEN random() < 0.5 THEN 'male' ELSE 'female' END,
    '1990-01-01'::date + (random() * 365 * 20)::int,
        (ARRAY['VN', 'US', 'SG', 'JP', 'KR'])[floor(random() * 5 + 1)]
FROM generate_series(1, 10000) s;

-- 2.2 Tạo 10 danh mục sản phẩm
INSERT INTO category (name)
SELECT 'Category ' || s FROM generate_series(1, 10) s;

-- 2.3 Tạo 1,000 sản phẩm
INSERT INTO product (name, price, category_id)
SELECT
    'Product ' || s,
    (random() * 1000)::DECIMAL(10, 2),
        floor(random() * 10 + 1)
FROM generate_series(1, 1000) s;

-- 2.4 Tạo 20,000 đơn hàng
INSERT INTO "order" (user_id, status, created_at)
SELECT
    floor(random() * 10000 + 1),
    (ARRAY['completed', 'pending', 'cancelled'])[floor(random() * 3 + 1)],
    '2022-01-01'::timestamp + (random() * 730 * 86400) * interval '1 second'
FROM generate_series(1, 20000) s;

-- 2.5 Tạo 50,000 chi tiết đơn hàng
INSERT INTO order_item (order_id, product_id, quantity, price_at_purchase)
SELECT
    floor(random() * 20000 + 1),
    floor(random() * 1000 + 1),
    floor(random() * 5 + 1),
    (random() * 1000)::DECIMAL(10, 2)
FROM generate_series(1, 50000) s;

-- no index: 259
-- unique: 8.3
-- composite: 4.3
explain analyse
select "user".country_code, "user".email, "user".full_name from "user" where "user".email = 'user9991@example.com';

create index idx_user_country_code_email on "user"(email, country_code);
drop index idx_user_country_code_email;

create unique index user_email_key on "user"(email) where active = true;
drop  index user_email_key;
alter table "user" drop constraint user_email_key;
-- alter table "user" add constraint user_email_key;

select * from "user" where id = 1;
-- user1@example.com
update "user" set active = false, deleted_at = now(), deleted_by = 2 where id = 1;
insert into "user" (full_name, email, gender, date_of_birth, country_code)
values ('user 1 test', 'user1@example.com', 'male', '2023-01-02', 'VN');

create index idx_user_id_status on "order"(user_id, status);
create index idx_order_item_order_id on order_item(order_id);
drop index idx_order_item_order_id;

explain analyse
select *
from "order_item"
         join "order" on order_item.order_id = "order".id
         join "user" on "order".user_id = "user".id
where "order_item".active and "order".active and "user".active and ("user_id" between 50 and 100) and "order".status = 'pending';

explain
with order_ids as (select "order".id
                   from "order"
                            join "user" on "order".user_id = "user".id
                   where "order".active
                     and "user".active
                     and ("user_id" between 80 and 100)
                     and "order".status = 'pending')
select * from order_item where order_id in (select id from order_ids);



alter table "user" add column mood mood default 'ok';