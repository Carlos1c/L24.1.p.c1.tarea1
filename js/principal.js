/*
* Para un espectáculo de circo se tiene 3 tipos de entrada: niños (hasta 12 años), adolecentes (hasta 18) y 
* adultos (moyores de 18, respectivamente), el precio de la entrada general es de 15$. Por cada espectador
* se tiene: nombre, edad y sexo. Además, se sabe que si el espectador es niño o adolecente obtiene un 
* descuento del 10%. Se requiere mostrar: 
* a) Precio Cancelado por cada espectador.
* b) Promedio de las Ventas hechas a espectadores adolecentes.
* c) Entre niños y adolecentes cuál asistió más al circo.
* d) Porcentaje que representa la cantidad de niños que asistieron al circo con respecto al total 
*    de espectadores procesados.
* El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre, edad, sexo)
* (Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M)
*/

import CL_espectador from "./CL_espectador.js";
import CL_espectaculo from "./CL_espectaculo.js";

let espect1 = new CL_espectador("Ana", 8, "F");
let espect2 = new CL_espectador("Luis", 15, "M");
let espect3 = new CL_espectador("Valeria", 12, "F");
let espect4 = new CL_espectador("Fabian", 21, "M");
let espectaculo = new CL_espectaculo();

espectaculo.procesarEspecta(espect1);
espectaculo.procesarEspecta(espect2);
espectaculo.procesarEspecta(espect3);
espectaculo.procesarEspecta(espect4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> El espectador Ana debe canselar: ${espectaculo.precioCancelar(espect1)}$
<br> El espectador Luis debe canselar: ${espectaculo.precioCancelar(espect2)}$
<br> El espectador Valeria debe canselar: ${espectaculo.precioCancelar(espect3)}$
<br> El espectador Fabian debe cancelar: ${espectaculo.precioCancelar(espect4)}$
<br> Promedio de las Ventas hechas a espectadores adolecentes: ${espectaculo.promedioAdole()}
<br> Entre niños y adolecentes el espectador que asistio mas el circo fue: ${espectaculo.porcentajeAsisMayor()}
<br> Porcentaje que representa la cantidad de niños que aistieron al Circo: ${espectaculo.porcentajeAsisNinio()}%
`