# Proyecto Data Dashboard - UX Design
## Introducción
Para la elaboración de este proyecto se parte del escenario que nos plantea Laboratoria acerca de la necesidad de crear un Data Dashboard para manejar y visualizar la información de las estudiantes de Laboratoria:
>En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje.
>La principal medida de progreso de una estudiante en Laboratoria es su avance completando los proyectos de la Ruta de Aprendizaje y su desempeño en función a la Rúbrica de Niveles Esperados. Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que llamamos LMS (Learning Management System). El LMS acumula data sobre quién leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.
>A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente en la evaluación de una estudiante, sí es una pieza de información relevante que las TMs quisieran visualizar para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.
>Así, el reto de este proyecto es crear una interfaz donde las TMs puedan ver y usar la data de progreso del LMS. Para ello, proponemos crear un data dashboard (tablero de visualización de datos).

## Análisis del problema
**¿Cuál es la situación actual?**

Actualmente,  el equipo de Laboratoria se apoya en las herramientas que brinda Google Drive para el manejo de sus bases de datos, es así que tienen una unidad donde colaboran todas las sedes, y se generan diversos archivos (SpreadSheets, Docs, etc.) compartidos, en los cuales se guarda y manipula la información de las estudiantes. 

Esta información es consultada principalmente por lxs TMs con diversos fines como consultar el avance de cada alumna, los resultados de las evaluaciones, asistencia y datos generales, así como  por lxs Coaches, quienes también evalúan y monitorean el avance y desarrollo de las alumnas.

**¿Cuál es el problema?**

Hasta el momento, Google Drive les ha ofrecido una manera de consultar los datos, pero no es del todo funcional ni práctica, ya que es difícil de leer, tarda en cargar, y no es fácilmente accesible, motivo por el cual se busca una alternativa de solución.

**¿Qué se propone?**

Se propone la creación de un data dashboard que permita consultar la información sobre el avance y desarrollo de las alumnas de Laboratoria de manera ordenada, dinámica y priorizando las necesidades del usuario.

## Definición del producto
Para poder empezar a desarrollar nuestro producto, determinamos que era esencial conocer quién es nuestro usuario y cuáles son las necesidades que tendrán que ser resueltas a través del data dashboard, para ello nos dimos a la tarea de realizar una investigación del usuario que nos ayudó a resolver las siguientes preguntas: 
* ¿Quién usará el data dashboard?
* ¿Qué espera lograr el usuario al usar el data dashboard?
* ¿Qué datos se deben priorizar en la interfaz?
* ¿Cómo se revisan normalmente los datos?
* ¿Qué valor aporta nuestro data dashboard?

#### Todo ello basándonos en el siguiente proceso de diseño:

* Acercamiento al usuario

En esta primera etapa, nos preguntamos quien sería el usuario que interactuara con el dashboard, por lo que partimos de la creación de un supuesto basándonos en la información que nos da el cliente (Laboratoria) en el preámbulo y  lo que conocemos sobre la forma de trabajo de Laboratoria, esto nos llevo a determinar que tendríamos dos tipos de usuario, el primario que serían lxs Training Managers y el secundario que sería el equipo de formación (Coaches).

⋅Una vez determinada esta hipótesis sobre los tipos de usuario, nos dimos a la tarea de comprobarla, mediante la realización de encuestas y entrevistas que nos permitieran conocer quién del equipo de Laboratoria CDMX interactúa el con el Google Drive existente, cómo es su experiencia y cuáles son los problemas que enfrenta en su día a día.

* Encuestas

Se realizaron un total de 4 encuestas (al 21/06/2018) al personal de formación de Laboratoria CDMX, a través de un cuestionario formulado en Google Forms a través de la siguiente liga:  https://goo.gl/forms/GZF7PsBis9ksYWr63  

⋅En esta encuesta se buscaba identificar la frecuencia de uso de la herramienta, los datos más relevantes para la persona que la ocupada, que problemas enfrentaba, así como la forma y el objetivo de uso.

* Entrevistas

Se realizó una entrevista presencial con la TM de Laboratoria CDMX con el objetivo de poder observar y registrar como interactúa con el Google Drive existente, comentando acerca de los problemas que enfrenta al usar esta herramienta, preguntando qué datos son los más relevantes en su día a día y porque sería útil tener un data dashboard en lugar de la herramienta actual.

## Análisis de información

Una vez realizadas las encuestas y entrevistas, el siguiente paso fue analizar la información recabada, con la finalidad de detectar las necesidades a resolver y poder determinar los puntos e información clave a presentar en la interfaz.

Entre los datos más relevantes que encontramos están el hecho de que los datos más relevantes para lxs TM son:

* El número de estudiantes activas.
* El avance general que tiene la generación en el LMS, destacando cuantas personas se encuentran debajo del porcentaje de avance mínimo recomendable.

También detectamos que lxs Coaches consultan los datos de las alumnas frecuentemente para observar su avance en el LMS comparado con las dudas presentes en clase y  al final de los sprint para observar el avance, las estadísticas de asistencia y los niveles de las alumnas para poder evaluarlas.

## Definición de proto-personas

Después de recabar y analizar la información determinamos que nuestro dashboard tendrá dos usuarios, uno primario que serían lxs TM de las diferentes sedes y uno secundario que serían los demás miembros del equipo de formación.

Para tener más claro estos dos perfiles, optamos por la generación de dos proto-personas que nos permitieran ver de manera rápida las características, metas y puntos de dolor de cada tipo de usuario, estas dos proto-personas se muestran a continuación:

<img src=/media/jpg/proto_persona_1.jpg alt=”proto_persona_1” width="50%" height="50%"> 

_Proto-persona del usuario principal_

<img src=/media/jpg/proto_persona_2.jpg alt=”proto_persona_2” width="50%" height="50%"> 

_Proto-persona del usuario secundario_

## Definición de requerimientos

Con toda la información disponible hasta el momento, generamos una lista de requerimientos básicos para que la experiencia del usuario con nuestra interfaz sea favorable, estos requerimientos se plantean como parte integral del MVP a entregar en el primer sprint y son:

- Que la primera tarea a realizar por el usuario en la interfaz será ingresar su nombre y sede a la que pertenece.
- Si se detecta que no se ingresaron los datos de inicio necesarios, la plataforma deberá enviar un mensaje de error.
- A al entrar el dashboard deberá despliegar en la pantalla principal los datos que se detectaron como más relevantes:

    * Número de estudiantes activas en generación de la sede del usuario.
    * Avance general en el LMS, destacando el número de alumnas debajo del avance mínimo esperado.

- Paralelamente, se debe presentar una barra lateral que indique al usuario el nombre con el que se ha logueado, y los filtros para cambiar de sede o generación que quiere consultar.
- Estos filtros deberán ser accionados mediante un botón
- Deberá existir la opción de cerrar sesión
- La interfaz debe ser sencilla y legible
- Todos los datos y gráficas mostrados deberán ser accionables (aportar información que ayude a la toma de decisiones)

## Proceso de sketching

**Sketch inicial**

Partiendo del preámbulo y del conocimiento previo sobre la forma de trabajar de Laboratoria, se escribio un pseudocódigo que nos dijera las acciones básicas que deberán ocurrir en nuestra plataforma, una vez realizada esta actividad se tradujeron los pasos del pseudocódigo a un diagrama de flujo.

<img src=/media/png/Data_Dashboard-Diagrama_de_flujo_1.png alt=”segunda_propuesta_de_sketch” width="50%" height="50%">

_Diagrama de flujo de las acciones básicas_

Siguiendo este diagrama de flujo, se elaboró un sketch de lo que para nosotras sería lo más importante para una TM. 

<img src=/media/gif/propuesta_sketch_01.gif alt=”segunda_propuesta_de_sketch” width="50%" height="50%">

_Primera propuesta de sketch antes de acercarnos al usuario_

<img src=/media/gif/propuesta_sketch_02.gif alt=”segunda_propuesta_de_sketch” width="50%" height="50%">

_Segunda propuesta de sketch antes de acercarnos al usuario_

**Adaptación del sketch**

Teniendo como base el sketch inicial, se realizó una adaptación tomando en cuenta la información obtenida mediante la entrevista y las encuestas.

<img src=/media/gif/sketch_desktop_v2.gif alt=”segunda_propuesta_de_sketch_desktop” width="50%" height="50%">

_Propuesta de sketch para escritorio despúes de acercarnos al usuario_

<img src=/media/gif/sketch_mobile_v2.gif alt=”segunda_propuesta_de_sketch_mobile” width="25%" height="25%">

_Propuesta de sketch para movil despúes de acercarnos al usuario_

**Testeo del sketch**

Esta adaptación del sketch se lleva a prueba con dos usuarios potenciales para obtener su feedback y detectar puntos a mejorar.

Entre las observaciones más importantes que nos hicieron esta el buscar una alternativa para la palabra _filtrar_, ya que esta genera confusiones y no dice exactamente al usuario para que sirve el botón donde se usa.

**Elaboración de wireframes**

Como siguiente paso para el desarrollo de la interfaz, desarrollamos los wireframes de nuestra versión para desktop, agregandole el feedback recibido durante el testeo del sketch. Este wireframe se subio a la aplicación de marvel para poder hacer una nueva ronda de testeo con nuestros usuarios.

El wireframe de la versión desktop puede consultarse en https://marvelapp.com/949ci11

## Diseño de la interfaz de usuario
* Selección de paleta de colores
* Selección de tipografía


