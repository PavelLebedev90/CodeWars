function alphabetPosition(text) {
  let alfabet = [
    "a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
   text = text.toLowerCase();
 
   let textInd = "";
       for(let i = 0; i < text.length; i++){
           for(let arr of alfabet){

                if(arr == text[i]){
                    
                   textInd += alfabet.indexOf(arr) + 1 + " ";
                    
                }
            }

            
            

        }
             textInd = textInd.split(" ");
             textInd.pop();
             return textInd.join(" ");
             
   
}
alphabetPosition("The sunset sets at twelve o' clock.");


/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */