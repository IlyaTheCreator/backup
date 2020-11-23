CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    role_id INT NOT NULL,
    email VARCHAR(30) NOT NULL,
    image VARCHAR(200),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id),
    INDEX uemail (email),
    CONSTRAINT fk_urole FOREIGN KEY(role_id)
    REFERENCES roles(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);