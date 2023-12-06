// Array iniciado para simular una base de datos de Productos
let producto = [
    { id: 1, item: 'Pantalon', precio: 500 },
    { id: 2, item: 'Remera', precio: 200 },
    { id: 3, item: 'Zapatilla', precio: 700}
  ];

  // Función para mostrar datos
  function mostrar(total) {
    if(total > 0 && total != null){
      window.alert(JSON.stringify(producto) + "\n\n Total: $" + total);
    } else {
      console.log('Data:', producto);
      window.alert(JSON.stringify(producto));
    }
    
  }

  // Función para crear un nuevo elemento
  function nuevoItem() {
    var nuevoItemNombre = prompt("Por favor, ingrese nombre de nuevo item:");
    var nuevoItemPrecio = prompt("Por favor, ingrese precio del nuevo item:");
    const nuevoItem = { id: producto.length + 1, item: nuevoItemNombre, precio: parseInt(nuevoItemPrecio)};
    producto.push(nuevoItem);
    mostrar();
  }

  // Función para leer todos los elementos
  function verCarrito() {
    mostrar();
  }

  // Función para actualizar un elemento (item y precio)
  function actualizarItem() {
    if (producto.length > 0) {
      var idItem = prompt("Por favor, ingrese el id del producto a actualizar:");
      let productoBuscado = null;
      let productoBuscadoIndex = null;
      for (let i = 0; i < producto.length; i++) {
        if (producto[i].id == idItem) {
          productoBuscado = producto[i];
          productoBuscadoIndex = 1
          break;  // Detener el bucle una vez que se encuentra el producto
        }
      }
      if (productoBuscado != null) {
        var respuesta = confirm("Encontre el producto !! \n" +  JSON.stringify(productoBuscado) + "\n¿Quieres actualizarlo?");
        if (respuesta) {
          var nuevoNombre = prompt("Por favor, ingrese el nuevo precio:");
          var nuevoPrecio = prompt("Por favor, ingrese el nuevo precio:");
          const actualizarItem = producto[productoBuscadoIndex];
          actualizarItem.item = nuevoNombre;
          actualizarItem.precio = parseInt(nuevoPrecio);
          mostrar();
        } else {
          console.log("El usuario seleccionó 'No' o cerró la ventana emergente.");
        }
      } else {
        window.alert("Lo siento no encontre el producto :(");
      }

    } else {
      console.log('La Lista de Productos esta vacia!!');
    }
  }

  // Función para eliminar el ultimo elemento segun si Id de item
  function eliminarItem() {
    if (producto.length > 0) {
      var idItem = prompt("Por favor, ingrese el id del producto a eliminar:");
      let productoBuscado = null;
      let productoBuscadoIndex = null;
      for (let i = 0; i < producto.length; i++) {

        if (producto[i].id == idItem) {
          productoBuscado = producto[i];
          productoBuscadoIndex = 1
          break;  // Detener el bucle una vez que se encuentra el producto
        }

      }

      if (productoBuscado != null) {
        var respuesta = confirm("Encontre el producto !! \n" +  JSON.stringify(productoBuscado) + "\n¿Quieres eliminarlo?");
        
        if (respuesta) {
          producto.splice(productoBuscadoIndex, 1);
          window.alert("Producto eliminado correctamente" );
          mostrar();
        } else {
          console.log("El usuario seleccionó 'No' o cerró la ventana emergente.");
        }

      } else {
        window.alert("Lo siento no encontre el producto :(");
      }

    } else {
      console.log('La Lista de productos esta vacia!!');
    }

  }

  // Función finalizar carrito que muestra el total de precios cargados en el array de productos
  function finalizarCarrito(){
    var total = 0;
    for (let i = 0; i < producto.length; i++) {

      total = total + producto[i].precio;

    }
    mostrar(total);
  }