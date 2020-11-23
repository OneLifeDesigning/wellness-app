# Wellness TechGroup - SPA

### Descripción

Demo de SPA ReactJS que consume los datos de API externa [Ver Repo](https://github.com/OneLifeDesigning/wellness-api "Ver Repo") y los muestra en una tabla basada en el componente de Ant Design, que también nos permite hacer las operaciones de CRUD sobre ella.

**_Requerimiento_**
_Frontend Angular / React / Vue.JS: encargado de consumir la API anterior y presentar los datos en una tabla, y realizar las operaciones CRUD desde la misma_

> **Solución**
> Creo un Proveedor de Contexto (DataContextProvider) en Index.js que da acceso a los datos en cualquier parte de la APP. Para la carga de datos uso un _hook_ (useFetchWithLoading) que nos conecta con el servicio de _API Rest_ mediante _axios_ para las peticiones HTTP. Se las pasamos al componente EditableTable mediante context, el cual se encarga de procesarlos y operar con ellos.

---

**_Bonus_**
_Uso de alguna librería de representación gráficaFrontend Angular / React / Vue.JS: encargado de consumir la API anterior y presentar los datos en una tabla, y realizar las operaciones CRUD desde la misma_

> **Solución**
> Importo la libreria ApexCharts para representar los datos y creo unas funciones que los procesan para poder renderizarlos en los gráficos. Primer gráfico representa la suma de coste diario de todos los registros. Segundo gráfico representa la suma total de costes de cada mes.

---

Iniciar repositorio:

`git clone git@github.com:OneLifeDesigning/wellness-app.git`

### Añadir dependencias

`npm install`

### Ejecutar ReactJS

`npm start`

Ejecuta el modo desarrollo y abre el navegador en la ruta: [http://localhost:3000](http://localhost:3000).
