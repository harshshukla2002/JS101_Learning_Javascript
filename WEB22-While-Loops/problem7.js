//Print the sum of all the multiples of 3 from 0 to the given limit

var x=3;
var sum=0;

while(x<=30){
  if(x%3==0){
    sum=sum+x
  }
  x++;
}
console.log(sum);