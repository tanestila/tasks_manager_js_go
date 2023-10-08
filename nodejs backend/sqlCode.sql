CREATE DATABASE IF NOT EXISTS db;

USE db;

CREATE TABLE IF NOT EXISTS Users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  email VARCHAR(100) NOT NULL, 
  pass VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL);

CREATE TABLE IF NOT EXISTS Task (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(100) NOT NULL, 
  completed BOOL NOT NULL,
  deleted BOOL NOT NULL,
  userId int NOT NULL ,
  CONSTRAINT `fk_Task_Users`
    FOREIGN KEY (userId) REFERENCES Users (id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
  );


INSERT INTO Users (id,email,pass,username) 
VALUES(0,'kekKiller@kitty.horse', '123456', 'nYsHkA');

INSERT INTO Task (id,title,completed,deleted,userId) 
VALUES(0,'Best book of the world!', FALSE, FALSE, 1);