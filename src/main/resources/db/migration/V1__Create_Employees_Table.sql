CREATE TABLE employees (
                           id BIGINT PRIMARY KEY,
                           first_name VARCHAR(255) NOT NULL,
                           last_name VARCHAR(255) NOT NULL,
                           gender VARCHAR(10) NOT NULL,
                           email VARCHAR(255) UNIQUE NOT NULL,
                           phone VARCHAR(20),
                           start_date DATE,
                           shift_starts_at TIME,
                           active BOOLEAN,
                           description TEXT
);