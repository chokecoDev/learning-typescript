/**
 *  1️⃣ Tipos primitivos
 * 
 * Crea variables tipadas explícitamente para:
 * string
 * number
 * boolean
 * array de números
 * tupla con [string, number]
 * 
 * Extra: intenta reasignar un tipo incorrecto y observa el error del compilador.
 */

let nombre: string
nombre = "Ana"
console.log(nombre)

let edad: number
let esMayor: boolean
let celulares: number[]
let trabajo_experiencia: [string, number]

/**
 * Dará error
 * edad = "Veinte"
 * Type 'string' is not assignable to type 'number'.
*/