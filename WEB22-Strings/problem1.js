// changing a string value
var str="Donald";
var bag="";

for(i=0;i<str.length;i++){
  if(str[i]=="D"){
    bag=bag+"R";
  }
  else {
    bag=bag+str[i];
  }
}
console.log(bag);