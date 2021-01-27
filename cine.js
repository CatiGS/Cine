/*
  TAREA:

- Con "prompt", pedir las credenciales
- Y si la persona que va a comprar la entrada, no esta vacuna, se le dice amablemente que no puede comprar la entrada
- Y si, esta vacuna se le dice que esta autorizada para comprar la entrada
- La respuesta que se le da al cliente, que salga por la consola del navegador

 */

let nombre = String(prompt("Escribe el nombre:"))
let vacuna = String(prompt("¿Estas vacunado / a (S/N)?"))
if (vacuna === 'S')
    console.log(`${nombre} estás autorizado/a para comprar la entrada de cine`)
    // método para iniciar la compra
else
    console.log(`${nombre}, si no estás vacunado/a no puedes comprar la entrada de cine`)