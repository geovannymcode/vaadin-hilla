<p align="center">
  <a href="https://spring.io/projects/spring-boot" target="_blank">
    <img src="https://img.shields.io/badge/Spring_Boot-3.4.1-brightgreen" alt="Spring Boot">
  </a>
  <a href="https://vaadin.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vaadin-24.6.2-blue" alt="Vaadin">
  </a>
  <a href="https://discord.com" target="_blank">
    <img src="https://img.shields.io/badge/chat-on%20Discord-7289da.svg?sanitize=true" alt="Discord Chat">
  </a>
  <a href="https://www.oracle.com/java/technologies/" target="_blank">
    <img src="https://img.shields.io/badge/Java-21-red" alt="Java">
  </a>
</p>

# Vaadin Hilla - Introducción al Componente CRUD

Este proyecto es una implementación de un componente CRUD utilizando **Hilla** y **Vaadin Flow**, que permite construir aplicaciones modernas y reactivas con una integración transparente entre el frontend y el backend.

## Descripción

El proyecto demuestra cómo crear un CRUD funcional con Hilla, utilizando **TypeScript** para el frontend y **Java** en el backend. La aplicación incluye características clave como la conexión con una base de datos, validaciones y un diseño responsivo.

### Características principales:
- **Conexión fluida** entre el frontend y el backend gracias a Hilla.
- **Componente CRUD** totalmente funcional.
- **Validaciones** tanto en el cliente como en el servidor.
- **Arquitectura modular** y escalable.
- **Base de datos relacional** configurada con un modelo sencillo.

## Tecnologías utilizadas

- **Vaadin Hilla**: Framework para aplicaciones web modernas.
- **Java**: Lenguaje backend.
- **TypeScript**: Lenguaje frontend.
- **Spring Boot**: Para la configuración y gestión del backend.
- **PostgreSQL**: Base de datos relacional.
- **Lombok**: Para reducir el código boilerplate.
- **Docker Compose**: Para la configuración de contenedores.

## Requisitos previos

- Java 21+
- Node.js 16+
- Maven 3.8+
- Docker y Docker Compose (opcional para levantar la base de datos)

## Configuración

### Configuración de la base de datos con Docker Compose

1. Clona el repositorio:

   ```bash
   git clone https://github.com/geovannymcode/vaadin-hilla.git
   cd vaadin-hilla
Inicia el contenedor de PostgreSQL:

bash
Copiar
Editar
docker-compose up -d
Esto levantará un contenedor PostgreSQL accesible en el puerto 15432.

Verifica que el contenedor esté en ejecución:

bash
Copiar
Editar
docker ps
Configuración manual de la base de datos
Si prefieres configurar la base de datos manualmente, crea una base de datos PostgreSQL con las credenciales especificadas en application.properties:

properties
Copiar
Editar
spring.datasource.url=jdbc:postgresql://localhost:15432/postgres
spring.datasource.username=postgres
spring.datasource.password=postgres
Compilación y ejecución
Instalar dependencias:

bash
Copiar
Editar
./mvnw install
Ejecutar la aplicación:

bash
Copiar
Editar
./mvnw spring-boot:run
Accede a la aplicación en http://localhost:8080.

## Estructura del proyecto

```plaintext
src
├── main
│   ├── frontend               # Código TypeScript y temas personalizados
│   │   ├── generated          # Archivos generados automáticamente
│   │   ├── themes             # Temas personalizados
│   │   │   ├── hilla          # Tema base para la aplicación
│   │   │   │   ├── styles.css # Estilos CSS personalizados
│   │   │   │   └── theme.json # Configuración del tema
│   │   │   └── my-theme       # Tema alternativo
│   │   └── views              # Vistas y componentes TypeScript
│   │       ├── auto-crud.tsx  # Componente CRUD automático
│   │       ├── auto-form.tsx  # Componente de formulario automático
│   │       ├── auto-grid.tsx  # Componente de tabla automática
│   │       └── index.tsx      # Punto de entrada del frontend
│   ├── java                   # Código Java
│   │   └── com.geovannycode   # Paquete base
│   │       ├── domain         # Entidades y servicios
│   │       │   ├── Employee           # Entidad Employee
│   │       │   ├── EmployeeRepository # Repositorio para la entidad Employee
│   │       │   ├── EmployeeService    # Lógica de negocio para Employee
│   │       │   └── Gender             # Enumeración de géneros
│   │       └── VaadinHillaApplication # Clase principal de la aplicación
│   └── resources              # Recursos de la aplicación
│       ├── db
│       │   └── migration      # Archivos SQL para migraciones
│       │       ├── V1__Create_Employees_Table.sql # Crear tabla de empleados
│       │       └── V2__Insert_Employees.sql       # Insertar datos iniciales
│       └── application.properties # Configuración de Spring Boot

