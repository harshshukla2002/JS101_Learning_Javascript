var arr=["Akash","Akriti","Rahul","Pratap"];
var count=0;
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(arr[i][0]=="A" || arr[i][j]=="a" ){
      count++;
break;
    }
  }
}
console.log(count);