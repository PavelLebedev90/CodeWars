function minMax(arr){
    //let str = arr.join(',');
    //let minArr = Math.min(str);
    //let maxArr = Math.max(str);
    let minMaxArr = [];
     minMaxArr.push(Math.min.apply(null, arr));
      minMaxArr.push(Math.max.apply(null, arr));
    
  return minMaxArr; 
}
minMax([1,2,3,4,5]);
