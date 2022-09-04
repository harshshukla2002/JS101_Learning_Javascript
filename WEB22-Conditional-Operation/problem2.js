
var ent_email="abc@gmail.com";
var ent_pass=1223;

var reg_email="abcd@gmail.com";
var reg_pass=1223;

if(reg_email==ent_email){
  if(reg_pass==ent_pass){
    console.log("Login Successful");
  }
  else{
    console.log("Password Wrong");
  }
  } 
else{
    console.log("Email Wrong");
  
}