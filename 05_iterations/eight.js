//Reduce Method 

const myNums=[1,2,3,4,5,6]
// const initialValue=0; //--If you don't want to make variable for initial value , you can use it directly in reduce method  
const Sum= myNums.reduce((accumulator,currentValue)=>accumulator+currentValue,0); 

console.log(Sum);



//LET'S TAKE ANOTHER EXAMPLE
const shoppingCart=[
    {
        itemName:"Js course",
        price:999
    },
     {
        itemName:"py course",
        price:5999
    },
     {
        itemName:"data science course",
        price:12999
    },
]
//Now you want to add all the price of the items in the shopping cart

const priceToPay= shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(priceToPay);


