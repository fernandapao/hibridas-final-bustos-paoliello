<!-- Aplicaciones Híbridas - Parcial Dos

Descripción:
Este repositorio contiene el trabajo correspondiente al parcial dos de la materia Aplicaciones Híbridas, desarrollado por  Paoliello, Fernanda y Bustos, Cintia. El proyecto se creo para la web AeroAsist y maneja todos los CRUD de las funciones y novedades de la aplicación web.

Tecnologías Utilizadas
Framework/librería: React
Backend: Node.js
Estilos: CSS, Bootstrap
Otras herramientas: MongoDB

Instalación
Para clonar y ejecutar este proyecto localmente, sigue los pasos:

Clona este repositorio:
git clone https://github.com/fernandapao/hibridas-parcial-dos-bustos-paoliello.git

Navega al directorio del proyecto:
cd hibridas-parcial-dos-bustos-paoliello

Instala las dependencias:
npm install

Inicia el servidor de desarrollo:
- En client: npm run dev
- En api: npm start

Uso:
Una vez que el servidor esté ejecutándose, accede a la aplicación en http://localhost:3000.
Autoras:
- Bustos, Cintia
- Paoliello, Fernanda -->

Este proyecto es una aplicación que permite gestionar y buscar novedades y funciones. Está desarrollada utilizando React en el frontend y Node.js con Express en el backend. La base de datos utilizada es MongoDB.

Características
Creación de novedades: Permite agregar nuevas novedades con campos como nombre, categoría, descripción, etc.
Creación de funciones: Permite agregar nuevas funciones con campos como nombre y descripción.
Visualización de novedades: Lista todas las novedades almacenadas en la base de datos.

Búsqueda personalizada:
Buscar novedades por nombre.

Edición y eliminación: Permite actualizar o eliminar novedades o funciones existentes.

Paginación: Lista las novedades en páginas para mejorar la experiencia de usuario al trabajar con grandes volúmenes de datos.

Estructura del Proyecto
Frontend
Tecnología: React

Backend
Tecnología: Node.js y Express.

Base de Datos
Tecnología: MongoDB.
Modelo de datos: Las novedades tienen al menos los siguientes campos:
nombre (string): El nombre de la novedad.
categoria (string): La categoría a la que pertenece.
descripcion (string): Información adicional sobre la novedad.
Configuración y Ejecución

Requisitos Previos
Node.js y npm instalados.
MongoDB en funcionamiento.

Instrucciones

Clona el repositorio:
git clone <https://github.com/fernandapao/hibridas-parcial-dos-bustos-paoliello.git>


Instala las dependencias del backend:
cd api
npm install

Instala las dependencias del frontend:
cd client
npm install

Configura las variables de entorno en el backend (archivo .env):
MONGO_URI=mongodb://localhost:27017/gestor_novedades
PORT=3000

Inicia el servidor de desarrollo:
- En client: npm run dev
- En api: npm start

Uso:
Una vez que el servidor esté ejecutándose, accede a la aplicación por el vinculo del vite.

Autoras:
- Bustos, Cintia
- Paoliello, Fernanda



