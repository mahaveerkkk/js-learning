// day 10 Array  card system 


const addItem = (item) => {
      cart.push(item)
      console.log(cart)
        
}
const removeLastItem = ()=>{
    cart.pop()  
    console.log(cart)

}
const showCart = ()=>{
    
    console.log("=====================")
    console.log("Shoping Cart")
    console.log("=====================")
    for(let x=0; x<cart.length;x++){
        console.log(x+1,".",cart[x])

    }
    console.log("Total Items :",cart.length)
}



const cart = [];
addItem("laptop")
addItem("Mouse")
addItem("Keywoard")
showCart()