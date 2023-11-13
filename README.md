# SOAP-REST Parcial 2 - Docker Swarm

Este repositorio contiene una aplicación que consta de tres servicios principales: Frontend, SOAP API, y REST API. Puedes desplegar y gestionar estos servicios utilizando Docker Swarm. A continuación, se detallan los pasos para levantar los servicios.

## Instrucciones de Despliegue

1. **Clonar el Repositorio:**

   Descarga el repositorio desde GitHub:

   ```bash
   git clone https://github.com/AlsoFabio/soap-rest-parcial2.git
   ```

2. **Ingresar a la Carpeta Descargada:**

   ```bash
   cd soap-rest-parcial2
   ```

3. **Construcción de Imágenes:**

   Construye las imágenes necesarias para los servicios:

   ```bash
   docker build -t front_nodejs ./front
   docker build -t soap_nodejs ./soap
   docker build -t rest_nodejs ./rest
   docker build -t db_mysql ./sql
   ```

4. **Inicio del Servicio:**

   Despliega los servicios en Docker Swarm utilizando el archivo `docker-compose.yml`:

   ```bash
   docker stack deploy -c docker-compose.yml myservice
   ```

   Este comando creará y desplegará los servicios especificados en el archivo `docker-compose.yml`.
5. **Probar el Servicio**

   ingrese al siguiente link para empezar a probar el servicio
   http://localhost:3000/

7. **Finalizar los Servicios:**

   Para detener y eliminar los servicios, puedes utilizar el siguiente comando:

   ```bash
   docker stack rm myservice
   ```

   Esto detendrá y eliminará los servicios creados por Docker Swarm.

Con estos pasos, deberías tener la aplicación ejecutándose en tu entorno de Docker Swarm. Asegúrate de tener Docker Swarm configurado correctamente antes de ejecutar estos comandos.

¡Disfruta usando la aplicación!
