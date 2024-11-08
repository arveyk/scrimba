type Pizza = {
  name: string,
  price: number
}
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister: number = 100;
let orderId: number = 0;
const orderQueue = [];

function addNewPizza(pizzaObj: Pizza
    menu.push(pizzaObj);
}

function placeOrder(pizza: string
    let selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizza);
    if (!selectedPizza) {
	    console.error(`${pizza} does not exist`);
	    return;
    }
    cashInRegister += selectedPizza.price;
    /*
    let n = 0;
    let pizzaObj = menu[n];
    for (let memb = menu[n]; n < menu.length; n++) {
        if (menu[n].name === pizza) {
            pizzaObj = menu[n];
        }
    }
   */
    let newOrder = {
	    orderId: orderId
	    pizza: pizzaObj,
	    status: 'ordered'	    
   };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
