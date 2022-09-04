var total_bill=7;
var discount_bill=650;

if(discount_bill<=total_bill){
  new_bill=total_bill-(total_bill*0.10);
  console.log("your bill is:", new_bill);
}
else{
console.log("your bill is:", total_bill);
}