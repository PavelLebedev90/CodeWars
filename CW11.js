const binaryArrayToNumber = arr => {
let str = parseInt(arr.join(''), 2);
return str;
};

binaryArrayToNumber([0, 0, 0, 1]);

/* Given an array of ones and zeroes, 
convert the equivalent binary value to an integer. */