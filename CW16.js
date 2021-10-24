function solution(string) {
    let str = "";
    for(let char of string){
        
        
      if(char === char.toLowerCase()){
          
        str += char;

      }else{
          str =  str + " " + char;
      }
    }
  return str
}
solution('camelCasing');
// разделить слова пробелом, если верблюжий стиль