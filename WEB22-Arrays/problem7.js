//Given a character in lower case print the upper case character

var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ARR=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var store=[];
for(var i=0;i<arr.length;i++){
  if(arr[i]!=ARR[i]){
    store.push(ARR[i]);
  }
}
console.log(store);