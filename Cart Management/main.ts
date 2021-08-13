interface items{ 
    name: string;
    price: number;
    numberOfItems: number;
}

let cartItems: items[] = []
let itemString: string;
let amount: number;
let amountString: string;

function addToAmount(): void{
    amountString=sessionStorage.getItem("amount");
    amount = JSON.parse(amountString);
    document.getElementById("cartSize").innerHTML=amount.toString();
}

function addToItem(id:number): void {
    itemString=sessionStorage.getItem("item");
    cartItems = JSON.parse(itemString);

    cartItems[id].numberOfItems+=1;

    itemString=JSON.stringify(cartItems);
    sessionStorage.setItem("item",itemString);

    amountString=sessionStorage.getItem("count");
    amount = JSON.parse(amountString);
    amount++;
    
    document.getElementById("cartSize").innerHTML=amount.toString();

    amountString=JSON.stringify(amount);
    sessionStorage.setItem("count",amountString);
}

function cartCheckout(): void {
    itemString=sessionStorage.getItem("item");
    cartItems = JSON.parse(itemString)
    let infoTableData: string = "";
    let row: string;
    let add: number;
    let totalPrice: number = 0;
    let i: number;
    for(i=0;i<4;i++){

        if(cartItems[i].numberOfItems==0) continue;
        else{
            add = cartItems[i].numberOfItems*cartItems[i].price;
            row="<tr><td>"+cartItems[i].name+"</td><td>"+cartItems[i].numberOfItems+"</td><td>$"+add+"</td></tr>";
            infoTableData+=row;
            totalPrice+=add;
        }
    }
    document.getElementById("table").innerHTML=infoTableData;
    document.getElementById("totalPrice").innerHTML=totalPrice.toString();
}