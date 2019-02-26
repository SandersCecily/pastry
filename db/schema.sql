DROP DATABASE IF EXISTS pastrydb;
CREATE DATABASE pastrydb;
USE pastrydb;

CREATE TABLE shelf (
	id INT auto_increment, 
    name VARCHAR (50) NOT NULL,
    eaten BOOLEAN NOT NULL,
    primary key (id)
);