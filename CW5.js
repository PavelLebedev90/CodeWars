function getSum( a,b )
{   let summ = 0;
   
     if(a === b){
         return a;
     }
     
     
     else if( a < b){
        for(let i = a; i <= b; i++){
         summ += i;
        }
     }else{
        for(let i = a; i >= b; i--){
            summ += i;
        }
     }   
     return summ;
   
}
getSum(1,1);