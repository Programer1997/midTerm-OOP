class Product {
    constructor(id,title,price,description, image){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;

    }

    printElements(){
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
        console.log(this.description);
        console.log(this.image);
    }
};


const item = new Product("15132","Camisa",10.95,"Hermosa playera de verano", "URL");

//item.printElements();
//console.log(item);

