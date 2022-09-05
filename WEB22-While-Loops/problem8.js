//Print the average of even numbers from 1 to 100 (both included)

var x=1;
var sum=0;
var count=0;

while(x<=100){
  if(x%2==0){
    sum=sum+x;
    count=count+1;
  }
  x++;
}
console.log(sum/count);