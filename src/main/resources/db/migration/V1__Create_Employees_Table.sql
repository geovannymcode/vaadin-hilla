CREATE TABLE employees (
                           id BIGINT PRIMARY KEY,
                           name VARCHAR(255) NOT NULL,
                           email VARCHAR(255) UNIQUE NOT NULL,
                           phone VARCHAR(20)
);
