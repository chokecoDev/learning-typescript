/**
4️⃣ Type vs Interface

Modela una entidad User con:

* id
* name
* email
* isActive (opcional)

Crea:
* una versión con type
* otra con interface
*/

type UserType = {
  id: number,
  name: string,
  email: string,
  isActive?: boolean
}

interface UserInterface {
  id: number,
  name: string,
  email: string,
  isActive?: boolean
}