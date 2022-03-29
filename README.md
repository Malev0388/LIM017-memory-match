# Memory Match Game

## 1. Preámbulo

El juego [_Memory Match_](https://en.wikipedia.org/wiki/Concentration_(card_game)),
también conocido como _Concentration_, _Match Match_, _Match Up_, _Memory_,
entre otros, es un juego de cartas en el que todas las cartas se ponen cara
abajo sobre una superficie y se le dan la vuelta a dos cartas en cada turno. El
objetivo del juego es destapar parejas de cartas que coincidan.

![Concentration (card game)](https://user-images.githubusercontent.com/110297/135919005-66aefadb-c462-49e2-bf10-2374f2e47688.png)

_Imagen tomada de [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game))_.

Ejemplos:

* [Santa Tracker de Google](https://santatracker.google.com/matching.html)
* [Match The Memory](https://matchthememory.com/play)

## 2. Resumen del proyecto

En este proyecto construirás una versión _web_ del juego _Memory Match_, en la
que una jugadora pueda jugar sola, en el navegador.

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web basada en data e interacción con la usuaria.

## Definición del Producto
#### Proceso del Diseño:
Para poder hacer nuestro proyecto, como dupla tuvimos que opinar y tomar desiciones de mutuo acuerdo.
Lo primero que hicimos fue organizarnos para realizar nuestro prototipado:
- Ordenamos nuestras ideas mediante la plataforma de **TRELLO**.
- Realizamos nuestras historias de **USUARIO**, para así saber qué puntos priorizar.
- Realizamos nuestro primer **PROTOTIPO DE BAJA FIDELIDAD**, plasmando las necesidades de nuestros usuarios.
- Mostramos a los usuarios el **PROTOTIPO DE BAJA FIDELIDAD** para corroborar si era de su agrado.
- Por último, realizamos nuestro **PROTOTIPO DE ALTA FIDELIDAD** en la plataforma **FIGMA**, basándonos es nuestras historias de usuarios.

#### Solución del Problema del Usuario:
Al realizar nuestra **ENCUESTA**, nos dimos cuenta que los usuarios tenian muchas **IDEAS** que aportar en el **JUEGO DE CARTAS**, siendo "el sonido" lo que resaltó entre estas. Podemos concluir indicando que, logramos el objetivo de nuestro proyecto **IMPLEMENTANDO** soluciones ante las necesidades requeridas en nuestras **HISTORIAS DE USUARIO**.

## Historia de Usuario
 **USER 1:**
 - **Como:**   "Jugador".
 - **Quiero:** "Que tenga tiempo".
 - **Para:** "Saber cuánto me toma terminarlo".
 ****
 - **Como:** "Jugador".
 - **Quiero:** "Que se muestre de alguna forma cuándo gane".
 - **Para:**  "Sentirme bien por mi logro".
  ****
 - **Como:** "Jugador".
 - **Quiero:** "Que tenga un sonido predeterminado".
 - **Para:**  "Sentirme acompañado".
  ****
 - **Como:** "Jugador".
 - **Quiero:** "Un color de fondo".
 - **Para:**  "Apreciar mejor las cartas".
  ****
 - **Como:** "Jugador".
 - **Quiero:** "Poder subir una imagen".
 - **Para:**  "Ser más personalizada la experiencia".
  ****
 - **Como:** "Jugador".
 - **Quiero:** "Poder ingresar un seudónimo".
 - **Para:**  "Ser la experiencia más personalizada".

**USER 2**
 - **Como:** "Usuario de juego en línea".
 - **Quiero:** "Un botón de inicio".
 - **Para:**  "Para regresar al home".
 ****
 - **Como:** "Usuario de juego en línea.
 - **Quiero:** "Un botón de resetear".
 - **Para:**  "Para volver al inicio del juego".
 ****
 - **Como:** "Usuario de juego en línea".
 - **Quiero:** "Que la música tenga importancia".
 - **Para:**  "Tener más emoción al jugar".
 ****
 - **Como:** "Usuario de jugador en línea".
 - **Quiero:** "Ingresar nombre de usuario".
 - **Para:**  "Ver mi puntaje".
 ****
 - **Como:** "Usuario de juego en línea".
 - **Quiero:** "Que el juego me avise cuando gane".
 - **Para:**  "Emocionarme y seguir jugando".
 ****
 - **Como:** "Usuario de juego en línea".
 - **Quiero:** "Que el juego tenga sonido opcional".
 - **Para:**  "Que cuando me aburra pueda mutearlo".
 ****
 - **Como:** "Usuario de juego en línea".
 - **Quiero:** "Que el juego sea responsive".
 - **Para:**  "Jugar desde pc o movil".

## Diseño de la Interfaz de Usuario
#### Prototipo de Baja Fidelidad:
![Boceto a lapiz_1](https://user-images.githubusercontent.com/74880454/160026368-1b8d7194-baa8-4d8c-8f37-c03d088e15c0.jpeg)
![Boceto a lapiz_2](https://user-images.githubusercontent.com/74880454/160026391-5ef0302f-aa2b-4c9d-9fbc-c22010cc70ff.jpeg)
#### Prototipo de Alta Fidelidad:
![1  Pantalla bienvenida](https://user-images.githubusercontent.com/74880454/160026540-b643b293-8bb4-49ed-8350-d142e177b62b.jpg)
![2  Pantalla inicio de sesión](https://user-images.githubusercontent.com/74880454/160026547-0e887d50-9e70-467b-a03d-b8daf409883e.jpg)
![3  Pantalla inicio de sesión_elección de foto o avatar](https://user-images.githubusercontent.com/74880454/160026552-94467882-f06d-443c-ab61-b89586f9eabd.jpg)
![4  Pantalla inicio de sesión_foto y seudónimo](https://user-images.githubusercontent.com/74880454/160026554-a49bb44f-42d0-434f-b28e-0e049221653b.jpg)
![5  Juego de cartas](https://user-images.githubusercontent.com/74880454/160026556-fc3b2fc6-97a7-4942-b7ee-480b0d84834d.png)
![6  Juego cartas_GANASTE](https://user-images.githubusercontent.com/74880454/160026560-99fadcc6-8219-45c3-9a45-acc42fcce70b.png)
![7  Juego cartas_UPS INTENTALO DE NUEVO](https://user-images.githubusercontent.com/74880454/160026567-55343858-afb0-4c29-ba57-7dfc9692ceae.png)

## Lista de Problemas Detectado por los Test
Nos detectó un error en la línea 36 del archivo gameCartasFuction.js

      34 |         count++;
      35 |         if (count === 1) {
    > 36 |             primeraCarta = clicked.parentElement.dataset.id;
         |                                    ^
      37 |             clicked.parentElement.classList.add('selected');
      38 |             //empieza el contador
      39 |             if (minutos === 0 && segundos === 0) {


El cuadro de % del Testeo nos muestra los siguientes valores:

------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |   31.08 |     7.14 |   14.28 |   31.08 |                   
 components             |     100 |      100 |     100 |     100 |                   
  App.js                |     100 |      100 |     100 |     100 |                   
 js                     |      25 |     7.14 |    7.69 |      25 |                   
  gameCartasFunction.js |      25 |     7.14 |    7.69 |      25 | 37-161            
------------------------|---------|----------|---------|---------|-------------------

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        2.526 s

## Plan de Acción
#### Objetivos de Aprendizaje priorizados
Nuestra prioridad era realizar las siguientes tareas, enfocándonos en nuestro **aprendizaje**:
- Mostrar en la pantalla la **DATA**
- Realizar la función **MATCH**
- Usar **CONCAT**
- Subir una **IMAGEN** desde el escritorio
- Realizar el **DEGRADADO** del fondo de pantalla con CSS
- Usar más **CSS**
- **RESETEAR** el juego

## **DEMO DEL PRODUCTO FINAL PC**
![1  Pantalla de bienvenida_DESKTOP](https://user-images.githubusercontent.com/74880454/160026849-560810e3-166c-4456-91e5-ef0b914f9d8b.png)
![2  Pantalla de ingreso de usuario_DESKTOP](https://user-images.githubusercontent.com/74880454/160026915-58e69e66-cc69-4c11-8f9d-5e4288984178.png)
![3  Pantalla de ingreso_elección de foto_DESKTOP](https://user-images.githubusercontent.com/74880454/160026954-48b795d1-5837-42b0-ba1a-20479d630c52.png)
![4  Pantalla de juego_Alerta Bienvenida_DESKTOP](https://user-images.githubusercontent.com/74880454/160026968-bc095c3d-efe9-43ac-94b0-627e2bf2bdce.png)

https://user-images.githubusercontent.com/74880454/160027008-2de32a66-ecc1-403a-ad21-b4c25a3b0052.mp4

https://user-images.githubusercontent.com/74880454/160027044-cea4ab32-7a08-4eaf-a2a0-57d381f356b0.mp4

## **DEMO DEL PRODUCTO FINAL RESPONSIVE**
![5  Pantalla_juego de cartas_RESPONSIVE](https://user-images.githubusercontent.com/74880454/160027121-37788117-bbaf-48e0-9750-cb6f4ab95c61.png)
