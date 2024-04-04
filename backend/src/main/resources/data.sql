CREATE SCHEMA `foodlyfinds`;

USE `foodlyfinds`;

CREATE TABLE user_tbl
(
    user_id      INT PRIMARY KEY AUTO_INCREMENT,
    name         VARCHAR(255),
    email        VARCHAR(255) UNIQUE,
    password     VARCHAR(255),
    coords       VARCHAR(255),
    phone_number VARCHAR(20)
);

CREATE TABLE store
(
    store_id        INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(255),
    address         VARCHAR(255),
    phone_number    VARCHAR(20),
    store_image_url VARCHAR(255)
);

CREATE TABLE category
(
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(255)
);

CREATE TABLE calification
(
    calification_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id         INT,
    store_id        INT,
    value           INT,
    FOREIGN KEY (user_id) REFERENCES user_tbl (user_id) ON DELETE CASCADE,
    FOREIGN KEY (store_id) REFERENCES store (store_id) ON DELETE CASCADE
);

CREATE TABLE issues
(
    issues_id    INT PRIMARY KEY AUTO_INCREMENT,
    user_id      INT,
    store_id     INT,
    issue_type   ENUM ('WAITING_TIME', 'INCORRECT_ORDER', 'FOOD_QUALITY'),
    compensation ENUM ('REFUND', 'DISCOUNT', 'REPLACE'),
    FOREIGN KEY (user_id) REFERENCES user_tbl (user_id) ON DELETE CASCADE,
    FOREIGN KEY (store_id) REFERENCES store (store_id) ON DELETE CASCADE
);

CREATE TABLE product
(
    product_id        INT PRIMARY KEY AUTO_INCREMENT,
    store_id          INT,
    name              VARCHAR(255),
    category_id       INT,
    product_image_url VARCHAR(255),
    ingredients       TEXT,
    clarification     TEXT,
    price             DECIMAL(10, 2),
    waiting_time      INT,
    FOREIGN KEY (store_id) REFERENCES store (store_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category (category_id) ON DELETE CASCADE
);

CREATE TABLE `order`
(
    order_id     INT PRIMARY KEY AUTO_INCREMENT,
    user_id      INT,
    product_id   INT,
    total_amount DECIMAL(10, 2),
    order_type   ENUM ('TAKEAWAY', 'DELIVERY'),
    order_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_tbl (user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product (product_id) ON DELETE CASCADE
);

-- Datos de ejemplo para la tabla user_tbl
INSERT INTO user_tbl (name, email, password, coords, phone_number)
VALUES ('Juan Perez', 'juan@example.com', '123', '40.7128° N, 74.0060° W', '123-456-7890'),
       ('María García', 'maria@example.com', '123', '34.0522° N, 118.2437° W', '987-654-3210'),
       ('Carlos López', 'carlos@example.com', '123', '51.5074° N, 0.1278° W', '555-555-5555');

-- Datos de ejemplo para la tabla store
INSERT INTO store (name, address, phone_number, store_image_url)
VALUES ('Tienda A', '123 Calle Principal, Ciudad', '555-123-4567', 'https://example.com/store1.jpg'),
       ('Tienda B', '456 Calle Secundaria, Ciudad', '555-987-6543', 'https://example.com/store2.jpg'),
       ('Tienda C', '789 Calle Terciaria, Ciudad', '555-234-5678', 'https://example.com/store3.jpg');

-- Datos de ejemplo para la tabla category
INSERT INTO category (name)
VALUES ('Comida rápida'),
       ('Comida mexicana'),
       ('Comida italiana');

-- Datos de ejemplo para la tabla calification
INSERT INTO calification (user_id, store_id, value)
VALUES (1, 1, 4),
       (2, 2, 5),
       (3, 3, 3);

-- Datos de ejemplo para la tabla issues
INSERT INTO issues (user_id, store_id, issue_type, compensation)
VALUES (1, 1, 'INCORRECT_ORDER', 'DISCOUNT'),
       (2, 2, 'FOOD_QUALITY', 'REPLACE'),
       (3, 3, 'WAITING_TIME', 'REFUND');

-- Datos de ejemplo para la tabla product
INSERT INTO product (store_id, name, category_id, product_image_url, ingredients, clarification, price, waiting_time)
VALUES (1, 'Hamburguesa', 1, 'https://example.com/burger.jpg', 'Carne de res, lechuga, tomate, queso', 'Sin cebolla',
        8.99, 10),
       (2, 'Tacos', 2, 'https://example.com/tacos.jpg', 'Carne de cerdo, cebolla, cilantro, salsa', 'Sin picante',
        10.99, 15),
       (3, 'Pizza', 3, 'https://example.com/pizza.jpg', 'Pepperoni, queso mozzarella, salsa de tomate', 'Extra queso',
        12.99, 20);

-- Datos de ejemplo para la tabla order
INSERT INTO `order` (user_id, product_id, total_amount, order_type, order_date)
VALUES (1, 1, 8.99, 'TAKEAWAY', '2024-04-03 12:00:00'),
       (2, 2, 10.99, 'DELIVERY', '2024-04-03 13:00:00'),
       (3, 3, 12.99, 'TAKEAWAY', '2024-04-03 14:00:00');