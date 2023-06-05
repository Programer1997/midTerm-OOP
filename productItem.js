class ProductItem {
    constructor(product){
        this.product = product; //empty object for now  //instance of product class

    }
    addToCart(cart){
        const cartContainer = document.querySelector('#containerCart');
        let card = "";
        cart.forEach((element) => {

            if(element.length !==0){ 
            let priceQtyItem = element.quantify*element.price;
            
            card+= `
            <div class="carItemIndividual">
                <img src = "${element.img}"/>
                <h4>${element.name.slice(0,12)+ "..."}</h4>
                <p>Qty : ${element.quantify}</p>
                <h3>${priceQtyItem + " $"}</h3>
                <button id = "buttonRemove" value="${element.id}"><i class="fa-solid fa-trash"></i></button>
            </div>`;
            }
        });
        cartContainer.innerHTML = card;
    
    }
    render(){
        // return the product element with the product data (<li>)
        return `
        <div class="item">
        <img src="${this.product.image}"/>
        <div class="item--info">

            <h2>${this.product.title}</h2>
            <p>Description : ${this.product.description.slice(0,50) + '....'}</p>
            <p class="rating"><span>${this.product.rating.rate}</span> <img src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-3-16006.png?f=avif&w=256" /> <span> Users : ${this.product.rating.count}</span></p>
            <h3>Price : ${this.product.price} $ </h3>
            <h4>Category : ${this.product.category}</h4>
                    
        </div>

        <button class="addCart" >Add to Cart</button>
        </div>`


    }
}

//console.log(item); //from other File ("produc.js")