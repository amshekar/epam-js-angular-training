
function rentalCarCost(d) {
  // Your solution here
 var days=Number(d),baseFare=40,totalRent=0;
 if(days <3)
  totalRent = (days*baseFare);
 else if(days >=3 && days<7)
  totalRent = (days*baseFare) - 20;
 else if(days >=7)
  totalRent = (days*baseFare)-50;  
  return totalRent;
}
