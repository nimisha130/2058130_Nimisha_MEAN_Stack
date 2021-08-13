var cartItems = [];
var itemString;
var amount;
var amountString;
function addToAmount() {
    amountString = sessionStorage.getItem("amount");
    amount = JSON.parse(amountString);
    document.getElementById("cartSize").innerHTML = amount.toString();
}
function addToItem(id) {
    itemString = sessionStorage.getItem("item");
    cartItems = JSON.parse(itemString);
    cartItems[id].numberOfItems += 1;
    itemString = JSON.stringify(cartItems);
    sessionStorage.setItem("item", itemString);
    amountString = sessionStorage.getItem("count");
    amount = JSON.parse(amountString);
    amount++;
    document.getElementById("cartSize").innerHTML = amount.toString();
    amountString = JSON.stringify(amount);
    sessionStorage.setItem("count", amountString);
}
function cartCheckout() {
    itemString = sessionStorage.getItem("item");
    cartItems = JSON.parse(itemString);
    var infoTableData = "";
    var row;
    var math;
    var total = 0;
    var i;
    for (i = 0; i < 4; i++) {
        if (cartItems[i].numberOfItems == 0)
            continue;
        else {
            math = cartItems[i].numberOfItems * cartItems[i].price;
            row = "<tr><td>" + cartItems[i].name + "</td><td>" + cartItems[i].numberOfItems + "</td><td>$" + math + "</td></tr>";
            infoTableData += row;
            total += math;
        }
    }
    document.getElementById("table").innerHTML = infoTableData;
    document.getElementById("total").innerHTML = total.toString();
}
