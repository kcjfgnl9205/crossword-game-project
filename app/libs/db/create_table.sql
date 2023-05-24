DROP TABLE PART_MST;
CREATE TABLE PART_MST (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  sorted INTEGER NOT NULL,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp
);

DROP TABLE CHAPTER_MST;
CREATE TABLE CHAPTER_MST (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  sorted INTEGER NOT NULL,
  flg boolean default false, 
  part_id INTEGER not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp,
  FOREIGN KEY (part_id) REFERENCES PART_MST(id) ON UPDATE CASCADE
);

DROP TABLE CROSSWORD_CATEGORY_MST;
CREATE TABLE CROSSWORD_CATEGORY_MST (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  name_en VARCHAR(255) NOT NULL,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp
);

-- DROP TABLE DIRECTION_MST;
-- CREATE TABLE DIRECTION_MST (
--   id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   name_en VARCHAR(255) NOT NULL,
--   created_at timestamp not null default current_timestamp,
--   updated_at timestamp not null default current_timestamp on update current_timestamp,
--   deleted_at timestamp
-- );

DROP TABLE USER_MST;
CREATE TABLE USER_MST (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(16) not null,
  password VARCHAR(255) not null,
  email VARCHAR(255) not null,
  authority boolean not null default false,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp
);

DROP TABLE CROSSWORD_MST;
CREATE TABLE CROSSWORD_MST (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) not null,
  time_limit INTEGER not null,
  part_id INTEGER not null,
  chapter_id INTEGER not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp,
  FOREIGN KEY (part_id) REFERENCES PART_MST(id) ON UPDATE CASCADE,
  FOREIGN KEY (chapter_id) REFERENCES CHAPTER_MST(id) ON UPDATE CASCADE
);

DROP TABLE CROSSWORD_CATEGORY_DETAIL;
CREATE TABLE CROSSWORD_CATEGORY_DETAIL (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  crossword_id INTEGER not null,
  category_id INTEGER not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp,
  FOREIGN KEY (crossword_id) REFERENCES CROSSWORD_MST(id) ON UPDATE CASCADE,
  FOREIGN KEY (category_id) REFERENCES CROSSWORD_CATEGORY_MST(id) ON UPDATE CASCADE
);

DROP TABLE CROSSWORD_DETAIL;
CREATE TABLE CROSSWORD_DETAIL (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  number INTEGER not null,
  clue VARCHAR(255) not null,
  hint VARCHAR(255) null,
  answer VARCHAR(255) not null,
  score INTEGER not null default 0,
  x_coordinates INTEGER not null,
  y_coordinates INTEGER not null,
  crossword_id INTEGER not null,
  direction VARCHAR(6) not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp on update current_timestamp,
  deleted_at timestamp,
  FOREIGN KEY (crossword_id) REFERENCES CROSSWORD_CATEGORY_DETAIL(id) ON UPDATE CASCADE
);
