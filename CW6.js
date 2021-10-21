function arrayDiff(a, b) {
    let a1 = a.slice();
    for(i = 0; i < a.length; i++){
      for(g = 0; g < b.length; g++){
        if(a[i] === b[g]){
            delete a1[i];
            
          }
          
      }
    }

    return a1.filter(Number);
  }
 