ALTER DATABASE default_db CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE USER 'default_sys'@'%' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON *.* TO 'default_sys'@'%';
