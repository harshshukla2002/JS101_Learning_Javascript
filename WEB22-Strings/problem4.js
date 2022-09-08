//Given an array of string count the overall total number of characters

var arr=["akash","rahul","atul","vipin","aadi"];
var total=0;

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
   total++; 
  }
}
console.log(total);