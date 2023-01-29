class ProductManager {
    productos

    constructor () {
       this.productos = []
    }

    getProducts () {
        return this.productos;
    }

    addProduct (title, description, price, thumbnail, code, stock){
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        if (this.productos.length === 0) {
          producto.id = 1;
        } else {
          producto.id = this.productos.length + 1;
        }
        if 
          (this.productos.find ((e) => e.code === code)) {
            return console.error ("El código está repetido!");
          }
          this.productos.push(producto);
        }
        
  
    getProductById(productoId) {
        const buscarProducto = this.productos.find(
          (producto) => producto.id === productoId
        );
        if (!buscarProducto) {
          console.error("Producto no encontrado");
        } else {
          console.log(buscarProducto);
        }
      }

    }

 //pruebas

const pm = new ProductManager ();
pm.addProduct (
  "Producto X",
  "Descripición X",
  100,
  "Imagen X",
  "X1",
  10,
);

pm.addProduct(
  "Producto Y",
  "Descripción Y",
  200,
  "Imagen Y",
  "Y1",
  20,
);

console.log(pm.getProducts());
pm.getProductById(1);
pm.getProductById(2);