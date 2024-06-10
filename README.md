# Gestión de Horarios Web - Proyecto DAM
## Alumno: Riki Alamo

## Índice
1. [Introducción](#introducción)
2. [Funcionalidades y Tecnologías Utilizadas](#funcionalidades-y-tecnologías-utilizadas)
3. [Guía de Instalación](#guía-de-instalación)
4. [Guía de Uso](#guía-de-uso)
5. [Documentación](#documentación)
6. [Interfaz en Figma](#interfaz-en-figma)
7. [Conclusión](#conclusión)
8. [Contribuciones, Agradecimientos y Referencias](#contribuciones-agradecimientos-y-referencias)
9. [Licencias](#licencias)
10. [Contacto](#contacto)

---

## Introducción

### Descripción del Proyecto
El proyecto "Gestión Horario" es una aplicación diseñada para gestionar y registrar los horarios de entrada y salida de los empleados en una organización. Este sistema permite a los administradores supervisar la asistencia y tener un mejor control de los empleados.

### Justificación y motivación
En la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales hubo modificaciones con respecto al tratamiento de los datos de los empleados a la hora de controlar el cumplimiento de las obligaciones laborales, entre estás modificaciones se encuentran los principios generales del tratamiento de datos, eso junto con el artículo 87 deja implícito que deben usarse métodos poco invasivos. Esto, que puede parecer un tema menor y bastante lógico, afectó a varias empresas de diferentes sectores debido al común uso de los lectores de huellas para confirmar las entradas y salidas de los empleados. A día de hoy los inspectores están dando avisos o directamente poniendo multas a las PYMEs que usan este dispositivo y están teniendo que retirarlo. Buscando alternativas encuentran diferentes soluciones bastante costosas ya que tienen un gran número de funcionalidades que ellos no usarán además de ser un gran costo para la empresa.

Para solucionar este problema creé la aplicación de Gestión horario, una aplicación donde los empresarios podrán gestionar fácilmente a sus empleados y no perderán el tiempo con funcionalidades más allá de lo que necesitan.


### Objetivos
- Automatizar el registro de entradas y salidas de los empleados.
- Facilitar la supervisión de la asistencia.
- Proporcionar una interfaz amigable y accesible para todos los usuarios.


## Funcionalidades y Tecnologías Utilizadas

### Funcionalidades
- **Login de usuarios y administradores**: Dos interfaces de login separadas para usuarios y administradores.
- **Registro de entrada/salida de usuarios**: Permite a los usuarios registrar sus entradas y salidas.
- **Gestión de usuarios**: Los administradores pueden crear, actualizar y eliminar usuarios.
- **Actualización de contraseñas**: Los usuarios pueden actualizar sus contraseñas de forma segura.

### Tecnologías Utilizadas
- **Angular**: Framework de desarrollo frontend.
- **HTML/CSS**: Para el diseño y la estructura de la interfaz.
- **TypeScript**: Lenguaje de programación utilizado en Angular.
- **Bootstrap**: Framework CSS para diseño responsivo.

## Guía de Instalación

### Prerrequisitos
- **Node.js** y **npm** (Node Package Manager)

### Pasos de Instalación
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/rikialamo/TFGAngular.git
    cd TFGAngular
    ```
2. Instalar las dependencias:
    ```bash
    npm install
    ```
3. Compilar y ejecutar el proyecto:
    ```bash
    ng serve
    ```
    Luego, abrir un navegador web y navegar a `http://localhost:4200/`.

## Guía de Uso

### Login de Usuario y Administrador
1. Navegar a `http://localhost:4200/login-user` para el login de usuario, aunque por defecto te aparecerá esta pantalla al iniciar por primera vez.
2. Navegar a `http://localhost:4200/login-admin` para el login de administrador.
3. Introducir las credenciales y hacer clic en el botón de login.

### Funcionalidades Post-Login
1. **Usuario Home**:
   - **Registrar Entrada**: Clic en el botón "Registrar Entrada".
   - **Registrar Salida**: Clic en el botón "Registrar Salida".
   - **Actualizar Contraseña**: Introducir nueva contraseña y hacer clic en "Actualizar Contraseña".
2. **Admin Home**:
   - **Crear Usuario**: Introducir correo, nombre y contraseña y hacer clic en "Crear Usuario".
   - **Actualizar Usuario**: Introducir correo, nombre y contraseña y hacer clic en "Actualizar Usuario".
   - **Eliminar Usuario**: Introducir correo y hacer clic en "Eliminar Usuario".
   - **Listar Usuarios**: Clic en "Listar Todos los Usuarios" para obtener la lista de todos los usuarios.
   - **Listar Usuarios de tipo USER**: Clic en "Obtener Usuarios Tipo USER" para obtener la lista de usuarios.
   - **Listar Usuarios de tipo ADMIN**: Clic en "Obtener Usuarios Tipo ADMIN" para obtener la lista de administradores.

## Conclusión
Este proyecto ha permitido explorar y aplicar múltiples tecnologías para resolver un problema práctico en la gestión horaria de las empresas. La automatización de este proceso no solo mejora la precisión y eficiencia, sino que también facilita la supervisión y administración de los empleados en cualquier organización.

## Contribuciones, Agradecimientos y Referencias

### Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o crea un pull request en el [repositorio del proyecto](URL_DEL_REPOSITORIO).

### Agradecimientos
- A mis profesores y compañeros del ciclo DAM por su apoyo y colaboración.

### Referencias
- [Documentación de Angular](https://angular.io/docs)
- [Guía de Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

---

## Licencias

Este proyecto está licenciado bajo la MIT License.

---

## Contacto

Para cualquier consulta o sugerencia, puedes contactarme a través de:
- **Correo Electrónico**: rikialamo@gmail.com
- **GitHub**: [rikialamo](https://github.com/rikialamo)
- **LinkedIn**: [Ricardo Álamo Fernández](https://www.linkedin.com/in/ricardo-%C3%A1lamo-fern%C3%A1ndez-2a9782292/)

---

¡Gracias por tu interés en el proyecto "Gestión Horario"!
