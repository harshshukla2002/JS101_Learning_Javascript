let a="Masai School A Transformation in education";
let count=0;
for(let i=0;i<a.length;i++){
  if(a[i]==" "){
    count++;
  }
}
if(a.length==0){
  console.log(0);
}else {
  console.log(count+1);
}
