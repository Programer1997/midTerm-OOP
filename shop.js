

class Shop {
    constructor(){
        this.listOfProducts = new ProductList();

    }
    render(){
        this.listOfProducts.fetchProducts();
        setTimeout(()=>{
            this.listOfProducts.render();
        },1000);

    }
}