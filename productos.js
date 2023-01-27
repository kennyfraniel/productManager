class ProductManager {
    #productos

    constructor () {
       this.#productos = []
    }

    getProducts () {
        return this.#productos;
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
        if (this.#productos.length === 0) {
            producto.id = 1;
        } else {
            producto.id = this.#productos[this.#productos.length -1].id +1;
        }
        this.#productos.push(evento);
    }



}




