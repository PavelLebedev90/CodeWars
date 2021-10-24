

  

function zero(a ) {
    if(a == undefined){
        return 0;
    }
      else if(a.indexOf("*") >= 0){
        return 0 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return 0 / parseInt(a);
    }else if(a.indexOf("-") >= 0){
        return 0 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 0 + parseInt(a);
    }
    
}
function one( a ) {
    if(a == undefined){
        return 1;
    }
      else if(a.indexOf("*") >= 0){
        return 1 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(1 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 1 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 1 + parseInt(a);
    }
    
}
function two( a ) {
    if(a == undefined){
        return 2;
    }
     else if(a.indexOf("*") >= 0){
        return 2 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(2 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 2 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 2 + parseInt(a);
    }
    
}
function three( a ) {
    if(a == undefined){
        return 3;
    }
      else if(a.indexOf("*") >= 0){
        return 3 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(3 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 3 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 3 + parseInt(a);
    }
    
}
function four( a ) {
    if(a == undefined){
         return 4;
    }
      else if(a.indexOf("*") >= 0){
        return 4 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(4 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 4 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 4 + parseInt(a);
    }
    
}
function five( a) {
    if(a == undefined){
        return 5;
    }
      else if(a.indexOf("*") >= 0){
        return 5 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(5 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 5 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 5 + parseInt(a);
    }
    
}
function six(a) {
    if(a == undefined){
        return 6;
    }
      else if(a.indexOf("*") >= 0){
        return 6 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(6 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 6 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 6 + parseInt(a);
    }
}
function seven(a) {
    if(a == undefined){
        return 7;
    }
    else if(a.indexOf("*") >= 0){
        return 7 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(7 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 7 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 7 + parseInt(a);
    }
    
}
function eight(a) {
    if(a == undefined){
        return 8;
    }
      else if(a.indexOf("*") >= 0){
        return 8 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(8 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 8 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 8 + parseInt(a);
    }
}
function nine(a ) {
    if(a == undefined){
        return 9;
    }
      else if(a.indexOf("*") >= 0){
        return 9 * parseInt(a);
    }else if(a.indexOf("/") >= 0){
        return Math.floor(9 / parseInt(a));
    }else if(a.indexOf("-") >= 0){
        return 9 - parseInt(a);
    }else if(a.indexOf("+") >= 0){
        return 9 + parseInt(a);
    }
}

function plus(a) {
  return  a + "+";
}
function minus(a) {
  return  a + "-";
}
function times(a) {
  return  a + "*";
}
function dividedBy(a) {
  return  a + "/";
}

seven(times(five()));

four(plus(nine()));


/* This time we want to write calculations
 using functions and get the results. Let's have a look at some examples: */
