DROP DATABASE IF EXISTS notes;
CREATE DATABASE notes;

\c notes;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title TEXT,
  content TEXT
    );

INSERT INTO notes (id,title,content)
    VALUES(1,'weekend plans','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        (2,'concert ideas','Drake and Travis Scott'),
        (3,'Trips','Seattle,Geneseo');