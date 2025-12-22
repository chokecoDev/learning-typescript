/**
3️⃣ Tipos union

Crea una función que reciba un parámetro:

* string | number
* Si es string, devuelve su longitud
* Si es number, devuelve el doble
 */

const funnyFunction = (param1: string | number) => typeof param1 == "string" ? param1.length : param1 * 2

console.log(funnyFunction("Juan")) // Devuelve 4
console.log(funnyFunction(18)) // Devuelve 36