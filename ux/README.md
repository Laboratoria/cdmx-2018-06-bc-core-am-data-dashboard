# **Data Dashboard**

## **Proceso de UX**

Nuestro primer acercamiento lo haremos a través del proceso de diseño, donde pasamos por diferentes etapas como:

### **1. Descubrimiento e investigación**
Las Training Managers (TMs) de laboratoria realizan la labor continua de analizar y procesar las grandes cantidades de información que reciben sobre las alumnas para apoyarlas en su aprendizaje dentro de laboratoria y al salir al campo laboral, además de que gracias a este analisis laboratoria esta en continuo crecimiento pues pueden realizar comparaciones sobre cuales actividades mejoran el desempeño de las alumnas y cuales deben mejorarse, su labor es fundamental en la estructura de laboratoria y nuestra meta en este proyecto es crear el mejor tablero de visualización de datos orientado a las necesidades de nuestras usuarias.
Para realizar el diseño de la interfaz de usuario de nuestro data dashboard entrevistamos a las training manager de las sedes de la CDMX y Guadalajara.

__Usuarixs:__  
Las training manager del equipo de laboratoria, especificamente de las sedes de la CDMX, Lima y Santiago puesto que los datos que mostraremos corresponden a esas sedes.

__Necesidades de las usuarias:__
Al entrevistar a Lucile y a Carla observamos que coincidian en que para ellas es importante poder visualizar los datos concretos de las estudiantes mas allá que las gráficas y poder acceder con facilidad a estos datos, pues de esa forma podrian aminorar el tiempo que normalmente les toma acceder y manejar estos datos.
Resumiendo, necesitan una plataforma intuitiva que facilite el acceso a datos concretos.

__Objetivos de las usuarias:__ 
Las usuarias utilizan los datos que recaban para analizar y modificar los comportamientos, actividades y forma de trabajo que se realiza en cada bootcamp,debido a que nosotras especificamente estaremos trabajando con los datos del LMS nos interesa poder mostrar claramente los datos de este pues a partir de estos datos se puede tomar en cuenta el reporte de progreso y aprendizaje continuo que manejan las estudiantes y como influye esto en su desempeño, ademas de su manejo de tiempo en su autoaprendizaje.

__Pain points:__ 
La principal herramienta que utilizan para la consulta y manejo de datos es google drive y excel, y debido a es una cantidad considerable de data es dificil acceder a la información específica.

__Sentimientos:__
Al hablar sobre las herramientas que utilizaban pudimos notar que hablaban con un poco de frustración hacia las herramientas, como ejemplo repecto a Excel la mayoría tenía sentimientos encontrados porque les era útil pero el proceso de acceso a una cantidad tan enorme de datos resulta frustrante.

__Técnicas usadas en esta fase:__
Realizamos entrevistas a las Training Managers de la CDMX y Guadalajara y comparamos nuestros resultados con los de nuestras compañeras y analizamos grabaciones y transcripciones de estas.
También realizamos sketches y los mostramos a nuestra coach para que nos diera feedback y poder mostrarlos a nuestra TM para mejorar nuestra interfaz.
También analizamos como se mostraba la información en otras data dashboards.

__5. Objetivos del negocio:__ 
Realizar una Data Dashboard intuitiva que facilite la usabilidad y el proceso de trabajo de las training managers de laboratoria.
Que resulte facil de entender y que los datos que se muestren sean pertinentes de acuerdo a las necesidades de las usuarias.


__6. Motivaciones del negocio para el data dashboard:__(Enlistarlo(s))
1. Agilizar el proceso de trabajo de las training managers.
2. Utilizando el proceso de UX poder realizar una interfaz intuitiva y amigable que podamos escalar en nuestros siguientes proyectos.
3. Aprender a manejar y procesar correctamente data y presentarla de forma pertinente.
4. Facilitar el ingreso y la usabilidad de los datos presentados.
5. Crear un pmv que cumpla con todas las especificaciones y requerimientos para mejorar los sentimientos de las TMs sobre sus herramientas de trabajo.


### **2. Síntesis y definición**
(Dada la fase anterior de investigación, ahora vamos a tomar todos los datos más importantes y transformarlos en información valiosa para comenzar a orientarse a la solución. También vamos a entender lo que la empresa quiere de ese producto y comenzar a entender ambas visiones con el fin de encontrar un punto armónico)


__1. Cuáles crees que son los datos más importantes a tener en cuenta para el Data Dashboard:__

Tener porcentajes concretos de el avance de las alumnas facilitaria la recolección de datos importantes.

   - Sobre las estudiantes: 
   Ir mostrando la información de lo general a lo particular y mostrar claramente datos concretos.
   Mostrar primero el avance por sede y completitud del lms y en un segundo nivel mostrar generaciones y finalmente los datps de las alumnas

 

__2. Lo que los usuarios esperan obtener:__
Acceso a la información que requieren (Promedios, avance y facilidad para filtrar resultados por sedes, generaciones y alumnas) de forma fácil y clara.

__3. Insights:__
Debemos analizar  los tiempos y pasos que realizan en los procesos que más realizan para facilitarlos.

__4. Data proporcionada:__ 

     -_Data relacionada a los cursos:_
     De los cursos se muestra cada tema y subtemas con sus distintos niveles de completitud, ejercicios y quizzes.

__5. Insights del negocio:__

### **3. Ideación**
Base a todo lo anterior, se tomo como elemento clave la navegación del usuario, ya que dependiendo de la facilidad con la que pueda acceder a lo que busca todo resultara mas intuitivo, por lo mismo se puso como punto central el menú de navegación, se propone que a través de este se pueda acceder de manera fácil y rápida a la info que se busca.
## 3.1 Diagrama de Flujo
Se propone un total de cuatro views: login, principal, generaciones y alumnas.
Login: en el cual se accederá a view-general, en esta el usuario deberá ingresar tanto nombre y contraseña.
View-general: en esta se podrá observar un icono el cual al darle click deslizara el menú a través de este se puede acceder a: sedes, generaciones, alumnas.
En esta misma view se puede observar datos generales de las sedes como las generaciones y el promedio correspondiente a estas, también a través de esta se puede acceder a la view de generaciones principal.
View Generaciones: En esta se puede acceder a datos como alumnas de una generación en especifico, conociendo los nombres y correos de las alumnas correspondientes a esta generación, y también a su nivel de completitud, y por ultimo se puede acceder a la view de alumnas.
También hay una serie de botones en los cuales se puede elegir el orden en el que se quiere ver los datos de alumnas: en orden ascendente dependiendo del nivel de completitud, mayor de 90 o menor a 60 en nivel de completitud.
View de Estudiantes: en esta se pueden acceder a datos básicamente de las alumnas como  nivel de completitud, los temas completados y cuales quedan pendientes, el tiempo invertido.
## 3.2 Composición
La pantalla estará dividida siempre en tres header, menú y contenido general,
El contenido general será una tabla la cual tendrá filas y columnas, para poder jerarquizar la información y que esta sea mas legible.
A través de todo lo anterior se busca resaltar la información clave para una mejor usabilidad.
## 3.3 Paleta de color
(https://ibb.co/i9yZsJ)
3.4 Tipografía.
()



### **4. Prototipado**
(Esta es la fase creativa, donde se comienza a construir el Data dashboard con la información obtenida de las fases anteriores. Se reafirma crear la experiencia de usuario, donde la solución resuelve necesidades y facilita la vida)

Sketch: (Adjuntar liga)

Prototipo en figma: (https://www.figma.com/proto/c5pPKa7r0yXGu2lQEaEzocql/data?node-id=4%3A3&scaling=min-zoom)

### **5. User testing**
(Si deseas validar tu propuesta, acércate a tu usuario y que te de feedback con el fin de mejorar tu producto en beneficio del negocio y de tu usuarix).
****
