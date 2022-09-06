//Given an array of numbers find the average of all the even numbers.

var sum=0;
var count=0;
var arr=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count);