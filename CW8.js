function oddOrEven(array) {
    let summ = 0;
     for(let i = 0; i < array.length; i++){
       summ += array[i];
     }
    if(summ === 0 || summ % 2 === 0){
      return "even";
    }
    return "odd";
  }
 // если массив [0] или сумма элементов массива = четному числу => 'even', else => "odd"