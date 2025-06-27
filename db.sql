drop table if exists employee;
CREATE TABLE if not exists employee (
                                        id bigserial primary key ,
                                        name text,
                                        age int,
                                        address text,
                                        active bool default true
);

alter table employee add column company_id bigint;

drop table if exists company;
CREATE TABLE if not exists company (
                                       id bigserial primary key ,
                                       name text,
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


