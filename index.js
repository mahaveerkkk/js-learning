// day 10 Array  card system 


// const addItem = (item) => {
//       cart.push(item)
//       console.log(cart)
        
// }
// const removeLastItem = ()=>{
//     cart.pop()  
//     console.log(cart)

// }
// const showCart = ()=>{
    
//     console.log("=====================")
//     console.log("Shoping Cart")
//     console.log("=====================")
//     for(let x=0; x<cart.length;x++){
//         console.log(x+1,".",cart[x])

//     }
//     console.log("Total Items :",cart.length)
// }



// const cart = [];
// addItem("laptop")
// addItem("Mouse")
// addItem("Keywoard")
// showCart()

// we are learn new feature list new fuction like forEach , find,map ,filter

let arr = ["rahul","madhu",54,65,94,{name:"mahaveer",agr:21},{name:"payal", age:20}]
let data =arr.forEach((Val)=>{
    console.log(Val)
})
//map
let newarr= arr.map((dat)=>{
    if (dat %2==0){
        return dat**2
    }

})
console.log(newarr)

//filter
let fil = arr.filter((v)=>{
    if (v.name=="mahaveer"){
        return v
    }

})
console.log(fil)
console.log()
// const fin= arr.find((a)=>{
//     a.age===20

// })
// console.log(fin)