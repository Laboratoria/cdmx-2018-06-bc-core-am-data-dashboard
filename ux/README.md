# **Data Dashboard**

## **Proceso de UX**


### **1. Descubrimiento e investigación**
Para la fase inicial de diseño es necesario tomar como principio una vision enfocada hacia el cliente/usuario con la finalidad de:  

1.- Conocer a nuestro cliente
2.- Ubicar a nuestro usuario
3.- Ahilar expectativas con el cliente respecto a lo que espera del proyecto.

Una de las actividades diarias de las Training Managers (TMs) de Laboratoria, es analizar el proceso de las estudiantes, esto con el fin de apoyarlas en su aprendizaje. Son diferentes puntos a considerar para su evaluación, un pilar importante donde las estudiantes se apoyan para adquirir conocimiento y completar estos proyectos es el LMS (Learning Management System), donde proyectos las estudiantes acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes). El LMS acumula data sobre quién leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente en la evaluación de una estudiante, sí es una pieza de información relevante que las TMs quisieran visualizar para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

Se contactó con 3 TMs de Laboratoria (Alejandra Ramírez de Lima, Karla Rejas de Guadalajara y Lucile Baratier de CDMX) para realizar entrevistas con el fin de recabar información sobre sus necesidades, complicaciones, y la forma en que consultaban esta información.

Sorprendió saber que no están usando un Data Dashboard. Utilizan Spreadsheets u hojas de Excel, lo cual no es funcional ya que no es una forma amigable a la vista (No visualizan datos representativos), esto complica sus labores ya que toma mucho tiempo la consulta, la cual por lo general lo hacen en la lapp por lo complicado de la visualización. Coinciden en que diariamente se está consultando esta data y los datos principales a consultar son porcentajes generales de la generación (número total de estudiantes vigente, deserciones, avance en unidades, etc.), posteriormente en casos puntuales se analizan los datos de cada estudiante.

Debido a las múltiples funciones de las TMs, lo primordial que es la consulta de esta data día a día y lo complejo que es se tiene como objetivo crear una herramienta que ayude a procesar y visualizar estos datos de una forma rápida, eficaz y entendible, y que además puedan consultarse a cualquier hora del día así sea desde un equipo móvil o su lapp.

Formato entrevista:![Formato entrevista](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/FormatoEntrevista.png)
Contacto entrevista:![Contacto entrevista](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/contactandoEntrevista.png)
Entrevistas TMs:![entrevista1](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/entrevista2.png)
![entrevista2](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/entrevista1.png])                
![entrevistaLucile](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/entrevistaLucile.jpg)


### **2. Síntesis y definición**

El Data Dashboard debe de ser una herramienta digital en la cual los datos se puedan obtener de una manera simple y rápida.

Para la elaboración de este proyecto se cuenta con la información de 3 sedes (México, Lima y Chile), de cada sede 3 generaciones con 15 estudiantes cada una, de las cuales proporcionan sus datos (nombre y correo), progreso en general y también por tema (3) y por cada tema sus subtemas (6).

Para las TMs es muy importante la visualización del avance general del grupo, algunos de los datos importantes a añadir serian: Total de estudiantes activas, promedio de estudiantes que avanzan con forme a lo estipulado y por debajo de este (esto es muy importante para identificar problemas en el caso que el avance no sea lo esperado o si la mayoría tiene problemas con el mismo tema). También es importante la información por estudiante para evaluar casos puntuales.


### **3. Ideación**

Tomando en cuenta la investigación realizada sobre el tema y las necesidades del cliente se pensó en el diseño de un Data Dashboard que maneje la información sobre el avance de lectura del LMS de las estudiantes. Este debe ser de fácil y rápido uso, que realmente sirva como una herramienta para la visualización de los resultados de búsqueda, ahorrando tiempo y trabajo en la consulta de datos.
Se podrán consultar los datos por sede, generación (promedio general) y por estudiante.


### **4. Prototipado**

Para el prototipo del producto se pensó en primer plano que el usuario iniciara sesión solicitando nombre y contraseña (Ya que son datos importantes, no cualquiera puede tener acceso a ellos). Al acceder el usuario podrá seleccionar la sede, y después la generación. Después de seleccionar la sede se desplegará una tabla con las siguientes columnas: nombre de la alumna, porcentaje de progreso en general, porcentaje de temas terminados, tiempo completado por tema, temas terminados y temas no terminados.

Sketch: ![sketch](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/sketch1.jpg)

Prototipo:![prototipo](https://www.figma.com/file/gpI5I1ODAjiSnFwx0IIXheUm/Prototipo-Proyecto-2)

### **5. User testing**

Al realizar la entrevista a la TMs de la sede de CDMX se le mostro el sketch del prototipo, le pareció funcional y dando feedback nos mencionó que agregaría datos extras que para ella son primordiales (Alumnas activas y promedio avance grupal).
****

Nuevas propuestas:
![propuestasketch](https://github.com/Sanmc84/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/img/propuestaSketch.jpg)


### **6. Argumentación de Visual Design**
Despues de un proceso de research con respecto al cliente en esta caso Laboratoria, se decidieron utilizar los colores amarillo y negro de su gama cromatica, la tipografia, el logo y el slogan que identifican a Laboratoria como tal, debido a que es una imagen fresca, que recien comienzan a adaptar, despues de varios años portando tan emblematica imagen que los ha posicionado en el mercado tech de una manera destacada.

1. LOGO:

 Es representado por la palabra Laboratoria entre corchetes <>. Laboratoria resume en una palabra lo que somos y los corchetes nos llevan al mundo del código. Presenta cambios en la tipografía y en el tamaño, color y ángulo de apertura de los corchetes, los cuales les permiten tener el mismo logo, pero con más fuerza y protagonismo.

 2. COLORES:
 Se utilizan colores enérgicos y feministas como Laboratoria, el amarillo como color principal, pero  más enérgico que antes.  Todo con medida nada en exceso debido a que son una organización que forma mujeres adultas y fuertes.



 3. CORCHETES:
 Los corchetes son su principal símbolo. Los utilizan en su logo y los hacen con las manos cada vez que se toman una foto, su significado es el símbolo del progreso y la transformación que sucede en Laboratoria.

 4. TIPOGRAFIA:
 Se caracteriza por se contundente por escrito y liviana al leer. Conformada por una “Bitter” para los títulos y una “Open sans” para los textos.

 5. SLOGAN:
 “talento que transforma” denominado de tal manera debido a que es por las alumnas  que ocurre el cambio, pues no es el “código” lo que transforma; son ellas mismas las que transforman. Ellas, con sus ganas y su perseverancia transforman su vida en Laboratoria. Luego, al entrar a trabajar al mundo tech, transforman toda una industria, haciéndola más diversa, inclusiva e innovadora.
