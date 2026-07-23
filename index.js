//day 7 aairo fuction
const hello = (name) =>{
    return "hello " + name;

}
const squr =(num)=>{
    return num*num;
}
const factorial = (num) =>{
    if(num === 0 || num === 1){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}
console.log(hello("aairo"));
console.log(squr(5));
console.log(factorial(65));