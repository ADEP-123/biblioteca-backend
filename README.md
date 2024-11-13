# Sistema de Gestión de Biblioteca

Este proyecto tiene como objetivo desarrollar un sistema para la gestión de bibliotecas, que permita la administración eficiente de inventarios de libros, el manejo de préstamos, devoluciones, reservas, y la autenticación de usuarios con diferentes roles (administradores, bibliotecarios, y usuarios finales). El presente repositorio corresponde al backend de la aplicacion el frontend lo encontrara en el siguiente link:
https://github.com/emilynievesb/biblioteca-frontend

## Integrantes del Proyecto

- **Andrés David Elizalde Peralta**
- **Emily Julieth Nieves Badillo**
- **Santiago Alexander Ospina Pabon**

## Docente

- **Nury Farelo Velasquez**

## Instalacion

### Clonar y eliminar manualmente la garpeta .git

Para realizar este paso debe tener permisos de administrador en su dispotivo y tener habilitada la opcion de ver carpetas ocultas

1. Clone el repositorio con el siguiente comando:

```bash
git clone https://github.com/ADEP-123/biblioteca-backend
```

2. Busque la carpeta oculta `.git` dentro de la carpeta raiz del proyecto `biblioteca-backend` y eliminela

## Cómo instalar las dependencias

Para esto debe estar seguro de tener instalado Node en una version 18.18.0 o superior, para ello ejecute el siguiente comando en consola:

```bash
node --version
```

si obtiene un mensaje diciendo que no se reconoce ese comando debe instalar node, para ello puede acceder al siguiente link:
https://nodejs.org/en/download/package-manager

Una vez instalado node ejecute el siguiente comando

```bash
npm install
```

## Como iniciar el servicio

1. En la carpeta raiz cree un archivo `.env`.
2. Dentro del archivo `.env` debe declarar varias variables que se muestran acontinuacion:

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=

DATABASE_CLIENT="postgres"
DATABASE_URL="postgresql://bibliotecadb_lwy6_user:tz4kk5X1yaWIApnE5M7XXJT2EW4cMUSt@dpg-csonjaij1k6c73akq6qg-a.oregon-postgres.render.com/bibliotecadb_lwy6?ssl=true"
DATABASE_POOL_MIN=0
DATABASE_POOL_MAX=10
JWT_SECRET=
```
Debe rellenar caada una de las variables que no tienen valor segun los datos de su aplicacion

3. Inicie el servidor con el siguiente comando:

```bash
npm run dev
```