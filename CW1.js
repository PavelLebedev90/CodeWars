
function digPow(n, p){
    n = String(n);
    let k = 0;
    for(let i = 0; i < n.length; i++){
      k += Math.pow(n[i], (p + i));
      
    }
    k = k / n;
    if(k > 0 && (k % 1) === 0){
      return k;
    }
    return -1;
  }