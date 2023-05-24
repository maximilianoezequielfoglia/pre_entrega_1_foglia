// variable con entrada para acceder a la compra
let eleccion = prompt(
  "Hola!! Bienvenid@!!\nGracias por acceder a nuestra tienda!\nDeseas adquirir alguna prenda?\ns-sí."
);
// variable para calcular montos de compra
let total = 0;
// ciclo para iniciar la compra
while (eleccion.toLocaleLowerCase() == "s") {
  let prenda = parseInt(
    prompt(
      "1-CALZA BLACK > $9.850\n-Calza de tiro alto.\n-Lycra super flex.\n-Alta compresión.\n-Talles del 1 al 6.\n\n2-BIKER PINK > $6.980\n-Biker de algodón.\n-Tiro alto.\n-Algodón super soft.\n-Talles del 1 al 6.\n\n3-HOODIE VIOLET > $17.430\n-Super comodo.\n-Unisex.\n-Frizado.\n-Talles del XS al XL.\n\n4-REMERA CAMO > $6.200\n-Tela Dry Fit.\n-Varios colores.\n-Secado rapido.\n-Talles del XS al XL."
    )
  );
  switch (prenda) {
    case 1:
      alert("CALZA BLACK > $9.850 ingresó al carrito!");
      totalCompra(9850);
      break;
    case 2:
      alert("BIKER PINK > $6.980 ingresó al carrito!");
      totalCompra(6980);
      break;
    case 3:
      alert("HOODIE VIOLET > $17.430 ingresó al carrito!");
      totalCompra(17430);
      break;
    case 4:
      alert("REMERA CAMO > $6.200 ingresó al carrito!");
      totalCompra(6200);
      break;
    default:
      alert("Prenda inexistente.");
      break;
  }
  eleccion = prompt("Deseas adquirir alguna otra prenda?\ns-sí.");
}
// salida por alert para conocer el monto de la compra
alert("El monto total de tu compra es de: $" + total);
alert("Gracias por elegirnos!\nTe esperamos nuevamente!");
// funcion para calcular la suma de las prendas elegidas
function totalCompra(precio) {
  total = total + precio;
  alert("El monto de tu compra es de: $" + total);
}
