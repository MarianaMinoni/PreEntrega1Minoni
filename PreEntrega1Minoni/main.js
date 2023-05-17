

//Carrito tienda de ropa


let menu = "Ingrese la opción deseada\n\n1 - para ver prendas\n2 - para ver el total\n3 - para finalizar compra\n0 - para salir"
let listaArticulos = "Seleccione un artículo para agregar al carrito\n \n 1- Pantalon $500 \n 2- Musculosa $180 \n 3- Remera $220 \n 4- Zapatillas $2000 \n 5- Buzo $500\n 6- Medias $100 \n 7- Campera $2500\n  0- para volver atrás"



let opcion
let total = 0
do {
  opcion = pedirOpcion(menu)
  switch (opcion) {
    case 1:
      let producto = pedirOpcion(listaArticulos)
      switch (producto) {
        case 1:
          total = total + 500
          break
        case 2:
          total = total + 180
          break
        case 3:
          total = total + 220
          break
        case 4:
          total = total + 2000
          break
        case 5:
          total = total + 500
          break
        case 6:
          total = total + 100
          break
        case 7:
          total = total + 2500
          break
        case 0:
          break
        default:
          break
      }
      break
    case 2:
      alert("El total a pagar es: $" + total)
      break
    case 3:
      alert("Gracias por su compra")
      total = 0
      break
      case 0:
        alert("Gracias por su visita")
        break
    default:
      alert("Ingrese una opción correcta")
      break
  }
} while (opcion !== 0 && opcion !== 3)

function pedirOpcion(mensaje) {
  return Number(prompt(mensaje))
} 