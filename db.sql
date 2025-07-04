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






