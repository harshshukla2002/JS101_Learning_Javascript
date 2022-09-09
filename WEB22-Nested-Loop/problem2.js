for (let i = 1; i <= 5; i++) {
  let bag = "";
  let num = "";
  for (let j = 1; j <= i; j++) {
    num = num+j+" ";
    bag = bag+"*"+" ";
  }
  console.log(num);
  console.log(bag); 
}
