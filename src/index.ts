/**
5️⃣ Arrays de objetos

Crea un array de usuarios tipados.

Implementa funciones para:
* Obtener solo usuarios activos
* Buscar usuario por id
* Contar usuarios
*/

type User = {
  id: number,
  username: string,
  isActive: boolean
}

const usuarios: User[] = [
  { id: 1, username: "maria", isActive: false },
  { id: 2, username: "amanda", isActive: true },
  { id: 3, username: "jesus", isActive: true },
]

// Obtener solo usuarios activos
function activeUsers(users: User[]): string[] {
  let activos: string[] = []
  for (const user of users) {
    if (user.isActive) {
      activos.push(user.username)
    }
  }
  return activos
}

console.log(activeUsers(usuarios))
// Respuesta: [ 'amanda', 'jesus' ]

// Buscar usuario por id
function searchByID(users: User[], id: number): string {
  for (const user of users) {
    if (user.id === id) {
      return user.username
    }
  }
  return "No se encontró usuario"
}

console.log(searchByID(usuarios, 3))
// Respuesta: jesus

// Contar usuarios
function countUsers(users: User[]): number {
  return users.length
}

console.log(countUsers(usuarios))
// Respuesta: 3