/**
2️⃣ Funciones tipadas

Crea funciones para:

* Sumar dos números
* Retornar un saludo con un nombre
* Retornar void (ej. imprimir en consola)

Restricción: ninguna función debe usar any.
 */

const sumaNumeros: (a: number, b: number) => number = (a, b) => a + b
console.log(sumaNumeros(20, 37))

const saludo = (nombre: string): string => `Hola ${nombre}!`
console.log(saludo("Amanda"))

function impresion(): void {
  console.log("Esta función no retorna nada")
}
impresion()