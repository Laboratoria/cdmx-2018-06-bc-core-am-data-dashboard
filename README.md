# Data Dashboard

Las TMs de Laboratoria necesitan usar la data de las estudiantes lo más eficientemente posible, pues de ello depende
su progreso en el bootcamp. Los recursos que se les han compartido son una parte importante para que puedan desarrollar
los sprints, este recurso lo conocen como LMS (Learning Management System).

A pesar de ser un gran recurso, muchas de las alumnas lo perciben como una tarea más a realizar, esto a llevado a que
algunas alumnas lo posterguen. No sabemos qué porcentaje de ellas lo han usado y que tanto han realizado.

Tener presente toda esta documentación es importante para ver qué magnitud de un problema habrá que afrontar o si es necesario un cambio
en el método de aprendizaje.


## UX Research

La clave para prosperar en el entorno competitivo de los productos digitales, sin duda, es centrarse en la Experiencia del Usuario (UX). La gente simplemente no va a pagar dinero por un producto que no se adapte a sus necesidades.

Existen actividades específicas de investigación de usuarios que pueden ayudarte en cada etapa del proceso de desarrollo del producto: entrevistas, pruebas de usabilidad, investigación contextual; ejercicios generativos; encuestas; analytics; pruebas A/B. El desafío es identificar cuál es el adecuado para el problema que deseas resolver y asignar tiempo suficiente para ejecutarlo y obtener valor de él. La clave reside en probar poco y a menudo.

En esta ocasion el usuario neceswita de un data dashboard, pero antes de investigar sus necesidades, debemos nosotrso de comprender el concepto para ser más puntuales en nuestra investigación, pues depende mucho de nuestro conocimiento previo para hacer las preguntas precisas y saber que necesidades podemos cubrir para una mejor experiencia de usuario.

Los Data Dashboards permiten tener un seguimiento gráfico de los indicadores de una situación un e-business. Un tablero de control está compuesto por una serie de indicadores que permiten entender una situación determinada. Lo más importante de los tableros es, lograr combianar y escoger los indicadores precisos a comparar y poder llegar al detalle de una causa, viendo solo la punta del iceberg. Un tablero de control, le permite tener el control de su e-business, llevando un Balanced Scorecard BSC en su dispositivo móvil (mobile BI, inteligencia de negocios móvil).

En el caso de nuestro cliente-usuario la información que debe visualizar es el avance de sus alumnas y dependiendo de esa información tomar desiciones para mejorar su programa.

Para saber los requerimiento que se tendrán que cubrir para l@s TMs,  y  que tengan una visualización general y personal del progreso en cada una las alumnas, es necesario tener una buena base de datos y una organización eficiente de ella. Para ello implementaremos un cuestionario a la TMs de la sede de CDMX y algunos de los coaches.

Como plan inicial, se tiene pensado hacer un cuestionario general por parte de todo el squad, para atender las dudas generales para comenzar el proyecto, posteriormente retroalimentarnos con las entrevistas, y hacer el perfil de los usuarios dsetinados para esta web.

[Cuestionario del squad](https://goo.gl/forms/BXgYeoIpGxjYeaWF3)

[Entrevist de  Estef Y Josc](https://drive.google.com/open?id=1ycNiDHLAAmdJVMujJPte19xgeIQGglg7)

[Audio de entrevista de Florencia](https://drive.google.com/open?id=1RE-8SneGCdT9xByVd7m3r2tfd7xFTUhL)


Conforme a estos resultados haremos nuestro primer sketch tratando de cubrir las necesidades con mayor importancia. Será una interfaz fluida y limpia. 

Tomando en cuenta lo que el usuario puntuo como importante decidimos llevar acabo nuestro primer sketch, respetamos los colores de la empresa y tratamos de que fuera lo más amigable posible para el usuario.

También haciendo investigación sobre estos tableros nos enfocamos en doa preguntas importantes 
-[x]¿Qué tipo de datos se buscan en este data dashboard para hacerlo más eficiente? 
-[x]¿Qué tipo de cuestiones responde el contenido de este data dashboard?

Apegandonos a lo que las entrevisatas lanzaron como resultados, nos quedo claro que lo más importante era un visión general de cómo estaba el estado actual de todas la generación, no era tan importante la visualización de una grafica con mucha información, o de información ineficiente; era más importante ver números concretos como porcentajes que les daba a los usuraios un número escencial para tomar acciones.

Tenemos muy presente que los usuarios entrevistados no habian utilizado un data dasboard previamente, entonces tanto como usuario como nosotros no   información sobre el este campo, pero puntuo que era importante saber cuantas alumnas estaban estudiando activamente, y que sería un dato primordial de tenerlo como principal,  pues hacía el proceso manualmente en la aplicación que usa actualmente.

Puntuaron que no era tan importante saber que porcentaje había comenzado y su progreso, sino que lo más importante eran las actuales activas. Aunque si le interesa quien va por debajo del porcentaje esperado y quien va al nivel o incluso un poco más arriba, eso le daría una idea más cercana y actual de cómo es el rendimiento en general.



Iniciamos con una idea de sketch que a continuación presentamos, su diagrama de flujo y sus sketchs primarios en papel.
Tomamos en cuenta todas las sugerencias y necesidades de las entrevistas pero también hicimos un research externo inspirandonos en algunas páginas de data dashboards. Lo que pudimos observar fue que la mayor parte de la información está a primera vista, con diferentes formas de organización.
La que más nos inspiró fue la de Canadá  https://www.statcan.gc.ca/eng/about/website-faq
Tener todo en cards con gráficas y  porcentajes hace más entendible y accesible la información para el usuario.

Páginas de Referencia

[Statics Canada](https://www.statcan.gc.ca/eng/start)
[Office for National Statics](https://www.ons.gov.uk/businessindustryandtrade/business)

Nuestra primera idea fue un flujo a base de botones, donde la página inicial tuviera un boton con las sedes, de ahi una pagina con las sedes, de ahí a una página con las generaciones y esta llevara a una página con una vista inicial con los datos generales de la generación elegida y después de eso tuviera la opción de elegir a la alumna correspondiente. El flujo no era tan malo, pero no consideramos la cantidad de funciones para cada botón además de lo tedioso que se volvería con  el tiempo usar la plataforma. 

![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/sketch1.png)
![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/sketch2.png)

El diagrama de flujo parecia sencillo, y lo era, pero no era eficiente.

![Flujo](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/Flujo.png)

Nos percatamos que eran demasiados HTML's y muchos botones, no era nada práctico y era un poco tedioso.

Esta segunda idea, se nos hizo más viable.

![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/img_20180624_110803_1024.jpg "Sketch")
![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/img_20180624_110803.jpg "Sketch1")
![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/img_20180624_110814.jpg "Sketch2")

Aquí dejo imágenes de lo que podria ser nuestra ultima versión, habra ajustes según se vayan presentando las necesidades de nuestro usuario, pero tomando en cuenta también las limitaciones de nuestro dead line.

Se agregó una página de log in, pues para el usuario es importante la seguridad de los datos que manejara.

Se trató de optimizar para esta entrega la data bien organizada y especifica, así no sería dificil de leer y se enfocará en la necesidad principal del usuario. Los resultados que arrojaron las entrevistas son que, es importante tener principalmente el avance general de la generación en formato de porcentaje y posteriormente un porcentaje personal por alumna, uno geneal y uno de cada tema del LMS, junto con los datos generales de la alumna.

![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/LogInPage.png "Sketch")
![sketch](https://github.com/MiriamGaGu/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/src/Images/MainPage.png "Sketch")
