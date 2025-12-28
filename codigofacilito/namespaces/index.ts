/*Para poder usar nuestro namespace debemos referenciarlo
    usando la siguiente sintaxis 
    /// <reference path="ruta/del/archivo.ts" />
    notese que la ruta es relativa al archivo actual
    y que el triple slash es obligatorio y no es un comentario normal    
*/

/// <reference path="./namespace.ts" />

const newUserOutNamespace = new databaseEntities.User(1, "John Doe");
const newProductOutNamespace = new databaseEntities.Product(101, "Laptop");

/*
A la hora de compilar debemos incluir ambos archivos ya que son dependientes
tsc namespaces/namespace.ts namespaces/index.ts --outdir dist/ && node dist/index.js
*/
