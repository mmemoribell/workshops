"use script"
function estimateBtnClicked() {
    const checkInDate = new Date(document.getElementById("checkInDate").value);
    const numberOfNights = document.getElementById("#numberOfNights").value;
    let roomSelection = document.querySelector("input[name='roomSelection']:checked");
    let discounts = document.querySelector("input[name='discount']:checked");

    let priceForQueenKing = 150 * numberOfNights;
    let priceOfSuite = 210 * numberOfNights;
    let price = 0;
    
let currentMonth = checkInDate.getMonth();
let inSeason = false
switch (currentMonth) {
    case 5:
    case 6:
    case 7:
        inSeason = true;
        break;
        default:
          inSeason = false;
        break;
}

if (inSeason && (roomSelection == "queen" || roomSelection == "king" )) {
    price = 250 * numberOfNights;
} else if(!inSeason && (roomSelection == "queen" || roomSelection == "king")) {
    price = 150 * numberOfNights;
}
if (inSeason && (roomSelection == "2bdSuite" )) {
    price = 350 * numberOfNights;
}
  else if(!inSeason && (roomSelection == "2bdSuite")) {
    price = 210 * numberOfNights;
}

if (discount == "AAA/Senior") {
    price = .10 * roomCost;
}
if (discount == "military") {
    price = .20 * roomCost;
}

const taxes = 12% ;
const roomCost = document.getElementsById("#roomCost").innertext;
}
//input price values on each room -
//make a value of 250$ for all rooms if check in dat is durin jun-aug-
//max capaciry for queen is 5, king 2, 2bdsuite 6.
//which will give a message of max capacity
//implement a function of getroomrate()
//add discount aa/senior 10%,military is 20%
//conformation number

 