function tickets(peopleInLine){
    let vasya = 0;
  for(let i = 0; i < peopleInLine.length; i++){
      if(peopleInLine[i] === 25){
        vasya += peopleInLine[i]; 
    }else if(vasya >= peopleInLine[i] ||
             vasya >= peopleInLine[i] - 25){
                vasya -= (peopleInLine[i] - 25);
      }
      else{
          return "no";
      }
      
  }
  return "yes";
}
tickets([25,25,50,50]);
tickets([25,100]);
  tickets([25, 25, 50]);
  tickets([25, 25, 50, 50, 100]);