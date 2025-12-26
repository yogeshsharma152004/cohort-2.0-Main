//=>Question :Create a product object tha stores name and price and has a method which returns the final price after disocunt

let product ={
    name : "hat",
    price:2100,
    discount: function(){
        return this.price - 150
    }
}
console.log(product.discount())