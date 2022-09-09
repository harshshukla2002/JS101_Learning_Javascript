//Print Prime Numbers from 1 to given limit

var num=9;
var flag=true;
    for(i = 2; i <= num - 1; i++)
                if (num % i == 0) {
                    flag = false;
                    break;
                }
                 
            if (flag == true){
                console.log("Prime");
            }
            else{
                console.log("Not Prime"); 
            }