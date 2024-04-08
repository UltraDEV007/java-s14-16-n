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
    (1,'Pizzería Pablito', 'Av. Uruguay 1500', '123456789', 'https://scontent.fpss6-1.fna.fbcdn.net/v/t39.30808-6/308823708_509546954512693_2786323025211577712_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFC-JReIld_zsZnjoel0xsEwEUsdLobjQzARSx0uhuNDLiaoyQt7HX8UTZlr5tJFVlsVT5Mna_vTYN7ss5SzAO9&_nc_ohc=m3dpFbZpxDkAb6mVFZv&_nc_ht=scontent.fpss6-1.fna&oh=00_AfCQdMWUQWAh38AhYfTqS4Lxku8BQdQ5gww1ctrGezyhoQ&oe=6614CB3C'),
    (2,'Bocatto da Fiorentino', 'San Martín 1006', '987654321', 'https://img.mesa247.pe/archivos/webpages/1231-Logo-1668009123.png'),
    (3,'Don Julio', 'Guatemala 4699', '987654321', 'https://media-cdn.tripadvisor.com/media/photo-s/24/1d/97/e7/don-julio.jpg');

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
    (1, 'Hamburguesa clásica', 1, 'https://drive.google.com/file/d/1yc9zH3HLSvKaW47t8rCh1bTwB4Ft8jDh/view?usp=drivesdk', '["Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Pan de hamburguesa"]', '',5000.00, 10,2),
    (2, 'Pizza Margarita', 2, 'https://drive.google.com/file/d/19CdD1677Kw5V58-6BHLwhAlB4fNzt-lG/view?usp=drivesdk', '["Mozzarella", "Tomate", "Albahaca", "Masa de pizza"]', '', 7000.00, 15,2),
    (3, 'Ensalada de atún', 3, 'https://drive.google.com/file/d/1_obokewu4NL5_u1f62sVR936qB2BvJOR/view?usp=drivesdk', '["Lechuga", "Atún", "Huevo duro", "Tomate", "Aceitunas", "Cebolla", "Vinagreta"]', '', 2000.00, 10,2),
    (4, 'Pizza Hawaiana', 2, 'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg', '["Jamón", "Piña", "Mozzarella", "Masa de pizza"]', '', 8000.00, 15,1),
    (5, 'Pizza Pepperoni', 2, 'https://i.pinimg.com/736x/2d/41/f7/2d41f7762a4e8b20473caada000641ff.jpg', '["Pepperoni", "Mozzarella", "Masa de pizza", "Salsa de tomate"]', '', 7500.00, 15,1),
    (6, 'Pizza Vegetariana', 2, 'https://cdn.shopify.com/s/files/1/0191/9978/files/Pizza-Veggie-Supreme-blog.jpg?v=1652775259', '["Pimientos", "Cebolla", "Champiñones", "Tomate", "Mozzarella", "Masa de pizza"]', '', 9000.00, 15,1),
    (7, 'Pollo al curry', 5, 'https://i.blogs.es/9ea7a4/pollo_curry-copia/650_1200.jpg', '["Pollo", "Curry", "Leche de coco", "Pimiento", "Cebolla", "Arroz"]', '', 7000.00, 30,3),
    (8, 'Fideos con Albóndigas', 4, 'https://imag.bonviveur.com/espaguetis-con-albondigas-spaghetti-and-meatballs.jpg', '["Fideos", "Albóndigas", "Salsa de tomate", "Cebolla", "Ajo", "Aceite de oliva", "Sal", "Pimienta", "Queso rallado (opcional)"]', '', 8000.00, 45,3),
    (9, 'Tacos al pastor', 6, 'https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg', '["Carne de cerdo adobada", "Tortillas de maíz", "Piña", "Cebolla", "Cilantro", "Salsa picante"]', '', 8000.00, 30,3);

-- Datos de ejemplo para la tabla order
INSERT INTO order_tbl (user_id, total_amount, order_type)
VALUES (1, 8.99, 'TAKEAWAY'),
       (2, 10.99, 'DELIVERY'),
       (3, 12.99, 'TAKEAWAY');