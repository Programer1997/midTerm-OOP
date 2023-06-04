const apiFake = "https://fakestoreapi.com/products";
const searchButton = document.querySelector('#searcherButton');
const searchInput = document.querySelector('#searcherInput');
let quatityProducts = 20;

//Cart 
var cart = [];

class ProductList {
    constructor(){
        this.products = [];
    }
    fetchProducts(){

        fetch('https://fakestoreapi.com/products' +
        `?limit=${quatityProducts}`
        )
        .then(res => res.json())
        .then(data => {
            this.products=data;
            console.log(this.products);
        })
        
    }
    render(){
        // render the products by looping through the products array and create a new ProductItem instance for each product. Use render method of ProductItem class to get each product element and append it to the `<ul>`.
        const productsPage = document.querySelector('#productList');
        let card = "";
        

        this.products.forEach((element,index,array) => {
            //console.log(element);
            //console.log(index);
            //console.log(array);
            const sendItem = new ProductItem(element); //send each element to the other class called "ProductItem"
            //sendItem.render();
            card+=sendItem.render();
        }
        );  //read every element, after save each object inside to variable and send to CLASS produdctItem.js
        //console.log(this.products);
        productsPage.innerHTML = card;

        const addCarButton = document.querySelectorAll('.addCart');
        addCarButton.forEach((button,index)=>{
            button.addEventListener('click',()=>{
                //console.log(index);
                this.addProductToCart(this.products[index]); //i send the information of element selected

                const showCart = new ProductItem (); 
                showCart.addToCart(cart);
                
            });
        });
    }
    addProductToCart (product){
        if (cart[product.id]){

            cart[product.id].quantify++;
    
        }else {
    
       cart[product.id] = {
        img : product.image,
        name : product.title,
        price : product.price,
        quantify : 1,
        id : product.id
       };
     }

    }
}
const listOfProducts = new ProductList();

listOfProducts.fetchProducts();
setTimeout(()=>{
    listOfProducts.render();
},500);


searchButton.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(cart);
    if(!searchInput.value){
        alert('the value you are looking for is no valid, try with a number 0 to 20');
    }else {
        quatityProducts = searchInput.value;
        listOfProducts.fetchProducts();
        setTimeout(()=>{
            listOfProducts.render();
        },500);
    }
}
);





