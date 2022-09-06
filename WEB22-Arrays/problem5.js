var movies=["Bahubali","Shivaji","Pushpa","DC","Avenger"];
for(var i=0;i<=movies.length-1;i++){
  
 /* if we Know index number 
 if(i==2|| i==4){
    continue;
  } */

  //if we don't know the index number
  if(movies[i]=="Pushpa" || movies[i]=="Avengers"){
    continue;
  }
  console.log(movies[i]);
}