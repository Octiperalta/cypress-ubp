# Cypress Automation - UBP

Proyecto realizado con Cypress para la automatizacin de test de servicios y de interfaz de usuario. Las paginas utilizadas para realizar los test son: 
- [Automation Test Store](https://automationteststore.com/): para los test de interfaz de usuario
- [DummyJSON](https://dummyjson.com): para los test de servicios


## Casos de tests:

#### Test de Login:
1. Se testea un caso de inicio de sesion fallido. Al ingresar credenciales incorrectas la pagina devuelve un mensaje de alerta con el texto: *Error: Incorrect login or password provided.*

2. Se testea un caso de inicio de sesion exitoso. 

#### Test de cuenta:

1. Se hace un testeo de CSS. Al iniciar sesion se controla que lo botones de navegacion de la pagina de la cuenta tengan correctamente el color por default.

2. Se realiza una testeo de edicion de los campos de la cuenta. Al querer editar el nombre de la cuenta dejandolo vacio, la pagina devuelve una mensaje de error comunicando que el campo debe tener una longitud entre 1 y 32 caracteres.

3. Se realiza una testeo de edicion de los campos de la cuenta. Al completar correctamente y actualizar el campo mail de la cuenta, la pagina devuelve una alerta con el texto *Success: Your account has been successfully updated.* con una combinacion de colores determinada.

#### Test de Servicios:

1. Se realiza un peticion GET en la direccion https://dummyjson.com/products para luego verificar que el estado de la misma es exitosa (status = 200) y ademas se genera un nuevo archivo con la respuesta de la peticion. 

## Comandos Utiles

**npm run test**: inicia Cypress para comenzar a ejecutar los tests

**npm run test:e2e**: ejecuta todos los tests a través de la linea de codigo de la consola

**npm run report**: ejecuta Mochawesome para la generacion de reportes de los tests
