-- Eliminar la base de datos si existe
DROP SCHEMA `foodlyfinds`;

-- Crear la base de datos
CREATE SCHEMA `foodlyfinds`;

-- Seleccionar la base de datos
USE `foodlyfinds`;

-- Insertar datos de ejemplo en las tablas creadas automaticamente por java
--


-- Datos de ejemplo para la tabla user_tbl
INSERT INTO user_tbl (name, email, password, coords, phone_number)
VALUES ('Juan Perez', 'juan@example.com', '123', '40.7128° N, 74.0060° W', '123-456-7890'),
       ('María García', 'maria@example.com', '123', '34.0522° N, 118.2437° W', '987-654-3210'),
       ('Carlos López', 'carlos@example.com', '123', '51.5074° N, 0.1278° W', '555-555-5555');

-- Datos de ejemplo para la tabla store
INSERT INTO store (store_id,name, address, phone_number, store_image_url)
VALUES
    (1,'Pizzería Pablito', 'Av. Uruguay 1500', '123456789', 'https://i.postimg.cc/6365xNyQ/Pizzer-a-Pablito.png'),
    (2,'Bocatto da Fiorentino', 'San Martín 1006', '987654321', 'https://i.postimg.cc/3R9NkxPp/Bocatto-Fiorentino.png'),
    (3,'Don Julio', 'Guatemala 4699', '987654321', 'https://i.postimg.cc/x8CCMS2Z/DonJulio.jpg');

-- Datos de ejemplo para la tabla category
INSERT INTO category (name)
VALUES ('Hamburguesas'),
       ('Pizzas'),
       ('Ensalada'),
       ('Pastas'),
       ('Ensalada'),
       ('Platos Principales'),
       ('Comida Internacional');

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
INSERT INTO product (product_id, name, category_id, product_image_url, ingredients, clarification, price, waiting_time, store_id)
VALUES
    (1, 'Hamburguesa clásica', 1, 'https://i.postimg.cc/SRJSj7LF/Hamburguesa-Cl-sica.jpg', '"Carne de res, Queso cheddar, Lechuga Tomate, Pan de hamburguesa', '',5000.00, 10,2),
    (2, 'Pizza Margarita', 2, 'https://i.postimg.cc/j58qsk74/Pizza-Margarita.jpg', 'Mozzarella, Tomate, Albahaca, Masa de pizza', '', 7000.00, 15,2),
    (3, 'Ensalada de atún', 3, 'https://i.postimg.cc/PJ9tDpKL/Ensalada-At-n.jpg', 'Lechuga, Atún, Huevo duro, Tomate, Aceitunas, Cebolla, Vinagreta', '', 2000.00, 10,2),
    (4, 'Pizza Hawaiana', 2, 'https://i.postimg.cc/gcSrdryb/Pizza-Hawaiana.jpg', 'Jamón, Piña, Mozzarella, Masa de pizza', '', 8000.00, 15,1),
    (5, 'Pizza Pepperoni', 2, 'https://i.postimg.cc/6qmQh16p/Pizza-Pepperoni.jpg', 'Pepperoni, Mozzarella, Masa de pizza, Salsa de tomate', '', 7500.00, 15,1),
    (6, 'Pizza Vegetariana', 2, 'https://i.postimg.cc/HL9sNLWK/Pizza-Vegetariana.png', 'Pimientos, Cebolla, Champiñones, Tomate, Mozzarella, Masa de pizza', '', 9000.00, 15,1),
    (7, 'Pollo al curry', 5, 'https://i.postimg.cc/zX4BbMPd/Pollo-Curry.jpg', 'Pollo, Curry, Leche de coco, Pimiento, Cebolla, Arroz', '', 7000.00, 30,3),
    (8, 'Fideos con Albóndigas', 4, 'https://i.postimg.cc/NfKF0Yb9/Fideos-Alb-ndigas.jpg', 'Fideos, Albóndigas, Salsa de tomate, Cebolla, Ajo, Aceite de oliva, Sal, Pimienta, Queso rallado (opcional)', '', 8000.00, 45,3),
    (9, 'Tacos al pastor', 6, 'https://i.postimg.cc/R0BZGtmK/Tacos-Pastor.jpg', 'Carne de cerdo adobada, Tortillas de maíz, Piña, Cebolla, Cilantro, Salsa picante', '', 8000.00, 30,3);

-- Datos de ejemplo para la tabla order
INSERT INTO order_tbl (user_id, total_amount, order_type)
VALUES (1, 8.99, 'TAKEAWAY'),
       (2, 10.99, 'DELIVERY'),
       (3, 12.99, 'TAKEAWAY');