# Wellness TechGroup - SPA

### Descripción

Demo de SPA ReactJS que consume los datos de API externa [Ver Repo](https://github.com/OneLifeDesigning/wellness-api "Ver Repo") y los muestra en una tabla basada en el componente de Ant Design, que también nos permite hacer las operaciones de CRUD sobre ella.

**_Requerimiento_**
_Frontend Angular / React / Vue.JS: encargado de consumir la API anterior y presentar los datos en una tabla, y realizar las operaciones CRUD desde la misma_

> **Solución**
> Creo un Proveedor de Contexto (DataContextProvider) en Index.js que da acceso a los datos en cualquier parte de la APP. Para la carga de datos uso un _hook_ (useFetchWithLoading) que nos conecta con el servicio de _API Rest_ mediante _axios_ para las peticiones HTTP. Se las pasamos al componente EditableTable mediante props, el cual se encarga de procesarlos y operar con ellos.

---

Iniciar repositorio:

`git clone git@github.com:OneLifeDesigning/wellness-app.git`

### Añadir dependencias

`npm install`

### Ejecutar ReactJS

`npm start`

Ejecuta el modo desarrollo y abre el navegador en la ruta: [http://localhost:3000](http://localhost:3000).
