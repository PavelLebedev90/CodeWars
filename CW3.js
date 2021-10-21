var uniqueInOrder = function(iterable){
    let mass = [];
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i+1]){
            mass.push(iterable[i]);
        }
        
    }
    return mass;
    
  }
  uniqueInOrder("AABB1122");
  