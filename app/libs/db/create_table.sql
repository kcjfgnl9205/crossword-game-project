DROP TABLE CATEGORY_MST;
CREATE TABLE `CATEGORY_MST` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `sorted` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `name_en`)
);

DROP TABLE PART_MST;
CREATE TABLE `PART_MST` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sorted` int NOT NULL,
  `category_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `part_mst_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `CATEGORY_MST` (`id`) ON UPDATE CASCADE
);

DROP TABLE CHAPTER_MST;
CREATE TABLE `CHAPTER_MST` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sorted` int NOT NULL,
  `flg` tinyint DEFAULT '0',
  `part_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `part_id` (`part_id`),
  CONSTRAINT `chapter_mst_ibfk_1` FOREIGN KEY (`part_id`) REFERENCES `PART_MST` (`id`) ON UPDATE CASCADE
);

DROP TABLE LANG_MST;
CREATE TABLE `LANG_MST` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE USER_MST;
CREATE TABLE `USER_MST` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `authority` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)

DROP TABLE CROSSWORD_MST;
CREATE TABLE `CROSSWORD_MST` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `time_limit` int NOT NULL,
  `category_id` int NOT NULL,
  `part_id` int NOT NULL,
  `chapter_id` int NOT NULL,
  `lang_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `part_id` (`part_id`),
  KEY `chapter_id` (`chapter_id`),
  KEY `lang_id` (`lang_id`),
  CONSTRAINT `crossword_mst_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `CATEGORY_MST` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `crossword_mst_ibfk_2` FOREIGN KEY (`part_id`) REFERENCES `PART_MST` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `crossword_mst_ibfk_3` FOREIGN KEY (`chapter_id`) REFERENCES `CHAPTER_MST` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `crossword_mst_ibfk_4` FOREIGN KEY (`lang_id`) REFERENCES `LANG_MST` (`id`) ON UPDATE CASCADE
);

DROP TABLE CROSSWORD_DETAIL;
CREATE TABLE `CROSSWORD_DETAIL` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number` int NOT NULL,
  `clue` varchar(255) NOT NULL,
  `hint` varchar(255) DEFAULT NULL,
  `answer` varchar(255) NOT NULL,
  `score` int NOT NULL DEFAULT '0',
  `x_coordinates` int NOT NULL,
  `y_coordinates` int NOT NULL,
  `crossword_id` int NOT NULL,
  `direction` varchar(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `crossword_id` (`crossword_id`),
  CONSTRAINT `crossword_detail_ibfk_1` FOREIGN KEY (`crossword_id`) REFERENCES `CROSSWORD_MST` (`id`) ON UPDATE CASCADE
);


DROP TABLE NAME_MST;
CREATE TABLE `NAME_MST` (
  `key1` varchar(5) NOT NULL,  -- AA001, AA002等
  `key2` varchar(3) NOT NULL,  -- 001, 002, 003連番
  `name` varchar(255) NOT NULL,
  `remark1` varchar(255),
  `remark2` varchar(255),
  `remark3` varchar(255),
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
   PRIMARY KEY (`key1`, `key2`)
);


CREATE TABLE `CATEGORY_LANG_PACKAGE` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `lang_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `lang_id` (`lang_id`),
  CONSTRAINT `category_mst_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `CATEGORY_MST` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `lang_mst_ibfk_1` FOREIGN KEY (`lang_id`) REFERENCES `LANG_MST` (`id`) ON UPDATE CASCADE
);

