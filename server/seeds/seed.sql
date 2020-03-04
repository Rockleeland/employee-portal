DROP DATABASE IF EXISTS employee_portal;

CREATE DATABASE employee_portal;

USE employee_portal;
CREATE TABLE IF NOT EXISTS `employees` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false,
  position varchar(255) NOT NULL,
  createdAt datetime,
  updatedAt datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `employees` 
(`email`,`first_name`,`last_name`,`position`, `createdAt`, `updatedAt`) 
VALUES ('testeasy@gmail.com','Big','Bird', 'Sesame', '2020-03-03 07:39:10', '2020-03-03 07:39:10');  

INSERT INTO `employees` 
(`email`,`first_name`,`last_name`,`position`, `active`, `createdAt`, `updatedAt`) 
VALUES ('testeasy1@gmail.com','Leeland','Clenista', 'Software Engineer', true, '2020-03-03 07:39:10', '2020-03-03 07:39:10');  

INSERT INTO `employees` 
(`email`,`first_name`,`last_name`,`position`, `active`, `createdAt`, `updatedAt`) 
VALUES ('testeasy2@gmail.com','Luka','Doncic', 'Basketball Player', true, '2020-03-03 07:39:10', '2020-03-03 07:39:10');  

INSERT INTO `employees` 
(`email`,`first_name`,`last_name`,`position`, `createdAt`, `updatedAt`) 
VALUES ('testeasy3@gmail.com','Jimmy','G', 'QB', '2020-03-03 07:39:10', '2020-03-03 07:39:10');  

INSERT INTO `employees` 
(`email`,`first_name`,`last_name`,`position`, `createdAt`, `updatedAt`) 
VALUES ('testeasy3@gmail.com','John','Smith', 'Product Manager', '2020-03-03 07:39:10', '2020-03-03 07:39:10');  