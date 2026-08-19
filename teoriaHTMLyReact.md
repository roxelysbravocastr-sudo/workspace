1) HTML
¿Cuales son las etiquetas de estructura de un HTML?

 <!DOCTYPE HTML>: Define el tipo de documento y la versión de HTML.
<HTML> Encierra todo el código en la pagina :) </HTML>
<head>:  Guarda los datos ocultos, títulos y enlaces a estilos.
<body>: Contiene todo el contenido visible para el usuario.
<header>: zona superior o cabecera con títulos y menús
<main>: Zona central con el contenido principal y único.
<div>:Contenedor genérico para agrupar elementos y darles diseño.

¿cuales son las etiquetas de estructura de un html?

Las etiquetas de estructura básica y semántica en HTML organizan una página web. Las principales son
<!DOCTYPE>, <html>, <head>, <body>
  junto a etiquetas de diseño visual como: <header>, <nav>, <main>, <section>, <article>, <aside> y <footer>

  ¿Cuales son las etiquetas para agregar codigo?
  
<html>: indica que el documento es HTML.
<head>: contiene información sobre la página, como el título y estilos.
<body>: contiene lo que se muestra en la página.
<script> : permite agregar JavaScript.
<style>: permite agregar CSS directamente en HTML.
<code>: representa un fragmento de código dentro del contenido

explicar 5 etiquetas para texto 
<h1> TITULO RPINCIPAL 
 se utiliza para el titulo principal y el mas importante de una pagina 
  <h2> se utiliza para un subtitulo
   <i> texto en cursiva 
   <strong> : texto importante, normalmente en negrita.
<em>: texto enfatizado, normalmente en cursiva.

2. JavaScript
¿Cómo funcionan las variables, tipos de variables, constantes y globales?

Las variables sirven para guardar información que puede cambiar durante la ejecución del programa.

Existen principalmente:

let: permite cambiar el valor.
const: guarda un valor que no se puede reasignar.
var: forma antigua de declarar variables.

Los principales tipos de datos son:

String: texto.
Number: números.
Boolean: verdadero o falso.
Array: lista de datos.
Object: conjunto de propiedades y valores.
null: ausencia intencional de valor.
undefined: valor que todavía no ha sido definido.

Las constantes se declaran con const y no pueden recibir otro valor después de ser declaradas.

Las variables globales pueden ser utilizadas desde diferentes partes del programa, dependiendo de dónde hayan sido declaradas.

Estructuras de flujo

Las estructuras de flujo permiten controlar qué instrucciones se ejecutan.

Condicionales: permiten tomar decisiones.
if: ejecuta una acción si se cumple una condición.
else: ejecuta otra acción cuando la condición no se cumple.
else if: permite evaluar varias condiciones.
switch: permite elegir entre diferentes casos.
Bucles: repiten instrucciones.
for: repite una acción un número determinado de veces.
while: repite mientras una condición sea verdadera.

3. CSS
¿Qué son los selectores CSS?

Los selectores indican qué elementos HTML queremos modificar con CSS.

Los principales son:

Selector de etiqueta: selecciona elementos por su nombre.
Selector de clase: selecciona elementos que tienen una clase.
Selector de ID: selecciona un elemento mediante su identificador.
Selector universal: selecciona todos los elementos.
Selector de atributo: selecciona elementos que tienen un determinado atributo.
Selector descendiente: selecciona elementos que están dentro de otro elemento.
¿Cómo modifican los elementos?

CSS modifica la apariencia de los elementos mediante propiedades y valores.

Se pueden modificar características como:

Color.
Tamaño.
Tipo de letra.
Fondo.
Márgenes.
Espaciado.
Bordes.
Ancho y alto.
Posición.
Distribución de los elementos.

4. React
Analogía entre un componente de React y una etiqueta HTML

Un componente de React es una parte reutilizable de una interfaz.
Se puede entender como una etiqueta HTML personalizada que contiene
su propia estructura y comportamiento.
HTML = piezas que ya vienen fabricadas.
React = puedes crear tus propias piezas y usarlas como si fueran etiquetas HTML, la diferencia es que un componente de React
puede tener lógica, datos, eventos y estado, no solamente estructura HTML.

¿Cómo funcionan los props en React?

Los props son datos que un componente recibe desde otro componente, Sirven para pasar información de un componente
padre a un componente hijo.
Los props son de solo lectura, por lo que el componente que los recibe no debe modificarlos directamente.

¿Cómo y cuándo se usa useEffect?

useEffect es un Hook de React que permite ejecutar acciones después de que un componente se muestra.
Se utiliza para tareas que tienen efectos externos al mostrar, como:

Consultar información.
Trabajar con APIs.
Actualizar información externa.
Ejecutar una acción cuando cambia un dato.
¿Cómo se usa useState para las variables de un componente?

useState permite crear y controlar datos que pueden cambiar dentro de un componente.

Cuando el valor cambia mediante la función de actualización de useState, React vuelve a renderizar el componente para mostrar
el nuevo estado.
