function add(a,b) {
   
    return a + b;
   // return a += b;
 
 }

 add(1,2);

 function multiply(a,b) {
   let product = 0;
   if(a < b){
    for(let i = 1; i <= b; i++){
      
     // product += a;
     product = add(product, a);

      
    }

   } else {
     for(let i = 1; i <= a; i++){
      
      // product += b;
      product = add(product, b);
     }  
   }
    
    return product
  }
 multiply(1,2);

 function power(a,b) {
    let pow = 1;
    if(a < b){
        for(let i = 1; i <= b; i++){
          
         // pow *= a;
          pow = muliply(pow, a);
    
          
        }
    
       } else {
         for(let i = 1; i <= a; i++){
          
          // pow *= b;
           pow = multiply(pow, b);
         }  
       }
        
        return pow
 }
 
 power(8, 2)