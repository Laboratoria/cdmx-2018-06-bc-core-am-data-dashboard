# **Data Dashboard**
## *Documentación y desarrollo*

----
### 1. Definición de objetivos y estrategia


> En esta sección se definirán los resultados que busca el  cliente, se propondrán las diferentes opciones que podrían ayudar a conseguir los objetivos y se buscará llegar a un acuerdo con el cliente, para ello es importante definir estrategias que definirán si se desarrollará un  blog, sitio brochure, si interactúa con el usuario, etc.

El objetivo principal de este proyecto es desarrollar una herramienta que permita a las *Training Managers* (TMs)  visualizar de formas rápida, sintetizada y ordenada el progreso de las estudiantes de Laboratoria con respecto al *Learning Managment System*  (**LMS**).

  * Objetivos del cliente:

    * Herramienta que presente solo los datos duros más importantes por *sede* y *generación*: Promedio de avance, Estudiantes activas, Estudiantes con un avance considerable (mayor al 90%) y estudiantes con un avance bajo (menor al 60%).

    * Facilidad de poder comparar la información entre sedes y generaciones para identificar áreas de oportunidad de mejora con respecto al resto de sedes.

    * Que los datos sean fáciles de leer y ubicar para poder identificar si es necesario o no realizar cambios preventivos y/o correctivos con respecto a algún tema.

    * Si es posible, agregar un **Log In** para evitar que los datos personales de las estudiantes se vean comprometidos.

    * Implementar si es posible, el uso de un buscador solo para encontrar una estudiante por su nombre.

    * Es preferible tener la información categorizada en una barra de  navegación para acceder a las diferentes opciones rápidamente.

    * La información de cada estudiante solo se mostrará si se necesitan detalles. Por ello se optará por un modal que muestre la información de cada estudiante.
    * El sitio no interactúa con el usuario, no pide datos, permite enviar correos o pide llenado de formularios, solo permite la autentificación y visualización de la data, no es posible ingresar  o modificar la información sobre alumnas, tampoco es posible borrar data.
    * El sitio es más parecido a un sitio brochure ya que representa el branding de Laboratoria, pero es específico para mostrar información a las TMs.
  * Objetivos técnicos:
    * Uso de conceptos como: arrays, objects, DOM, XHT y Visual Design.
    * Manejo de API´s.
    * Manejo de información a niveles profundos.
    * Funciones como objetos globales (module.export).
    * Métodos de arrays y objects (filter, map, sort, etc.).
    * Manejo de Test como métrica de calidad en el código (uso de mocha tests y git).
    * GitHub colaborativo (manejo de ramas, commits, conflictos, repositorios remotos y locales, sincronización de repositorios).
    * Frameworks de CSS (Materialize, Bootstrap, etc.) o CSS nativo con responsive.
    * Manejo de múltiples documentos HTML o parámetros de display (none, visibility).
    * Proceso de UX (research, diseño, implementación, testeo).

### 2. Desarrollo de contenidos

> El apartado debe definir el contenido del sitio, listar las páginas que es relevante tener, detallando información sobre su contenido, además es necesario redactar los textos para mostrarse.

  * Inicio de Sesión: La página solicita que exista una autentificación de usuario. Exigirá un usuario, contraseña y contiene un botón de “Acceder”.
  * 1er Vista: Muestra encabezado con logotipo de Laboratoria en la parte superior, en este apartado muestra en la esquina derecha un mensaje de bienvenida al usuari@ y da un acceso de salida con la leyenda “Logout”.

En la parte izquierda muestra un menú desplegable para acceder a las opciones de sedes, generaciones y alumnas. Como contenido del sitio, se muestran tres cards con la información más importante de cada sede: nombre de la sede, número de alumnas activas, promedio de completitud general, promedio de avance por unidad, promedio de evaluación en quiz´s, tiempo invertido en el LMS, número  de alumnas con un alto y bajo avance. Como detalle adicional, se muestra un mapa con la ubicación de las sedes y un card con branding de Laboratoria “Talento que transforma”, se incluye una foto alusiva.

En su versión responsive, el mensaje de bienvenida al usuario no se muestra y el menú desplegable se convierte en un menú hamburguesa.
Esta vista volverá a aparecer siempre que el botón “Sedes” se oprima desde el menú de navegación.

  * Vista de sedes: Muestra cards con la información dá cada generación para cada una de las sedes. La los datos mostrados en esta vista son iguales que la vista anterior, adaptados a la situación de cada generación particular.

La nueva vista no genera un documento HTML nuevo, solo oculta la vista anterior y muestra la nueva vista nueva. Esta vista aparecerá cada vez que se acceda al botón “Sedes” del menú.

  * Vista de alumnas: Muestra una lista de alumnas de una sede y generación específica (da prioridad a la sede México en si última generación), para cada alumna se muestra su nombre, porcentaje de completitud y tiempo invertido, además incluye un botón que redirige al modal de cada alumna.

  * Modales: Incluye información específica de cada estudiante, tal como: nombre, sede, generación, correo, turno, porcentaje de completitud, tiempo invertido (de forma general y por unidad), promedio de quiz´s.

### 3. Propuesta de diseño

> Es necesario presentar bocetos de la estructura de cada plantilla del sitio, realizar el diseño de mediana y alta fidelidad y finalmente presentar el diseño de la plataforma. Es propio presentar y testear las páginas, se sugiere el  uso de *invision* para dar tour por cada pantalla en futuros proyectos.

* Diseño de baja fidelidad

![GitHub Sketch final de baja fidelidad](/scr/Pictures/SketchFinalBajaF.jpg)
Format: ![Alt Baja fidelidad]

* Diseño de mediana fidelidad con FeedBack aplicado

![Sketch](/src/Pictures/1.png)
Format: ![Alt Canva]

![Sketch](/scr/Pictures/2.png)
Format: ![Alt 1a vista]

![GitHub Sketch](/scr/Pictures/3.png)
Format: ![Alt Menú sedes]

![GitHub](/scr/Pictures/4.png)
Format: ![Alt Vista Sedes]

![GitHub](/scr/Pictures/5.png)
Format: ![Alt Menú generaciones]

![GitHub](/scr/Pictures/6.png)
Format: ![Alt Alumnas]

* Diseño de alta fidelidad en Canva
![GitHub Sketch alta fidelidad](/scr/Pictures/digital1.jpg)
Format: ![Alt LogIn]

![GitHub Sketch alta fidelidad](/scr/Pictures/digital2.jpg)
Format: ![Alt Vista Generaciones Mex]

![GitHub Sketch alta fidelidad](/scr/Pictures/digital3.jpg)
Format: ![Alt Vista lista de alumnas]

![GitHub Sketch alta fidelidad](/scr/Pictures/digital4.jpg)
Format: ![Alt Vista de modales]

![GitHub Sketch alta fidelidad](/scr/Pictures/digital5.jpg)
Format: ![Alt Vista Generaciones]

![GitHub Sketch alta fidelidad](/scr/Pictures/digital6.jpg)
Format: ![Alt Vista Sedes]

* Diseño del sitio final

![GitHub Implementación Desktop](/scr/Pictures/ImplementacionDesktop.png)
Format: ![Alt Implementación Desktop]

![GitHub Implementación responsive](/scr/Pictures/ImplementacionRespinsive.png)
Format: ![Alt Implementación Responsive]

### 4. Desarrollo y maquetación

> El desarrollo y maquetación del proyecto se realizó utilizando pequeños detalles de Bootstrap en su versión 4.0, la mayor  parte del diseño se maqueto y desarrollo en Materialize versión 1.0.0-rc.2 por medio de su CDN, además se hace uso de estilos sencillos en CSS y se usan propiedades de la funcionalidad display (none y visibility) para cambiar de una vista a la otra.

### 5. Dar revisión y capacitación

> Se da una asesoría al cliente sobre el uso y administración del sitio.

Se da explicación de uso de la página y donde se explican los detalles más importantes de la implementación. Se otorga un periodo de un mes al cliente para encontrar posibles fallas o dudas sobre el sistema, después de este periodo se podría requerir alguna gratificación por asesorías.

### 6. Publicación en el servidor o URL definitiva

> Se entrega una liga en GitHub Pages y  la liga del repositorio

see [Repositorio]
(https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-data-dashboard)

see [GitHub Pages]
(https://yocelingr.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/iniciosesion.html)

### 7. Documentación

   * **Tecnologías**

> Descripción de tecnologías, Frameworks, compiladores, gestores de tareas, librerías, su versión y cómo se usa.

   * Bootstrap V4.0: Uso por medio de CDN, su liga se incluye en la página de inicio: index.html en la línea. Su uso es para tener acceso a:.
   * Materialize V1.0.0-rc.2: Uso para estructura en HTML y estilos para vista de autentificación, botones,  menú desplegable y hamburguesa, para generar el Templete String de los cards y sus estilos, para el HTML de la lista de alumnas y su estilo, además para generar los modales y su estilo.
   * Canva: Herramienta de diseño gráfico, montada como sitio web con la cual se diseña la composición de imágenes que se usa para la generación de los sketches de mediana y alta fidelidad.
   * Fetch: Es un objeto de JavaScript que proporciona un método para obtener la información de una URL, en el caso expuesto se usa para tener acceso a un objeto dentro de un archivo JSON que ha sido montado en un servidor web como API.
   * API: Application Programming Interface, es un conjunto de reglas –código- y especificaciones que las aplicaciones pueden seguir para comunicarse entre ellas, en este caso, se usa para enlazar la llamada de Fetch con el objeto JSON.

   * Unit Test con Mocha: Herramienta para elaborar test unitarios en JavaScript, que destaca por su sencillez de uso, por su flexibilidad y por ser adaptable a nuevas librerías que incrementan su poder, es parte de Node.js. En el proyecto se usan los test unitarios como medio de comprobar que la calidad de ejecución de las funciones es buena, que cumple con los mínimos requerimientos y que devuelven solo la información necesaria.


   * **Organización**

> Boilerplate - Estructura de los ficheros.

8.	./
9.	├── .editorconfig
10.	├── .eslintrc
11.	├── .gitignore
12.	├── README.md
13.	├── data
14.	│   └── laboratoria.json
15.	├── package.json
16.	├── src
17.	|   |__ views
18.	|       |__ index.html
19.	|   |__ Pictures
20.	|       |__ colection of project´s pictures
21.	|   |
22.	│   ├── data.js
23.	│   ├── iniciosesion.html
24.	│   ├── main.js
25.	│   └── style.css
26.	└── test
27.	|   ├── data.spec.js
28.	|   ├── fixtures.js
29.	|   ├── headless.js
30.	|   └── index.html
31.	└── ux
32.	    └── README.md
33.	|__ db-1529772435333.json
34.	|__ yarm.lock


 * **Layout**

> Disposición general de los bloques del sitio, sus módulos y los handles o hooks para llamarlos (rutas).

   * Autentificación: Basta con ir a la página del sitio para tener acceso a la vista de autentificación.
   * Sedes: Al dar clic sobre “Acceder” en la vista de autentificación, se tendrá acceso a la vista de sedes y podrá regresar a ella toda vez que se oprima el botón “Sedes” en el menú.
   * Generaciones: Una vez colocados en la vista posterior a la autentificación se tendrá acceso a generaciones cada que se acceda al botón “Generaciones” del menú.
   * Alumnas: Cada que se oprima el botón “Alumnas” se tendrá acceso a la lista de alumnas, que por defecto será de México en su última generación.
   * Modales: Cada que se dé clic sobre el botón “Detalles” de cualquiera de las alumnas de alguna sede y generación especifica se tendrá acceso a su modal, para volver a una vista anterior, solo basta salir del modal con el botón “”.  

   * **Módulos**

> Nombre de cada módulo, sus parámetros, peculiaridades, de dónde obtiene los datos y como se transforman.

   * Sedes: Obtiene sus datos de la función ComputeVenuesStats, cuyo parámetro “data” es el resultado de la llamada Fetch a la API (myjson) donde se aloja la información de las alumnas.

Es posible llegar a la ejecución de esta función cada que se ejecute el evento addEventListener sobre el id “venuesFun” que corresponde al botón “Sedes” del menú y cada que se refresque la página. La llamada al evento, además ejecuta la función printVenues cuyo parámetro “venues” es el retorno de la función “computeVenuesStats” que recorre el objeto de informacion aportando las estadísticas (promedios) más importantes de cada sede. Estas funciones se encuentran declaradas en data.js y se mandan a llamar desde el evento en la función listeners (data) que se declara en main.js y  se ejecuta en este archivos desde el window.onload.

   * Generaciones: Obtiene sus datos de la función ComputeGenerationsStats, cuyo parámetro “data” es el resultado de la llamada Fetch a la API.

Es posible llegar a la ejecución de esta función cada que se ejecute el evento addEventListener sobre el id “generationFun” que corresponde al botón “Generaciones” del menú. La llamada al evento, además ejecuta la función printGenerations cuyo parámetro “generation” es el retorno de la función “computeGenerationsStats” que recorre el objeto de informacion aportando las estadísticas (promedios) más importantes de cada generación.

Estas funciones se encuentran declaradas en data.js y se mandan a llamar desde el evento en la función listeners (data) que se declara en main.js y  se ejecuta en este archivos desde el window.onload.

Gracias a las funciones globales generationsSantiago, generationsMexico y generationsLima, con parámetro “data” es posible separa el arreglo retornado por computeGenerationsStats en un array de objetos solo con la informacion necesaria para cada generación por sede, estas funciones además imprimen en el DOM las cards para cada caso, ello gracias al uso de Templete Strings que usan la información de cada arreglo para generar y llenar las cards de forma dinámica.

   * Alumnas: Obtiene sus datos de la función ComputeStudentsStats, cuyo parámetro “data” es el resultado de la llamada Fetch a la API. Es posible llegar a la ejecución de esta función cada que se ejecute el evento addEventListener sobre el id “studentsFun” que corresponde al botón “Alumnas” del menú. La llamada al evento, además ejecuta la función printStudents cuyo parámetro “students” es el retorno de la función “computeStudentsStats” que recorre el objeto de informacion aportando toda la información de cada alumna.

Estas funciones se encuentran declaradas en data.js y se mandan a llamar desde el evento en la función listeners (data) que se declara en main.js y  se ejecuta en este archivos desde el window.onload.

Además, en data.js se cuenta con las funciones sudentsList (laboratoria) y studentsModal (laboratorio), donde “laboratoria” corresponde a la data que genera el Fetch, donde estas funciones generan la información necesaria para la lista de alumnas a mostrar y la informacion para cada modal correspondientemente.

   * Botón Filtrar: se manda a llamar desde el evento addEventListener del id “filt” que genera una llamada a la función filterStudents (data) y printFilter (filter) donde la primera función recibe un arreglo con los datos de todas las alumnas y busca dentro solo las alumnas que coincidan con el mismo nombre, guardará sus datos en un nuevo arreglo que retornara y será usado por la función imprimir que genera las cards para visualizar estas estudiantes.

   * Botón Ordenar: se manda a llamar desde el evento addEventListener del id “sort” que genera una llamada a la función sortStudents (data) y printSort (sort), donde la primera función recibe el arreglo de todas las estudiantes y las ordena en forma ascendente o descendente según el parámetro de orden alfabético por nombre o por porcentaje de completitud, el arreglo ordenado que retorna es recibido por la función print que generará dinámicamente las cards para mostrar la informacion de las alumnas.


   * **JavaScript**

> Disposición de los ficheros, alcance, uso y herramientas de gestión, listar librerías y  sus extensiones.

Para este proyecto no se usan librerías de JavaScript, sin embargo es posible diferenciar dos archivos:

   * data.js: en el cual se ejecutan todas las funciones (globales y locales) necesarias para procesar la información de la API en un primer nivel (de extracción de data) y en un segundo nivel (de procesado de data). En el primer nivel se extrae la información de la API y se generan arreglos de objetos con la información estructurada y usada para cálculos estadísticos (promedios) que será devuelta para su uso posterior.

En un segundo nivel, se separan los arreglos generados en un proceso de primer nivel para hacer diferenciación entre sedes y generaciones específicas. En el caso del procesamiento de segundo nivel para las alumnas, se separa la informacion que se usara en la impresión del DOM para la lista y modales de alumnas.

   * main.js:  aquí se hace el llamado a la función global window.onload para la carga de la llamada Fetch de manera automática al refrescar el sitio, en dicha función se evoca a listeners(data) que son las llamadas a los eventos que se detonarán según el flujo del sitio. También se declaran las funciones relacionadas con el DOM (impresiones).

   * **CSS y HTML**

> Ficheros -explicación de nombramiento


   * Se cuenta con un único archivo de estilos “style.css” donde se especifican cuestiones de visualización del sitio con base a Id´s o clases.
   * index.html: en él se genera la estructura para mostrar el inició de sesión y contiene los elementos para llevar a cabo la autentificación de usuarios.
   * Index2.html: en él se vierte todos los botones y espacios para mantener el flujo de funcionamiento y para mostrar todos los elementos del sitio.


   * **Getting started**

> Explicar y comentar los procesos, comandos y procedimientos para poner el proyecto en marcha, compilar, gestionar dependencias, etc.

   * Como usuario: Acceder a la URL de GitHub Pages, autentificar usuario, recorrer el sitio para encontrar la información necesaria, el flujo de trabajo obliga al usuario a ir de arriba hacia abajo y de izquierda a derecha accediendo a información cada vez más profunda.
   * Como desarrollador y/o UXD: Acceder a la liga del repositorio, forkear y clonar el repositorio, abrir el repositorio local haciendo uso de un editor (VisualStudioCode, Atom, etc.) y realizar las modificaciones necesarias en los archivos tomando como base la explicación sobre ficheros, archivos y funciones especificados antes, guardar los cambios y visualizarlos desde la liga local ejecutando los archivos con extensión HTML desde la carpeta del usuario, ver los cambios ejecutados y realizar debugging o inspección de la ejecución de los programas gracias a los elementos de Google/ Firefox for Developments a los que se tendrá acceso desde las herramientas de “inspeccionar” del sitio.

Por último, subir cambios desde Git (gitbash) al repositorio y realizar un pull request desde GitHub, esperar a que el dueño del repositorio master apruebe o rechace el commit.

### 8. Organización y distribución de tareas:

Issues para Sprint 1 y 2

-	Nuevo sketch con FeedBack.
-	Mejorar README UX.
-	Mejorar README general.
-	Maquetación en Figma.
-	Maquetación en CSS.
-	Función sedes.
-	Enlazar JS con CSS.
-	1/3 TDD.
-	Crear dos ramas.

Issues Sprint 2 y 3: UX y UI

-	Sketching final.
-	Justificación en README de UX.
-	Header and Footer.
-	Carrusel.
-	Menús.
-	Log In.
-	Items.

Issues Sprint 2 y 3: Funcionalidad

-	Función alumnas.
-	Función progreso alumnas.
-	Funcionando en DOM.
-	3/3 TDD.
-	GitHub Pages (liga).

Acuerdos de trabajo:

-	Miembro Nayely Molina se enfoca en UX y UI.
-	Miembro Yocelin Garcia se enfoca en la funcionalidad, test y realizar funciones para pasar data al DOM.
-	Ambas miembros se comunican avances día a día y están al tanto de los requerimientos de su par.
-	Si es necesario suspenden las labores menos importantes para poder trabajar en las labores prioritarias de manera conjunta.
-	Ambas miembros están al tanto de los cambios del par y son responsables del GitHub colaborativo de actualizar y subir cambios usando la técnica de ramas.
-	Los Commits que se realizan en el espacio de Laboratoria se realizan desde la rama master tras hacer Peer Programming  desde la PC que tiene la rama master (YocelinGR).

### 9.	Fechas importantes

#### Demo Sprint 1

> Martes 26 de junio.

Nivel Requerido:

1.	UX Sketching completo de diseño ideal, documentado en README.
2.	UI Diseño sencillo maquetado y aplicado con CSS.
3.	JS manipulación y visualización de data en dos niveles: sedes y generaciones, aplicando xhr/fetch  y DOM.
4.	TDD resolver una tercera parte de los test.
5.	Liga de GitHub Pages desplegando avance

Nivel Alcanzado:

1.	UX Sketching completo con documentación superficial, sin detalles.
2.	UI diseño en papel, en modelo de mediana y alta fidelidad con un CSS sencillo y adaptado para la entrega (no es igual al modelo ideal, pero integra los elementos más importantes para visualizar la funcionalidad).
3.	En JS, se presenta manipulación de data en casi todos los niveles, exceptuando los temas y sus parámetros, gracias al uso de FETCH. La data extraída se muestra en consola.
4.	Se logra pasar 4/18 Test.
5.	Liga de GitHub Pages con avances presentada.

La liga se logró obtener  tras resolver conflictos de versiones en las ramas.

#### Demo Sprint 2

> Martes 3 de julio

Nivel Requerido

1.	UX Entrega de Sketching con FeedBack aplicado.
2.	UX Entrega de argumentación de la selección de elementos en Visual Design, documentado en README.
3.	JS manipulación y visualización de data mostrando estudiantes y detalle de progreso de estudiantes, aplicando xhr/fetch  y DOM.
4.	TDD Pasar dos terceras partes de los test.
5.	UI progreso del diseño entregado la semana previa.
6.	Liga de GitHub Pages desplegando avance.

Nivel alcanzado

1.	UX modificado, bocetado y aprobado tras FeedBack recibido por: Karla Nava, Sherly Silvana, Amalia Rivera, John Parra, Paulina y Lucile Baretier.
2.	Avance en la documentación de UX, aún falta añadir Historias de Usuarios.
3.	Manipulación de data hasta las unidades, es posible generar todas las funciones requeridas para la totalidad del proyecto de manera eficaz (funciones: computeGenerationsStats, computeStudentsStats, sortStudents y filterStudents). Además se tiene acceso a funciones para realizar la impresión en el DOM, cuyo diseño se asemeja más al modelo de alta fidelidad final, sin embargo aún no es posible enlazar todas los eventos (addEventListener a sus espacios en DOM específicos).
4.	Es posible pasar 14/18 test. Falta manipular y pasar test referentes a la información profunda de los estudiantes (subtemas y sus parámetros).
5.	El diseño de UI del proyecto final se encuentra en su mayoría en CSS apoyado por los Frameworks Bootstrap y Materialize, además se hace uso de Templete Strings para generar Cards de impresión para cada conjunto de datos a ser mostrado.
6.	La liga en GitHub es presentada en adición a la del repositorio, se encuentra funcional con los enlaces a las páginas HTML que se derivan del flujo de navegación.

El trabajo en conjunto se realiza por separado en horarios nocturnos (aproximadamente después de las 18:00 horas) y con la metodología Peer Programming en horarios comprendidos de 8:00 a 18:00 horas. Cuyos cambios se agregan a la rama master desde Git.

#### Demos Sprint 3

> Martes 10 de julio

Nivel esperado

1.	UX Diseño user centricity (cerca de las necesidades de los usuarixs).
2.	Aplicación de conceptos como contraste, jerarquía, tipografía, color y alineación.
3.	JS aplicar fórmulas para sacar porcentajes, promedios, filtrar.
4.	TDD codificar los últimos test y resolver la última tercera parte de estos.
5.	Liga de GitHub Pages desplegando avance.

Nivel Alcanzado

1.	El diseño se realiza siguiendo las necesidades de los usuarios testeados y adaptando cada requerimiento con las capacidades del equipo y las herramientas brindadas por CSS y Materialize. Se hacen nuevas adaptaciones de diseño y control de flujo de navegación tras recibir FeedBack de usuarios y lluvia de ideas tras el Design Review.
2.	Se aplican colores básicos y que concuerdan con la gama cromática de Laboratoria, se respetan reglas básicas de contraste, se enfoca la jerarquía para destacar la información más relevante de cada Card (conjunto de información), se respeta la tipografía de Laboratoria como branding y se procura una alineación justificada en texto y centrada en elementos. Se trabaja en el enfoque de responsive.
 Sin embargo no se realiza diseño específico para mobile o se realiza el mobile First ya que este recurso no aporta valor para el producto. La opinión de la Traine Manager de México ayudó a identificar que el uso del Data Dashboard en mobile sería solo de urgencia para visualizar datos de forma rápida.

3.	Se tiene acceso a la información más profunda de cada estudiante, es posible filtrar por nombre, ordenar por nombre y porcentaje (en forma ascendente y descendente), es posible sacar promedios y porcentajes por sede, generación y alumna para evaluar avance de  completitud, tiempo invertido en unidades y calificación de Quizes.

4.	Es posible entregar el 100% de los test, tanto los prediseñados, como los dados formulados, fue posible estructurar y adaptar los test para apegarse aún más a la estructura de la Data provista por la API.

5.	Liga de GitHub entregada y con enlaces entre HTML´s funcionando de forma correcta.

### 10. Equipo y contacto:

   * Estefanía Molina

> Sus capacidades como UX Designer destacan, además tiene excelentes capacidades para programar en CSS, HTML y Javascript. Es capaz de usar Frameworks de CSS tales como: Bootstrap y Materialize, hace uso de plataformas de maquetación tales como: Canva. Buen uso de GitHub colaborativo.

Contacto de colaboradoras:

-	Slack: Estefanía Molina.
-	see [GitHub]
(https://github.com/EstefaniaMolinaa)

-	FaceBook: @Nay Molina

   * Yocelin García

> Habilidad de UX Designer, además tiene excelentes capacidades para programar en CSS, HTML y JavaScript. Hace uso de GitHub colaborativo y presenta buena lógica de extracción de datos de API´s.

Contacto:

-	Slack: YOCELIN GARCIA ROMERO
- see [GitHub]
(https://github.com/YocelinGR)

-	FaceBook: @Yocelin Garcia Romero
-	Correo: garcia_romero.y@hotmail.com

### 11. Investigación UX

# **Data Dashboard**

## **Proceso de UX**

Nuestro primer acercamiento lo haremos a través del proceso de diseño, donde pasamos por diferentes etapas como:

### **1. Descubrimiento e investigación**

Laboratoria es una Asociación comprometida con la educación e inclusión al mundo Tech de mujeres en América Latina, en cada uno de sus bootcamp hay lugar hasta para 100 alumnas, siendo cada uno de ellos un tanto diferente y revolucionado comparado con su ultima edición, es así como la necesidad de una base de datos surge, pues para lograr mejores resultados se deben analizar cada uno de los avances de las alumnas.
Es así como surge este Data Dashboard, una interfaz diseñada para las Training Manager de Laboratoria, con el objetivo de mostrar los avances de cada alumna en la plataforma LMS, busca mostrar en números y graficas el avance de cada una de ellas y las alumnas activas.

__Usuarixs:__ 
Comencemos con las TM de todas las sedes, pues su opinión es la más importante ya que son las usuarias principales. Los usuarios secundarios son los coachs y el personal de alummni manager. 
Es necesario decir que los usuarios  cuentan con un conocimiento amplio en el mundo tecnologico y estan familiarizados con las plataformas que usaremos como referencia para la creacion de este Data Dashboard, las entrevistas arrojaron que el uso de la plataforma seria principlamente por Laptop o computadora de escritorio, dejando en segundo plano el movil, pero no por eso es menos importante ya que es una manera rapida de acceder al Data Dashboard.


__Necesidades de las usuarias:__ 
La necesidad principal de las TM Laboratoria es la visualizacion de datos, dejando como referencia las alumnas activas y el porcentaje de completitud en general en la plataforma LMS.
Una vez analizados estos datos poder cuestionar, implementar, repetir o mejorar las actividades.

__Objetivos de las usuarias:__ 
El objetivo principal de las TM Laboratoria es toma de decisiones de una forma rapida, correcta y con bases solidas, ya que su función es la gestión de estrategias a través de la información adquirida, siempre buscando la mejora de la educación en el bootcamp.

__Pain points:__ 
El principal obstaculo de las TM Laboratoria es el acceso a los datos, pues en este momento se encuentran trabajando con datos que se encuentran en la nube en carpetas distintas y algunas de estas sin un enlace alguno aun cuando su contenido sea prioritario, esto significa perdida de tiempo y un poco de frustración para las TM.

__Sentimientos:__
En una entrevista realizada por Mariana Flores, Lucile menciona que la única manera en la que puede acceder a los datos es a traves de Excel en google drive, y le es muy complicado manipular los datos. Ese es su principal obstáculo, pues es muy tedioso.
Es por eso que ella cree que un Data Dashboard sería la solucion a todos sus problemas y sería muy feliz, pues la manipulación de datos sería muy rápida, eficaz y actualizada.

__Técnicas usadas en esta fase:__ 
- Una encuesta vía Google Docs.
- Dos entrevistas personales.
Cabe mencionar que antes de llevar a cabo las entrevistas teníamos un boceto preparado, recibimos feedback y lo mejoramos para poder ofrecer lo que la TM de CDMX requería, es decir alumnas activas, selección de sedes, generaciones y visualización de cada alumna.

__5. Objetivos del negocio:__ 
1.- Capacitacion y colocacion laboral de mujeres en el mundo Tech.
2.- Proporcionar talento tech femenino de calidad a las empresas.

__6. Motivaciones del negocio para el data dashboard:__
1.- Toma de decisiones para la mejora del bootcamp.
2.- Conocimiento del desarrollo de sus estudiantes.
3.- Saber que enfatizar para lograr un talento que agregue valor en cada proyecto.

### **2. Síntesis y definición**

__1. Cuáles crees que son los datos más importantes a tener en cuenta para el Data Dashboard:__
Teniendo como base las entrevistas y feedback de la TM de CDMX y un par de coachs, los datos mas importantes a mostrar son el numero de alumnas activas y el porcentaje de completitud en general en la plataforma LMS.

__2. Lo que los usuarios esperan obtener:__
Una plataforma actualizada, amigable, intuitiva y eficaz para poder realizar la consulta de los datos.

__3. Insights:__
Mostrar cada uno de los datos prioritarios, en cards y el perfil de las estudiantes en un modal o collasible.

__4. Data proporcionada:__ 
Nuestra data arroja 3 sedes con sus respectivas 3 generaciones, en cada una de ellas podemos encontrar a 15 alumnas que desglozan sus datos personales y su avance en 3 unidades de aprendizaje con su respectivo quiz.

### **3. Ideación**
Una vez concluida la busqueda tenemos como conclusión que un data dashboard muestra una barra lateral como menú, muestra la mayor información posible en un sola vista, es asi como surge el primer prototipo para la primer semana de avance.

![Sketch](/src/Pictures/1.png)
Format: ![Alt Canva]
![Sketch](/src/Pictures/2.png)
Format: ![Alt Canva]
![Sketch](/src/Pictures/3.png)
Format: ![Alt Canva]
![Sketch](/src/Pictures/4.png)
Format: ![Alt Canva]
![Sketch](/src/Pictures/5.png)
Format: ![Alt Canva]
![Sketch](/src/Pictures/6.png)
Format: ![Alt Canva]

### **4. Prototipado**
De acuerdo a la primer ideación más el feedback recibido por Lucile TM y Jhon coach de CDMX, se creo el siguiente prototipo, basado en el estudio de mercado de Data Dashboards que se encuentran actualmente en el mercado.

![Sketch](/src/Pictures/digital1.jpg)
Format: ![Alt Canva]
![Sketch](/src/Pictures/digital2.jpg)
Format: ![Alt Canva]
![Sketch](/src/Pictures/digital3.jpg)
Format: ![Alt Canva]
![Sketch](/src/Pictures/digital4.jpg)
Format: ![Alt Canva]
![Sketch](/src/Pictures/digital5.jpg)
Format: ![Alt Canva]
![Sketch](/src/Pictures/digital6.jpg)
Format: ![Alt Canva]
