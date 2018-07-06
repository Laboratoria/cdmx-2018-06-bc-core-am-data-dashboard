# Data Dashboard

Las TMs de Laboratoria necesitan usar la data de las estudiantes lo más eficientemente posible, pues de ello depende
su progreso en el bootcamp. Los recursos que se les han compartido son una parte importante para que puedan desarrollar
los sprints, este recurso lo conocen como LMS (Learning Management System).

A pesar de ser un gran recurso, muchas de las alumnas lo perciben como una tarea más a realizar, esto a llevado a que
algunas alumnas lo posterguen. No sabemos qué porcentaje de ellas lo han usado y que tanto han realizado.

Tener presente toda esta documentación es importante para ver qué magnitud de un problema habrá que afrontar o si es necesario un cambio
en el método de aprendizaje.


## UX Research

Para saber los requerimiento que se tendrán que cubrir para l@s TMs,  y  que tengan una visualización general y personal del progreso en cada una las alumnas, es necesario
tener una buena base de datos y una organización eficiente de ella.

Para ello implementaremos un cuestionario a la TMs de la sede de CDMX y algunos de los coaches.

Conforme a esto haremos nuestro primer sketch tratando de cubrir las necesidades con mayor importancia. Será una interfaz fluida y limpia. También se llevaron a cabo 2 entrevistas más, una videollamada y una presencial.


[Cuestionario del squad](https://goo.gl/forms/BXgYeoIpGxjYeaWF3)

[Entrevist de  Estef Y Josc](https://drive.google.com/open?id=1ycNiDHLAAmdJVMujJPte19xgeIQGglg7)

[Audio de entrevista de Florencia](https://drive.google.com/open?id=1RE-8SneGCdT9xByVd7m3r2tfd7xFTUhL)

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
