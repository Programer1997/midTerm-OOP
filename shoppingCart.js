
  class ShoppingCart{
    constructor(cart){
        this.items = cart; //Array of cart
        this.total = 0;

    }
    getTotal(){
        // calculate the total price of the items in the cart
        let totalItem = 0;
        this.items.forEach((product)=>{

            if (product.length!==0) {
            totalItem = product.price*product.quantify;
            this.total = this.total + totalItem; 
            }
        });
        return this.total.toFixed(2) + " $";
    }
    render(){
        // render the total and a button `order now` in a `<section>` element

    }
  }