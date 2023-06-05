
  class App{
    constructor(){

    }
    init(){
        // initialize the app by creating instance of Shop class and calling the render method of the Shop class
        const shop = new Shop();
        shop.render();

    }
    addProductToCart(){
        // add the product to the cart by calling the addToCart method of Cart class
    }
  };

  const app = new App();
  app.init();