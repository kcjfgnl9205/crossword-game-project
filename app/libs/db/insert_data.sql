INSERT INTO CATEGORY_MST(name, name_en, sorted) VALUES("JAVA", "java", 1);
INSERT INTO CATEGORY_MST(name, name_en, sorted) VALUES("PHP", "php", 2);
INSERT INTO CATEGORY_MST(name, name_en, sorted) VALUES("Python", "python", 3);
INSERT INTO CATEGORY_MST(name, name_en, sorted) VALUES("Linux", "linux", 4);
INSERT INTO CATEGORY_MST(name, name_en, sorted) VALUES("ネットワーク", "network", 5);
INSERT INTO CATEGORY_MST(name, name_en, sorted) VALUES("日本語", "japanese", 6);


INSERT INTO PART_MST(name, sorted, category_id) VALUES("超入門", 1, 1);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("入門", 2, 1);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("基礎", 3, 1);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("SQL", 4, 1);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("超入門", 1, 2);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("入門", 2, 2);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("基礎", 3, 2);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("ビジネス日本語", 1, 6);
INSERT INTO PART_MST(name, sorted, category_id) VALUES("生活日本語", 2, 6);


INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 1);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 1);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 1);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("4章", 4, 0, 1);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 2);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 2);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 2);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("4章", 4, 0, 2);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 3);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 3);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 3);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 4);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 4);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 4);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 5);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 5);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 5);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 6);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 6);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 6);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("1章", 1, 0, 7);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("2章", 2, 0, 7);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("3章", 3, 0, 7);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("会社で", 1, 0, 8);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("顧客先で", 2, 0, 8);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("スーパーで", 1, 0, 9);
INSERT INTO CHAPTER_MST(name, sorted, flg, part_id) VALUES("電車で", 2, 0, 9);

INSERT INTO LANG_MST(name, name_en) VALUES("英語", "en");
INSERT INTO LANG_MST(name, name_en) VALUES("カタカナ", "jp-kata");
INSERT INTO LANG_MST(name, name_en) VALUES("ひらがな", "jp-hira");