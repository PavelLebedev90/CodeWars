function list(names){
    let namesStr = '';
    
    for(let i = 0; i < names.length; i++){
        
        if(names.length == 1){
            return  names[i].name;
        }else if(names.length == 2){
            return  names[i].name + " & " + names[i + 1].name;
        }else{
                if(names[i].name === names[names.length - 2].name){
                    namesStr += names[i].name + " & " + names[names.length-1].name;
                    return namesStr;
                }else{
                    namesStr += names[i].name + ", "; 
                }
             
                
             
            
        }
     
    }
    return namesStr;
  }
  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);


/*   Given: an array containing hashes of names

Return: a string formatted as a list of names
 separated by commas except for the last two 
 names, which should be separated by an ampersand. */






/*   Given: an array containing hashes of names

Return: a string formatted as a list of names separated by 
commas except for the last two names, which should be separated 
by an ampersand. */