// day 10 Array  card system 

const addItem = (item) => {
      cart.push(item)
      console.log(cart)
        
}
const removeLastItem = ()=>{
    cart.pop
    console.log(cart)

}
const showCart = ()=>{
    return console.log(cart)
}



const cart = [];
addItem("laptop")
addItem("Mouse")
addItem("Keywoard")