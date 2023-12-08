# Javascript Avanzado
## Table Contents

1. [Node] (#node)

### Node
Node es un entorno multiplataforma para ejecutar JavaScript fuera del navegador, tiene su origen en el 2009 (Ryan Lenhiart).

#### **Instalacion**
[Descargar LTS](https://nodejs.org/es/download/)

#### **LTS**
LTS es long term support

## Preguntar que version tenemos
node -v
npm -v

## NPM
npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript

**Versiones válidas:** 12.x.x, 14.x.x, 16.x.x , 18.x.x y 19.x.x

#### **Que se puede hacer con node**

- Realizar API Rest.
- Acceder a bases de datos relacionales y no relacionales.
- Generar páginas dinámicas en un servidor web. => server side render
- Crear, leer y escribir archivos.
- Procesar y almacenar archivos enviados desde una página web.

**Elementos de node**
Dentro de node se utilizan los módulos y las callbacks.

- **Módulo:** Permiten aislar parte de nuestro código en diferentes archivos y mandarlos llamar sólo cuándo los necesitamos.
  Existen dos **formas de utilizar módulos** en node:
    - Common JS.
    - ES6 Imports.
    - 
    - 

  - **Asincronismo:** 
 El asincronismo es esencial para manejar operaciones que llevan tiempo, como la lectura de archivos, las solicitudes a servidores y otras operaciones que no deben bloquear la ejecución del código. Aquí tienes una breve introducción a los conceptos básicos de asincronismo en JavaScript.

- **EventLoop:** 
El Event Loop (bucle de eventos) es un concepto central en la ejecución asíncrona de JavaScript. Se refiere al mecanismo que permite que el código asíncrono se ejecute en un entorno de un solo hilo, como el navegador o Node.js. El Event Loop permite manejar operaciones de entrada/salida (E/S) sin bloquear la ejecución del programa.
- 
- **Call Stack (Pila de Llamadas):** 
- La ejecución de código en JavaScript comienza con la pila de llamadas. Cada vez que se llama a una función, se coloca en la parte superior de la pila de llamadas.
- 
- **Cola de Mensajes (Message Queue):**
- Cuando una operación asíncrona se completa, su callback (función de retorno) se coloca en la cola de mensajes.
- 
- **Event Loop (Bucle de Eventos):**
El Event Loop monitorea constantemente la pila de llamadas y la cola de mensajes. Si la pila de llamadas está vacía, el Event Loop toma el primer mensaje de la cola y lo coloca en la pila de llamadas para ser ejecutado.

- **Ejecución del Callback:**
- El callback se ejecuta, y este proceso se repite. Si hay más mensajes en la cola, se seguirán procesando hasta que la cola esté vacía.









