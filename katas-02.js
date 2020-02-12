function add(a,b) {
   
    return a + b;
   // return a += b;
 
 }

 console.log(add(2,4))

 function multiply(a,b) {
   let product = 0;
  // if(a < b){
    for(let i = 1; i <= b; i++){ // look at the less than
      
     //product += a;
      product = add(product, a);

      
    }

//   // } else {
//      for(let i = 1; i <= a; i++){
      
//        product += b;
//       // product = add(product, b);
//      }  
//    }
    
    return product
  }
 console.log(multiply(6,8))

 function power(a,b) {
    let pow = 1;
  //  if(a < b){
        for(let i = 1; i <= b; i++){
          
        // pow *= a;
          pow = multiply(pow, a);
    
          
        }
    
    //    } else {
    //      for(let i = 1; i <= a; i++){
          
    //        pow *= a;
    //       // pow = multiply(pow, b);
    //      }  
    //    }
        
        return pow
 }
 
 console.log(power(3, 4))

 function factorial(a) {
     let fact = a;
     for(let i = (a - 1) ; i >= 1; i--){
         fact = multiply(fact, i)
     //fact *= i;
     }

     return fact
 }
 console.log(factorial(4))

 function fib(n) {
     if (n === 1) {
        return 0;
     } else if(n === 2) {
         return 1;
     } else {
         return add(fib(n-1),fib(n - 2))
     }
    
 }
 console.log(fib(8))