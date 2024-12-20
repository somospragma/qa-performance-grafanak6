# Arquetipo proyecto base K6 javascript y graficador de Stages

![k6](https://img.shields.io/badge/k6-0.53.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.11.0-green)
![Grafana](https://img.shields.io/badge/Grafana-Supported-orange)
![InfluxDB](https://img.shields.io/badge/InfluxDB-Compatible-blue)

## Features

- Escenario GET
- Escenario POST
- Graficador de stages propuestos

## Estructura de proyecto
````
qa-performance-grafanak6
 ┣ stages_design (Grafica todos los stages disponibles en la clase stages.js)
 ┃  ┗ stages_design.js
 ┣ .gitignore
 ┣ package.json
 ┣ README.md
 ┣ reqres_get.js (Script para pruebas de escenario GET)
 ┣ reqres_post.js (Script para pruebas de escenario POST)
 ┗ stages.js (Contiene los stages que son llamados desde los script de pruebas)
````

## Ejecución local
### Requisitos previos
* Node.js
* Puppeteer (js)
* k6

### Comandos de instalación
* Clonar el proyecto

```bash
  git clone https://github.com/somospragma/qa-performance-grafanak6.git
```

* Ir al directorio del proyecto

```bash
  cd qa-performance-grafanak6
```

* Instalar dependencias (Para el graficador)

```bash
  npm install
```

### Generar gráficas de los stages
Debe existir el archivo stages.js con los stages definidos para las pruebas. **Puede ser más de 1 stage.**
* Desde el directorio del proyecto, ejecutar

```bash
  node stages_design/stages_design.js
```
Después de la ejecución del comando anterior, se generarán **2** archivos en la carpeta *stages_design* por cada uno de los stages descritos en `stages.js`.
1. **`stage_n.html`**
    - Descripción: Este archivo contiene el gráfico **interactivo** en formato `.html` para el stage **n**. Se puede abrir de forma local en el navegador de preferencia y muestra dos métricas en una tabla que son:
        * Peticiones totales esperadas a ser enviadas a lo largo de la prueba
        * Tiempo total de la prueba planteada.
    - Ubicación `.\stages_design\stage_n.html`
2. **`design_result_n.html`**
    - Descripción: Este archivo es un screenshot en formato `.png` del gráfico interactivo en formato `.html` del punto anterior para el stage **n**. Puede ser utilizado para ver de forma rápida la propuesta o en informes.
    - Ubicación `.\stages_design\design_result_n.png`
> [!IMPORTANT]
> - Si ya existen estos dos archivos en la ruta y se vuelve a ejecutar el generador de gráfico, éstos serán reemplazados.
> - Para cambiar el título del gráfico se debe modificar el archivo `stages_design.js` al inicio del mismo donde se llama el método *graficarStages*

### Ejecución de las pruebas
En el directorio del proyecto
```bash
  k6 run [script_name].js
```

## Autores

| [<img src="https://gitlab.com/uploads/-/system/user/avatar/25199087/avatar.png?width=800" width=115><br><sub>Laura María Granados García</sub>](https://gitlab.com/laura.granados) <br/> |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |